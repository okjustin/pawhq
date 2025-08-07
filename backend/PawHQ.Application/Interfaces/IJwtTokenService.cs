using PawHQ.Domain.Entities;

namespace PawHQ.Application.Interfaces;

public interface IJwtTokenService
{
    string GenerateToken(ApplicationUser user);
}