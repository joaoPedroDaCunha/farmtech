
namespace Farmtech.Core.Domain.Models;

public class Member
{
    public Guid Id { get; set; }
    public User User { get; set; }
    public Workspace Workspace { get; set; }
    public MemberRole Role { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
};

