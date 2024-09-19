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
    //utilizado para interligar com o WorkEspace a qual esse reservatorio pertencce 
    public int foreign_key{get;set;}
}