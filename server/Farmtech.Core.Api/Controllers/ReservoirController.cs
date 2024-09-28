using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ReservoirController(IReservoirRepository reservoir) : ControllerBase
{

    private readonly IReservoirRepository _Reservoir = reservoir;

    [HttpPost]
    public IActionResult Post()
    {
        return Ok("Hello Word");
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Hello World");
    }

}