
namespace Farmtech.Core.Domain.Models;

public class WorkspaceRepository : IWorkspaceRepository
{
    private readonly ConnectionContext Context = new();
    public void Add(Workspace workspace)
    {
        Context.Workspaces.Add(workspace);
        Context.SaveChanges();
    }

    public List<Workspace> Get()
    {
        return Context.Workspaces.ToList();
    }
}