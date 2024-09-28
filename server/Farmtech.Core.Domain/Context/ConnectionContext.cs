using Microsoft.EntityFrameworkCore;

namespace Farmtech.Core.Domain.Models;

public class ConnectionContext : DbContext 
{
    public DbSet<Workspace> workspaces {get;set;}

    public DbSet<User> users {get;set;}

    public DbSet<Member> members {get;set;}

    public DbSet<Reservoir> reservoirs {get;set;}
}