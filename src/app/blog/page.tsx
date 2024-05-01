// Components
import Nav from "../components/Header";
import BlogPosts from "./BlogPosts";

const Blog = () => {
    return (
        <>
            <Nav />
            <div className="bg-whitesmoke py-10" >
                <div className="mt-20">
                    <BlogPosts />
                </div>               
            </div>
        </>
    );
};

export default Blog;