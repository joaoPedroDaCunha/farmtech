using Farmtech.Core.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace Farmtech.Core.Api.Controllers;

[ApiController]
[Route("[controller]")]

 public class DataReservoirController : ControllerBase
 {
    [HttpGet]
    public IActionResult Get()
    {
        var dataReservoir = new DataReservoir(){

        };
        return Ok();
    }

 }