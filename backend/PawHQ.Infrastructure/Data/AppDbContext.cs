using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PawHQ.Domain.Entities;

namespace PawHQ.Infrastructure.Data;

public class AppDbContext : IdentityDbContext<ApplicationUser>
{
    public DbSet<Pet> Pets => Set<Pet>();
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }
}