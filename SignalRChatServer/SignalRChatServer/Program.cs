using SignalRChatServer.Hubs;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddCors(option => option.AddDefaultPolicy(policy => policy.AllowCredentials()
.AllowAnyHeader()

.SetIsOriginAllowed(x => true)
)) ;

var app = builder.Build();


app.UseCors();
app.UseRouting();
app.UseEndpoints(endpoints =>
endpoints.MapHub<ChatHub>("chathub"));



app.MapRazorPages();

app.Run();
