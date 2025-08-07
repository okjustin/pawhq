using PawHQ.Application.Interfaces;

namespace PawHQ.Infrastructure.Services;

public class StubEmailService : IEmailService
{
    public Task SendAsync(string to, string subject, string body)
    {
        Console.WriteLine($"\n--- FAKE EMAIL ---\nTo: {to}\nSubject: {subject}\n\n{body}\n--- END ---\n");
        return Task.CompletedTask;
    }
}