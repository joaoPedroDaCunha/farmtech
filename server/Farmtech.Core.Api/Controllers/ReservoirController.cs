using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ReservoirController(IReservoirRepository reservoir) : ControllerBase
{

    private readonly IReservoirRepository _Reservoir = reservoir;

    [HttpPost]
    public IActionResult Post()
    {
        var reservoir = new Reservoir
        {
            Name = "Reservoir 1",
            AddressIp = "",
            Altura = 0,
            Capacidade = 0,
            VolumeAtual = 0,
        };

        _Reservoir.Add(reservoir);

        return Ok();
    }

    [HttpGet]
    public IActionResult Get()
    {
        var reservoir = _Reservoir.Get();

        return Ok(reservoir);
    }

}