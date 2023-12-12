import React, { Suspense } from "react";

// Components
import Nav from "../components/Header";
import BlogPosts from "./BlogPosts";
import Loading from "./loading";


const Blog: React.FC = () => {
    const headerStyle = { 
        backgroundColor: "#fff",
        position: 'absolute',
        width: '100%',
        top: 0,
        color: "slategray",
        boxShadow:  'rgba(50, 50, 93, 0.1) 0px 13px 27px -15px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px',
    }
    
    return (
        <div className="blog-home py-40" >
            <Nav sty={headerStyle} />
            <div className="mt-20">
                <Suspense fallback={<Loading />}>
                <BlogPosts />
                </Suspense>
            </div>               
        </div>
    )
}

export default Blog;