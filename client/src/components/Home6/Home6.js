import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home6.scss"

const Home6 = () => {

    const [blogPosts, setBlogPosts] = useState([])


    const getBlogs = () => {
        axios
            .get(`http://localhost:5003/api/blogpost/get`)
            .then(response => setBlogPosts([...response.data.reverse()]))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getBlogs();
    }, [])



    return (
        <div className="blogMother">
            <div className="blogMain">
                <h1 className="blogHead">H3 Blog</h1>
                <div className="postGrid">
                    {blogPosts.splice(0, 3).map(post =>
                        <Link key={post.uid} to={`/blog/${post.uid}`}>
                            <div key={post.uid} className="blogPost">
                                <h3 className="blogTitle">{post.title}</h3>
                                <div className="dateTimeDiv">
                                    <p className="blogTime">{post.time_created}</p>
                                    <p className="blogDate">{post.date_created}</p>
                                </div>
                                <hr className="blogsHr" />
                                {post.blog_text.length > 150 ?
                                    <p className="blogText">{post.blog_text.slice(0, 150)}...</p>
                                    :
                                    <p className="blogText">{post.blog_text}</p>
                                }

                            </div>
                        </Link>

                    )}
                </div>

            </div>

        </div>
    )
}

export default Home6;