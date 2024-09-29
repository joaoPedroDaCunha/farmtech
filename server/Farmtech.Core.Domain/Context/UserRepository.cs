
namespace Farmtech.Core.Domain.Models;

public class UserRepository : IUserRepository
{
    private readonly ConnectionContext Context = new();
    public void Add(User user)
    {
        Context.Users.Add(user);
        Context.SaveChanges();
    }

    public List<User> Get()
    {
        return Context.Users.ToList();
    }
}