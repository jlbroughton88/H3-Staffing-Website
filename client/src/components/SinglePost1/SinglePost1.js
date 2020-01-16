import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SinglePost1.scss";

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
        <div className="singleMother">
            <div className="singleMain">
                <div className="singlePostContainer">
                    <h1 className="singleTitle">{post.title}</h1>
                    <p className="singleText">{post.blog_text}</p>
                    <hr className="singleHr" />
                    <div className="dateTimeSingle">
                        <p className="singleTime">{post.time_created}</p>
                        <p className="singleDate">{post.date_created}</p>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePost1;