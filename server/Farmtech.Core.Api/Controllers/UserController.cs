using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var use = new User();
        return Ok("Hello World");
    }
}