import React, { useEffect, useState } from "react";
import axios from "axios";

const Home6 = () => {

    const [blogPosts, setBlogPosts] = useState([])


    const getBlogs = () => {
        axios
            .get(`http://localhost:5003/api/blogpost/get`)
            .then(response => setBlogPosts([...response.data]))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getBlogs();
    }, [])



    return (
        <div>
            <h1>{blogPosts.map(post => <div>{post.blog_text}</div>)}</h1>
        </div> 
    )
}

export default Home6;