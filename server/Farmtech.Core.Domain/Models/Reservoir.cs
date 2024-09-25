using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ling;
using System.Threading.Tasks;

namespace Farmtech.Core.Domain.Models;
//Criando o classe reservatorio e seu atributos 
public class Reservoir
{
    [Key]
    public int id {get;set;}
    //variavel para armazenar o local na rede que o aparelho usado para coletar os dados esta
    [Required(ErrorMessage = "Por favor informe o IP do aparelho")]
    [Range(9,9,ErroMessage ="O iP deve ter nove numeros")]
    public int TCPIP{get;set;};

    [Column(TypeName ="nvarchar(100)")]
    public string name{get;set;} = string.Empty;
    //utilizado para o usuario referenciar o local que esta o reservatorio
    [Column(TypeName ="nvarchar(100)")]
    public string local{get;set;} = string.Empty;
    
    //list de dados desse reservatorio
    public List<DataReservoir> DataReservoir {get;set;} = new List<DataReservoir>();
    //utilizado para interligar com o WorkEspace a qual esse reservatorio pertence
    public int? WorkspaceId{get;set;}
    public Workspace? Workspace{get;set}
};