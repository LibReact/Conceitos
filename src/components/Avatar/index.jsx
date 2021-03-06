import React from "react";

function Avatar (props) {

    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.firstName}
        />
    )
}

export default Avatar;