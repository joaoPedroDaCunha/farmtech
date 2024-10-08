namespace Farmtech.Core.Domain.Models;
public class Reservoir
{
    public Guid Id { get; set; }
    public required string AddressIp { get; set; }
    public required string Name { get; set; }
    public decimal Capacity { get; set; }
    public decimal Height { get; set; }
    public decimal CurrentVolume { get; set; }
    public int? WorkspaceId { get; set; }
    public Workspace? Workspace { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
};