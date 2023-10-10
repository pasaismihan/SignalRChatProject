using SignalRChatServer.Hubs;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddCors(option => option.AddDefaultPolicy(policy => policy.AllowCredentials()
.AllowAnyHeader()
.AllowAnyOrigin()
.SetIsOriginAllowed(x => true)
)) ;

var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
   
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors();
app.UseRouting();
app.UseEndpoints(endpoints =>
endpoints.MapHub<ChatHub>("chathub"));

app.UseAuthorization();

app.MapRazorPages();

app.Run();
