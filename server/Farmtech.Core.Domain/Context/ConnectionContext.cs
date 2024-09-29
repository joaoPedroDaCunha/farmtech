using Microsoft.EntityFrameworkCore;

namespace Farmtech.Core.Domain.Models;

public class ConnectionContext : DbContext
{
    public DbSet<Workspace> Workspaces { get; set; }

    public DbSet<User> Users { get; set; }

    public DbSet<Member> Members { get; set; }

    public DbSet<Reservoir> Reservoirs { get; set; }
    public string DbPath { get; }

    public ConnectionContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path,"Data.db");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
     => options.UseSqlite($"Data Source={DbPath}");
}