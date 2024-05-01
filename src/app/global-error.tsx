'use client';

import Nav from "./components/Header"

export default function GlobalError({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    
  return (
    <html>
      <body>
        <Nav />  
        <div className="w-1/4 mx-auto my-40 ">
          <h2 className="text-2xl lime">Something went wrong!</h2>
          <button onClick={() => reset()} className="midnight">Try again</button>
        </div>
      </body>
    </html>
  );
};