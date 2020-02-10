import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../contexts/auth-context";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading1 from "../Loading1/Loading1";
import "./Profile1.scss";

const Profile1 = () => {
  const { isLoading, user, dbUser, statusUrl } = useAuth0();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit = e => {
    console.log(`Submitting name: ${first} ${last}`);
    addName();
  };

  const addName = () => {
    console.log(first + " " + last + " " + dbUser.email);
    axios
      .get(`${statusUrl}/api/addname/${first}/${last}/${user.email}`, {
        timeout: 200
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    console.log(`Name changed to: ${first} ${last}`);
  };

  if (isLoading) {
    return <Loading1 />;
  }

  return (
    <div className="profile1Mother">
      <div className="profile1Main">
        <h1 className="profileName">
          {dbUser.given_name !== "null" ? dbUser.given_name : dbUser.nickname}'s
          Profile
        </h1>
        {dbUser.given_name === "null" && dbUser.family_name === "null" && (
          <div className="formParent">
            <form onSubmit={handleSubmit} value="Submit">
              <input
                className="nameInputs"
                placeholder="first name"
                type="text"
                value={first}
                name="firstname"
                onChange={e => setFirst(e.target.value)}
              />
              <input
                className="nameInputs"
                placeholder="last name"
                type="text"
                value={last}
                name="lastname"
                onChange={e => setLast(e.target.value)}
              />
              <input
                className="nameSubmit"
                placeholder="submit"
                type="submit"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile1;
