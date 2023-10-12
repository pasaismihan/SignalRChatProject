import React, { useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";


const UserPage = () => {
    return (
        <div>
            <div className="col-md-3">
                <input className="form-control form-control-lg" type="text" placeholder="Adınız/Nick" id="txtNickName" />
                <button type="button" className="btn btn-success leftButton" id="btnGirisYap">Giriş Yap</button>
            </div>
        </div>
    )
}

export default UserPage;