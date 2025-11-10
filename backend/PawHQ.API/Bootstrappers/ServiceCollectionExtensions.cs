using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PawHQ.API.Options;
using PawHQ.Application.Interfaces;
using PawHQ.Domain.Entities;
using PawHQ.Infrastructure.Data;
using PawHQ.Infrastructure.Services;

namespace PawHQ.API.Bootstrappers;

public static class ServiceCollectionExtensions
{
  public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration, IHostEnvironment environment)
  {
    DotNetEnv.Env.TraversePath().Load();

    services.AddControllers();
    services.AddMemoryCache();
    services.AddCors();

    // var keysPath = configuration["DataProtection:KeysPath"] ?? "/app/data_protection_keys/";
    // Directory.CreateDirectory(keysPath);
    // services.AddDataProtection()
    //   .PersistKeysToFileSystem(new DirectoryInfo(keysPath))
    //   .SetApplicationName("PawHQ")
    //   .SetDefaultKeyLifetime(TimeSpan.FromDays(14));

    // services.AddSingleton<IEmailService, StubEmailService>();

    // services.AddOptions<EmailOptions>()
    //   .Bind(configuration.GetSection("Email"))
    //   .ValidateDataAnnotations()
    //   .ValidateOnStart();

    // services.AddOptions<StorageOptions>()
    //   .Bind(configuration.GetSection("Storage"))
    //   .ValidateDataAnnotations()
    //   .ValidateOnStart();

    // services.AddDefaultAWSOptions(configuration.GetAWSOptions());
    // services.AddAWSService<IAmazonS3>();

    services.AddDbContextFactory<AppDbContext>(options =>
    {
      options.UseNpgsql(configuration.GetConnectionString("PawHQ"));
    });

    services.AddIdentityCore<ApplicationUser>()
      .AddRoles<IdentityRole<Guid>>()
      .AddEntityFrameworkStores<AppDbContext>()
      .AddSignInManager()
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
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_KEY")!))
      };

      options.Events = new JwtBearerEvents
      {
        OnAuthenticationFailed = context =>
        {
          Console.WriteLine("JWT Auth failed: " + context.Exception.Message);
          return Task.CompletedTask;
        },
        OnTokenValidated = context =>
        {
          Console.WriteLine("JWT Auth success for: " + context.Principal.Identity?.Name);
          return Task.CompletedTask;
        }
      };
    });

    services.AddAuthentication();

    services.AddAuthorization();

    services.AddMediatR(cfg =>
    {
        cfg.RegisterServicesFromAssembly(typeof(Application.AssemblyReference).Assembly);
    });

    services.AddScoped<IJwtTokenService, JwtTokenService>();

    services.AddOpenApi();

    // services.AddScoped<IStorageService, S3StorageService>();

    // services.AddHealthChecks()
    //   .AddDbContextCheck<AppDbContext>("Database");
  }
}