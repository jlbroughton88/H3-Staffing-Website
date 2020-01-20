import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth-context";
import "./AllPosts1.scss";

const AllPosts1 = () => {

    const { statusUrl } = useAuth0();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(`${statusUrl}/api/blogpost/get`)
            .then(response => setPosts([...response.data]))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="allMother">
            <h1 className="allHead">All Posts</h1>
            <div className="postGrid">
                    {posts.reverse().map(post =>
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
    )
}

export default AllPosts1;