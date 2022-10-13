import { experimental_use as use } from "react";
import Link from "next/link";

async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return await res.json();
}

export default function Layout({ children }) {
  let movies = use(getMovies());

  return (
    <div className="flex">
      <nav className="p-4 border-r w-1/3">
        <p className="text-2xl">
          <Link href="/movies">Movies</Link>
        </p>
        <div className="mt-6">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <a>{movie.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>

      <main className="w-2/3">{children}</main>
    </div>
  );
}
