using MediatR;
using PawHQ.Application.DTOs;

namespace PawHQ.Application.Features.Auth;

public record LoginUserCommand(string Email, string Password) : IRequest<AuthResponseDto>;