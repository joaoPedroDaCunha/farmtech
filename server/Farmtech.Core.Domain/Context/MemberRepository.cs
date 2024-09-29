
namespace Farmtech.Core.Domain.Models;

public class MemberRepository : IMemberRepository
{
    private readonly ConnectionContext Context = new();
    public void Add(Member member)
    {
        Context.Members.Add(member);
        Context.SaveChanges();
    }

    public List<Member> Get()
    {
        return Context.Members.ToList();
    }
}