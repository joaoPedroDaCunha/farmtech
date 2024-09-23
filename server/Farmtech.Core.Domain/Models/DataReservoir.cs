using System.ComponentModel.DataAnnotations;

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
    public int foreign_key
}