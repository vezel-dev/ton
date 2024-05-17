// SPDX-License-Identifier: 0BSD

namespace Vezel.Ton.Driver;

internal static class Program
{
    public static Task<int> Main(string[] args)
    {
        using var parser = new Parser(static settings =>
        {
            settings.GetoptMode = true;
            settings.PosixlyCorrect = true;
            settings.CaseSensitive = false;
            settings.CaseInsensitiveEnumValues = true;
            settings.HelpWriter = Terminal.StandardError.TextWriter;
        });

        using var cts = new CancellationTokenSource();

        Terminal.Signaled += ctx =>
        {
            ctx.Cancel = true;

            cts.Cancel();
        };

        _ = args;
        _ = cts;

        return Task.FromResult(0); // TODO
    }
}
