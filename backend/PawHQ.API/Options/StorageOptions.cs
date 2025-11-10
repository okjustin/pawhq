using System.ComponentModel.DataAnnotations;

namespace PawHQ.API.Options;

public sealed class StorageOptions
{
  [Required]
  public string BucketName { get; set; } = null!;
}