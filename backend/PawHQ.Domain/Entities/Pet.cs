namespace PawHQ.Domain.Entities;

public class Pet
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Species { get; set; } = string.Empty;
    public Guid OwnerId { get; set; }
}