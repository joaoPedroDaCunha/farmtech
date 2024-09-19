namespace Farmtech.Core.Domain.Models;
//Criando o classe reservatorio e seu atributos 
public class Reservoir
{
    public int id {get;set;}
    //variavel para armazenar o local na rede que o aparelho usado para coletar os dados esta
    public int TCPIP{get;set;}
    public string name{get;set;}
    //utilizado para o usuario referenciar o local que esta o reservatorio
    public string local{get;set;}
    // inicio das variaves utilizadas para as regras de negocio
    public DateTime data {get;set;}
    public decimal capacidade{get;set;}
    public decimal altura{get;set;}
    public decimal volume_atual{get;set;}
    //fim das variaves utilizadas para as regras de negocio
    //utilizado para interligar com o WorkEspace a qual esse reservatorio pertence
    public int foreign_key{get;set;}
};