using PawHQ.API.Bootstrappers;

var builder = WebApplication.CreateBuilder(args);
builder.ConfigureApp();
builder.Services.ConfigureServices(builder.Configuration, builder.Environment);

var app = builder.Build();

await DatabaseBootstrapper.InitializeAsync(app.Services);

app.ConfigureMiddleware();
app.ConfigureEndpoints();

app.Run();
