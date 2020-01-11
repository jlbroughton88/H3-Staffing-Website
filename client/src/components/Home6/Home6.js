import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home6.scss"

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
        <div className="blogMother">
            <div className="blogMain">
                <h1 className="blogHead">Upcoming Events</h1>
                <div className="postGrid">
                    {blogPosts.map(post =>
                        <div key={post.uid} className="blogPost">
                            <h2 className="blogTitle">{post.title}</h2>
                            <h4 className="blogText">{post.blog_text}</h4>
                            <h6 className="blogDate">{post.date_created}</h6>
                            <h6 className="blogTime">{post.time_created}</h6>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Home6;