import React, { Suspense } from "react";

// Components
import Nav from "../components/Header";
import BlogPosts from "./BlogPosts";
import Loading from "./loading";


const Blog: React.FC = () => {
    return (
        <div className="blog-home py-40" >
            <Nav />
            <div className="mt-20">
                <Suspense fallback={<Loading />}>
                <BlogPosts />
                </Suspense>
            </div>               
        </div>
    )
}

export default Blog;