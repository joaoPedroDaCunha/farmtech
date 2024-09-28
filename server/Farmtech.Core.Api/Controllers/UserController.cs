using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController(IUserRepository user) : ControllerBase
{

    private readonly IUserRepository _User = user;

    [HttpPost]
    public IActionResult Post()
    {
        return Ok();
    }

    [HttpGet]
    public IActionResult Get()
    {
        var user = _User.Get();

        return Ok(user);
    }
}