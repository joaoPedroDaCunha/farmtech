namespace Farmtech.Core.Domain.Models;

public class ReservoirRepository : IReservoirRepository
{

    private readonly ConnectionContext Context =  new();
    public void Add(Reservoir reservoir)
    {
        Context.Reservoirs.Add(reservoir);
        Context.SaveChanges();
    }

    public List<Reservoir> Get()
    {
        return Context.Reservoirs.ToList();
    }
}