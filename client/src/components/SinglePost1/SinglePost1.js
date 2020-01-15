import React, { useEffect, useState } from "react";
import axios from "axios";

const SinglePost1 = () => {

    const [post, setPost] = useState({});

    useEffect(() => {
        const postUid = window.location.pathname.replace("/blog/", "");

        axios
            .get(`http://localhost:5003/api/blogpost/get/${postUid}`)
            .then(response => setPost(response.data))
            .catch(err => console.log(err))
    }, [])
    

    return (
        <div>
<h1>{post.title}</h1>
    <p>{post.blog_text}</p>
<p>{post.date_created}</p>
    <p>{post.time_created}</p>
        </div>
    )
}

export default SinglePost1;