using Microsoft.EntityFrameworkCore;

namespace Farmtech.Core.Domain.Models;

public class ConnectionContext : DbContext 
{
    public DbSet<Workspace> Workspaces {get;set;}

    public DbSet<User> Users {get;set;}

    public DbSet<Member> Members {get;set;}

    public DbSet<Reservoir> Reservoirs {get;set;}

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }
}