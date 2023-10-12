import React, { useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";

const ChatInput = () => {
  const hubConnection = useRef(null);
  const messageInputRef = useRef(null);

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if(message){
        hubConnection.current.invoke("SendMessage",message);
        messageInputRef.current.value = "";
    }
  };

  return <div></div>;
};
