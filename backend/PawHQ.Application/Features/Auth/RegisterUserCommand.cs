using MediatR;
using PawHQ.Application.DTOs;

namespace PawHQ.Application.Features.Auth;

public record RegisterUserCommand(
    string Email, string Password, string FirstName, string LastName) : IRequest<AuthResponseDto>;