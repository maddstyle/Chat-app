import React from "react";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
    ? (
      <div className="messgeContainer justifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messgeBox backgroundBlue">
          <p className="messageText colorWhite">{text}</p>
        </div>
      </div>
    )
    : (
      <div className="messgeContainer justifyStart">
        <div className="messgeBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
      </div>
    )
  )
};

export default Message;