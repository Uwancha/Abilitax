'use client';

import Nav from "./components/Header"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <Nav />
      <div className="lg:w-1/4 mx-auto my-40 ">
        <h2 className="text-xl midnight mb-8">Something went wrong!</h2>
        <button className="rounded-full lime cursor-pointer" onClick={() => reset()}>Please try again</button>
      </div>
    </>
  );
};