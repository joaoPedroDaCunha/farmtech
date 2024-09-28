using Microsoft.AspNetCore.Mvc;
using Farmtech.Core.Domain.Models;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class WorkspacesController(Workspace workspace) : ControllerBase
{

    private readonly Workspace _Workspace = workspace;

    [HttpPost]
    public IActionResult Post()
    {
        return Ok();
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok();
    }

}