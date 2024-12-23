import React, {useEffect, useState} from "react";
import axios from "axios";

import "./header.css";
import {Link} from "react-router-dom";


function Header() {

    const logout=()=>{
        window.location.href = "http://localhost:8081/logout"
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/user-info', {withCredentials: true})
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setUser(null);
            });
    }, []);

    console.log(user);

    return (
        <>
            {user ? (
                <div className="profile">
                    <span className={"fw-bold"}>{user.name}</span>
                    <span>{user.email}</span>
                    <img src={user.picture} className={"p-px rounded-full self-center h-8 w-8"}/>
                    <button onClick={logout}>Выход</button>
                </div>
            ) : null}

        </>
    )

}

export default Header;