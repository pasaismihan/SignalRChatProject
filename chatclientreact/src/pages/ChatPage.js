import React, { useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import "../style/chatpage.css"


const ChatPage = () => {
  const hubConnection = useRef(null);
  const messageInputRef = useRef(null);

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (message) {
      hubConnection.current.invoke("SendMessage", message);
      messageInputRef.current.value = "";
    }
  };

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-3">
            <input className="form-control form-control-lg disabled" type="text" placeholder="Oda adı" />
            <button type="button" className="btn btn-info rightButton disabled">Oda Oluştur</button>
            <select size="5" style={{ width: "100%" }} className="form-select disabled" multiple>
              <option value="-1">Odalar</option>
            </select>
            <button type="button" className="btn btn-primary rightButton disabled">Seçili Odalara Gir</button>
            <br /><br /><br />
            {/* Clientlar */}
            <div className="list-group">
              <a className="list-group-item list-group-item-action users active">
                Tümü
              </a>
              <div id="_clients"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="alert alert-success" id="clientDurumMesajlari" style={{ display: "none" }}></div>
            {/* Mesajlaşma */}
            <div className="list-group messages">
              <a className="list-group-item list-group-item-action message" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                  <h5 ></h5>
                  <h5 ></h5>
                </div>
                <p className="mesaj-icerigi"></p>
              </a>
            </div>
            <br /><br /><br /><br /><br /><br />
            <div className="send-area">
              
                <textarea style={{ marginTop: "5px" }} placeholder="İletilecek mesajı buraya giriniz" rows="3" id="txtMesaj"></textarea>
             
              <button type="button" className="send-button" id="btnGonder">Gönder</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>);
};


export default ChatPage;