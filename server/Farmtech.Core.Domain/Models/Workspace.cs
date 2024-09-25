using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Farmtech.Core.Domain.Models;

public class Workspace
{
    [Key]
    public int Id { get; set; }
    [Required(ErrorMessage = "O nome do WorkSpace é obrigatorio")]
    [Column(TypeName ="nvarchar(100)")]
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; }

    //lista de emails  cadastrados nesse Workspace
    public List<User> User {get;set;} = new List<User>();
    
    //lista de reservatorios cadastrados nesse Workspace
    public List<Reservoir> Reservoir {get;set;} = new List<Reservoir>();
};