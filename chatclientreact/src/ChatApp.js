import React, { useState, useRef, useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { url } from "./services/Url";
import ChatPage from "./pages/ChatPage";
import UserPage from "./pages/UserPage";

function ChatApp() {
  const connectionRef = useRef(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder().withUrl(url).build();

    const startConnection = async () => {
      try {
        await connection.start();
        console.log("Server Bağlantısı Sağlandı.");
      } catch (error) {
        console.log(error);
        setTimeout(startConnection, 5000);
      }
    };
    connection.onclose(async () => {
      await startConnection();
    });

    startConnection();

    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
      }
    };
  }, []);

  return <div>
    <ChatPage/>
  </div>;
}

export default ChatApp;
