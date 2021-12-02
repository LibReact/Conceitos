import React from "react";
import Avatar from "../Avatar";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
function getGreeting(user) {

    if(user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
  
    return <h1>Hello, Stranger.</h1>
}


// COMPONENT USERINFO
function UserInfo (props) {

    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                <h2>{getGreeting(props.user)}</h2>
            </div>
        </div>
    )
}

export default UserInfo;