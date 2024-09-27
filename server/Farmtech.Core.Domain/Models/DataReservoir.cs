using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ling;
using System.Threading.Tasks;

namespace Farmtech.Core.Domain.Models;

public class DataReservoir
{
    //id unico da informação
    [Key]
    public int id {get;set;}
     // inicio das variaves utilizadas para as regras de negocio
    public DateTime data {get;set;}
    public decimal capacidade{get;set;}
    public decimal altura{get;set;}
    public decimal volume_atual{get;set;}
    //fim das variaves utilizadas para as regras de negocio
    //variavel para ligar com o reservatorio referente a esses dados
    public int? ReservoirId{get;set;}
    public Reservoir? Reservoir{get;set;}
}