using MediatR;
using Microsoft.AspNetCore.Identity;
using PawHQ.Application.DTOs;
using PawHQ.Application.Interfaces;
using PawHQ.Domain.Entities;

namespace PawHQ.Application.Features.Auth;

public class RegisterUserHandler : IRequestHandler<RegisterUserCommand, AuthResponseDto>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IJwtTokenService _jwtService;
    private readonly IEmailService _emailService;

    public RegisterUserHandler(
        UserManager<ApplicationUser> userManager,
        IJwtTokenService jwtService,
        IEmailService emailService)
    {
        _userManager = userManager;
        _jwtService = jwtService;
        _emailService = emailService;
    }

    public async Task<AuthResponseDto> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
    {
        var user = new ApplicationUser
        {
            UserName = request.Email,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName
        };
        
        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
        {
            var errors = string.Join("; ", result.Errors.Select(e => e.Description));
            throw new Exception($"User registration failed: {errors}");
        }

        await _emailService.SendAsync(
            to: request.Email,
            subject: "Welcome to PawHQ!",
            body: "Thanks for signing up!");

        var token = _jwtService.GenerateToken(user);
        return new AuthResponseDto(token, user.Email!);
    }
}