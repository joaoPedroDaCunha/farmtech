using System.ComponentModel.DataAnnotations;

namespace Farmtech.Core.Domain.Models;
//criando a classe usuario
public class User
{
    //id do usuario para diferencialo dos outros
    [Key]
    public int id {get;set;}
    //email do usuario 
    [Required(ErrorMessage = "Por favor informe o E-mail")]
    public string email{get;set;}
    //variavel para informar se o usuario possui permissão de admin ou não
    public bool admin{get;set;}
    //variavel para informar a qual workspace o usuario possui acesso
    public int foreign_key{get;set;}
}