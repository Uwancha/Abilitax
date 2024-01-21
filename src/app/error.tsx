'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2 className="text-xl">Something went wrong!</h2>
      <button className="rounded-full" onClick={() => reset()}>Please try again</button>
    </div>
  )
}