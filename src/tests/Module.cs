// SPDX-License-Identifier: 0BSD

namespace Vezel.Ton.Tests;

internal static class Module
{
    [ModuleInitializer]
    internal static void Initialize()
    {
        VerifierSettings.InitializePlugins();
        VerifierSettings.IncludeObsoletes();
        VerifierSettings.IgnoreStackTrace();
        VerifierSettings.DontScrubGuids();
        VerifierSettings.DontScrubDateTimes();

        DiffRunner.Disabled = true;
    }
}
