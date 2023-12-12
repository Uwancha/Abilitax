import React from "react";
import Link from "next/link";


const NotFound: React.FC = () => {
  return (
    <div className="mx-auto py-100 " style={{width:'100%', margin: 'auto'}}>
      <h2 className="text-2xl mb-5">opps! page not found </h2>
      <p className="mb-5">The page you are looking for does not exist.</p>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default NotFound;