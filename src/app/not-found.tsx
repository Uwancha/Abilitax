import React from "react";
import Link from "next/link";
import Nav from "./components/Header";


const NotFound: React.FC = () => {
  return (
    <main className="h-screen">
      <Nav />
      <div className="w-full sm:w-1/2 mx-auto mt-40 text-center">
        <h2 className="text-xl sm:text-2xl mb-5">Opps! page not found </h2>
        <p className="mb-5">
          The page you were looking for does not exist.
        </p>
        <Link href="/" className="text-blue-400">
          Back to Home page
        </Link>
      </div>
    </main>
  );
}

export default NotFound;