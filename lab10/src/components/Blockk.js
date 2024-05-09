import React from "react";

function Block(props) {
    return (
        <div className="block">
            <img  src={props.img} alt=" " className="img"/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Block;