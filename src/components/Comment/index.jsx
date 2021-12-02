import React from "react";
import UserInfo from "../UserInfo";



// Converte data yyyy-MM-dd para dd/mm/yyyy
function formatDate(date) {
    // yyyy-MM-dd
    const [year, month, day] =  date.split('-')    

    // dd/mm/yyyy
    return `${day}/${month}/${year}`;
}


// COMPONENT COMMENT
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                <p>{props.text}</p>
            </div>
            <div className="Comment-date">
                <p>Data de nascimento: {formatDate(props.date)}</p>
            </div>
        </div>
    )
}

export default Comment;