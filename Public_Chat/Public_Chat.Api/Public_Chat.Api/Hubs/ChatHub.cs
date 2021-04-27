using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Public_Chat.Api.Hubs
{
    public class ChatHub : Hub
    {
        public Task SendMessage(string user, string message)
        {
            return Clients.All.SendAsync("ReceiveOne", user, message);
        }
    }
}
