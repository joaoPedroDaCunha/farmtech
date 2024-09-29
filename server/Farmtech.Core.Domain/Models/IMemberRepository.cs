namespace Farmtech.Core.Domain.Models;

public interface IMemberRepository
{  
    void Add(Member member);

    List<Member> Get();
}
