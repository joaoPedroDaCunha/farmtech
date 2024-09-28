namespace Farmtech.Core.Domain.Models;

public interface IWorkspaceRepository
{
    void Add(Workspace workspace);

    List<Workspace> Get();
}
