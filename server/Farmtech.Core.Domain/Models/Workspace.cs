using System.ComponentModel.DataAnnotations;

namespace Farmtech.Core.Domain.Models;

public class Workspace
{
    [Key]
    public int Id { get; set; }
    [Required(ErrorMessage = "O nome do WorkSpace é obrigatorio")]
    public string Name { get; set; }
    public string Description { get; set; }
};