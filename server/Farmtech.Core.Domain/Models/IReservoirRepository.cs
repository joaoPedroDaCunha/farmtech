namespace Farmtech.Core.Domain.Models;

public interface IReservoirRepository
{
    void Add(Reservoir reservoir);

    List<Reservoir> Get();
}
