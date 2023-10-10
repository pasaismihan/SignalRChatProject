﻿using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.SignalR;
using SignalRChatServer.Modals;
using SignalRChatServer.Data;

namespace SignalRChatServer.Hubs
{
    public class ChatHub : Hub
    {
        public async Task GetNickName(string nickName)
        {
            Client client = new Client
            {
                ConnectionId = Context.ConnectionId,
                NickName = nickName
            };
            ClientSource.Clients.Add(client);
           await Clients.Others.SendAsync("clientJoined",nickName);
           await Clients.All.SendAsync("clients",ClientSource.Clients);
        }

    }
}
