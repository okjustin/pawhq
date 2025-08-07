using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using PawHQ.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using PawHQ.Application.Interfaces;
using PawHQ.Domain.Entities;
using PawHQ.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var configuration = builder.Configuration;

#if DEBUG
DotNetEnv.Env.Load("../.env.local");
#else
DotNetEnv.Env.Load("../.env");
#endif

services.AddControllers();

services.AddDbContext<AppDbContext>(options =>
{
    options.UseNpgsql(Environment.GetEnvironmentVariable("DB_CONNECTION"));
});

services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_KEY")!))
        };
    });

services.AddAuthorization();

services.AddMediatR(cfg =>
{
    cfg.RegisterServicesFromAssembly(typeof(PawHQ.Application.AssemblyReference).Assembly);
});

services.AddScoped<IJwtTokenService, JwtTokenService>();

services.AddScoped<IEmailService, StubEmailService>();

services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
