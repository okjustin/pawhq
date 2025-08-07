using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PawHQ.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("public")]
    public IActionResult GetPublic()
    {
        return Ok("Public endpoint");
    }

    [HttpGet("private")]
    // [Authorize]
    public IActionResult GetPrivate()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var email = User.FindFirst(ClaimTypes.Email)?.Value;

        return Ok(new { userId, email });
        
        // var userEmail = User.Identity?.Name;
        // return Ok($"Hello, {userEmail}, you've accessed the protected route.");
    }
}