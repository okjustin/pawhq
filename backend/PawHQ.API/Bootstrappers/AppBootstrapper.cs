namespace PawHQ.API.Bootstrappers;

public static class AppBootstrapper
{
  public static void ConfigureApp(this WebApplicationBuilder builder)
  {
    DotNetEnv.Env.TraversePath().Load();
    builder.Configuration.AddEnvironmentVariables();
  }

  public static void ConfigureMiddleware(this WebApplication app)
  {
    if (!app.Environment.IsDevelopment())
    {
      app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseAntiforgery();
    app.UseCors("AllowAll");
  }

  public static void ConfigureEndpoints(this WebApplication app)
  {
    app.MapControllers();

    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
    }
  }
}