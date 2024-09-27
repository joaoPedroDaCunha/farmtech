using Microsoft.AspNetCore.Mvc;
using Farmtech.Core.Domain.Models;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class WorkspacesController : ControllerBase
{

    [HttpGet]
    public IActionResult Get()
    {
        var Work = new Workspace();
        return Ok("Hello World");
    }

}