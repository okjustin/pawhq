using Microsoft.EntityFrameworkCore;
using PawHQ.Infrastructure.Data;

namespace PawHQ.API.Bootstrappers;

public static class DatabaseBootstrapper
{
  public static async Task InitializeAsync(IServiceProvider services)
  {
    using var scope = services.CreateScope();
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await db.Database.MigrateAsync();
  }
}