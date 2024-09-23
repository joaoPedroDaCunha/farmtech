using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ling;
using System.Threading.Tasks;

namespace Farmtech.Core.Domain.Models;
//criando a classe usuario
public class User
{
    //id do usuario para diferencialo dos outros
    [Key]
    public int id {get;set;}
    //email do usuario 
    [Required(ErrorMessage = "Por favor informe o E-mail")]
    [Column(TypeName ="nvarchar(100)")]
    public string email{get;set;} = string.Empty;
    //variavel para informar se o usuario possui permissão de admin ou não
    public bool admin{get;set;}
    //variavel para informar a qual workspace o usuario possui acesso
    public int? WorkspaceId{get;set;}
    public Workspace? Workspace{get;set}
}