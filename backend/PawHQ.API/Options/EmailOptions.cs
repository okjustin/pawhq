using System.ComponentModel.DataAnnotations;

namespace PawHQ.API.Options;

public sealed class EmailOptions
{
  [Required]
  public string SmtpServer { get; set; } = null!;

  [Required]
  public int SmtpPort { get; set; }

  [Required]
  public string SmtpUser { get; set; } = null!;

  [Required]
  public string SmtpPassword { get; set; } = null!;

  public bool UseSsl { get; set; } = true;

  public string FromAddress { get; set; } = "no-reply@pawhq.com";

  public string FromName { get; set; } = "PawHQ";
}