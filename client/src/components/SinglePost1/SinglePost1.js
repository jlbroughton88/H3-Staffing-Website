import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SinglePost1.scss";
import { useAuth0 } from "../../contexts/auth-context";


const SinglePost1 = () => {

    const [post, setPost] = useState({});
    const { statusUrl } = useAuth0();

    useEffect(() => {
        const postUid = window.location.pathname.replace("/blog/", "");
        console.log(statusUrl)
        axios
            .get(`${statusUrl}/api/blogpost/get/${postUid}`)
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