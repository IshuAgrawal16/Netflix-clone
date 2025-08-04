
import Navbar from "@/components/header/Navbar";

import { prisma } from "@/lib/prisma";
import MovieBanner from "@/components/movies/MovieBanner";
import MovieRow from "@/components/movies/MovieRow";

export default async function Home() {
  const Trailer = await prisma.movie.findFirst({
    where: {
      category: "Trailer",
    },
    orderBy: {
      createdAt: "desc",
    }
  });
  const Popular = await prisma.movie.findMany({
    where: {
      category: "Popular",
    },
    orderBy: {
      createdAt: "desc",
    }
  });
  const Upcoming = await prisma.movie.findMany({
    where: {
      category: "Upcoming",
    },
    orderBy: {
      createdAt: "desc",
    }
  });
  const Trending = await prisma.movie.findMany({
    where: {
      category: "Trending",
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  console.log({ Trailer, Popular, Upcoming, Trending });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="space-y-12 pb-20">
        {Trailer && (
          <MovieBanner
            id={Trailer.id}
            movieName={Trailer.movieName}
            description={Trailer.description}
            videoUrl={Trailer.videoUrl}
          />
        )}

        <section className="px-4 md:px-16 space-y-0">
          <MovieRow title="Trending" movies= {Trending} />
          <MovieRow title="Popular" movies= {Popular} />
          <MovieRow title="Upcoming" movies= {Upcoming} />
        </section>
      </main>
    </div>
  );
}
