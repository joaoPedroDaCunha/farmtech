using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ReservoirController : ControllerBase
{

    [HttpGet]
    public IActionResult Get()
    {
        var reservoir = new Reservoir();
        return Ok("Hello World");
    }

}