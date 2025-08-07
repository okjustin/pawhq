using MediatR;
using Microsoft.AspNetCore.Identity;
using PawHQ.Application.DTOs;
using PawHQ.Application.Interfaces;
using PawHQ.Domain.Entities;

namespace PawHQ.Application.Features.Auth;

public class LoginUserHandler : IRequestHandler<LoginUserCommand, AuthResponseDto>
{
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IJwtTokenService _jwtService;

    public LoginUserHandler(
        SignInManager<ApplicationUser> signInManager,
        UserManager<ApplicationUser> userManager,
        IJwtTokenService jwtService)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _jwtService = jwtService;
    }

    public async Task<AuthResponseDto> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByEmailAsync(request.Email)
                   ?? throw new Exception("Invalid login");
        
        var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
        if (!result.Succeeded)
        {
            throw new Exception("Invalid login");
        }

        var token = _jwtService.GenerateToken(user);
        return new AuthResponseDto(token, user.Email);
    }
}