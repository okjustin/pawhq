using MediatR;
using Microsoft.AspNetCore.Mvc;
using PawHQ.Application.DTOs;
using PawHQ.Application.Features.Auth;

namespace PawHQ.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IMediator _mediator;

    public AuthController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthResponseDto>> Register(RegisterUserCommand command)
    {
        return Ok(await _mediator.Send(command));
    }

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponseDto>> Login(LoginUserCommand command)
    {
        return Ok(await _mediator.Send(command));
    }
}