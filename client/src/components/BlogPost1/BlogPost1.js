import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "../../contexts/auth-context";
import moment from "moment";
import "./BlogPost1.scss";

const BlogPost1 = () => {
    const [blogTitle, setBlogTitle] = useState("")
    const [blogInput, setBlogInput] = useState("");
    const { user, dbUser } = useAuth0();

    useEffect(() => {

    })

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + max)
    }


     const handleSubmit = (e) => {

        const uid = getRandomInt(100000000, 1000000000);
        const formattedUid = uid.toString();
        const user_uid = dbUser.uid.toString();
        let time = moment().format('LT');
        let date = moment().format('MMMM Do YYYY');
        let formattedTime = time.replace(/\s/g, "");
        let formattedDate = date.replace(/\//g, "-");

        axios
            .post(`http://localhost:5003/api/blogpost/post`, {
                uid : formattedUid,
                user_uid: user_uid,
                author: "null",
                title: blogTitle,
                blog_text: blogInput,
                date_created: formattedTime,
                time_created: formattedDate
            }, { timeout: 300 })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        e.preventDefault();
     }

    return (
        <div className="blogPostMother">
            <div className="blogPostMain">
                <h1 className="blogPostHead">Create a Blog Post!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="blogPostTitle" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
                    <textarea type="text" className="blogPostInput" value={blogInput} onChange={e => setBlogInput(e.target.value)}/>
                    <button type="submit" className="blogPostBtn">Post</button>
                </form>
                
            </div>
        </div>
    )
}

export default BlogPost1;