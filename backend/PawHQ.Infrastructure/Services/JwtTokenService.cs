using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PawHQ.Application.Interfaces;
using PawHQ.Domain.Entities;

namespace PawHQ.Infrastructure.Services;

public class JwtTokenService : IJwtTokenService
{
    private readonly string _jwtKey;

    public JwtTokenService(IConfiguration config)
    {
        _jwtKey = config["JWT_KEY"] ?? throw new Exception("JWT_KEY not set in env");
    }

    public string GenerateToken(ApplicationUser user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Email, user.Email ?? ""),
        };
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.UtcNow.AddDays(7),
            signingCredentials: creds
        );
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
