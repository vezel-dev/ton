// SPDX-License-Identifier: 0BSD

import {
    Disposable,
    type ExtensionContext,
    MarkdownString,
    StatusBarAlignment,
    commands,
    window,
    workspace,
} from "vscode";
import {
    LanguageClient,
    TransportKind,
} from "vscode-languageclient/node";

export async function activate(context : ExtensionContext) : Promise<void> {
    const cfg = workspace.getConfiguration("ton");
    const extensionChannel = window.createOutputChannel("TON", { log : true });
    const serverChannel = window.createOutputChannel("TON Language Server");
    const status = window.createStatusBarItem("TON", StatusBarAlignment.Left);

    let client : LanguageClient | null = null;

    pushDisposable(new Disposable(async () => client?.dispose()));

    function setStatus(icon : string, tooltip ?: string | undefined) : void {
        status.text = `$(${icon}) TON`;

        if (tooltip !== undefined)
            status.tooltip = new MarkdownString(tooltip);
    }

    function pushDisposable(disposable : { dispose : () => unknown }) {
        context.subscriptions.push(disposable);
    }

    function registerCommand(name : string, callback : () => unknown) : void {
        pushDisposable(commands.registerCommand(name, callback));
    }

    pushDisposable(extensionChannel);
    pushDisposable(serverChannel);
    pushDisposable(status);

    registerCommand(
        "ton.startServer",
        async () => {
            if (client !== null)
                return;

            extensionChannel.info("Starting TON language server...");
            setStatus("rocket", "Starting...");

            client = new LanguageClient(
                "ton",
                {
                    command : cfg.get("executablePath", "ton"),
                    args : ["serve", "-l", cfg.get<string>("serverLogLevel", "information")],
                    transport : TransportKind.stdio,
                },
                {
                    outputChannel : serverChannel,
                    documentSelector : [
                        {
                            scheme : "file",
                            language : "ton",
                        },
                    ],
                });

            try {
                await client.start();
            } catch (err) {
                extensionChannel.show(true);

                extensionChannel.error("TON language server failed to start:", err);
                setStatus("alert", `\`\`\`\n${err}\n\`\`\``);

                return;
            }

            extensionChannel.info("TON language server started.");
            setStatus("zap", client.initializeResult?.serverInfo?.version);
        });

    registerCommand("ton.stopServer", () => {
        if (client === null)
            return;

        extensionChannel.info("Stopping TON language server...");
        setStatus("history", "Stopping...");

        void client.dispose();

        client = null;

        extensionChannel.info("TON language server stopped.");
        setStatus("circle-slash", "Language server manually stopped.");
    });

    registerCommand("ton.restartServer", async () => {
        await commands.executeCommand("ton.stopServer");
        await commands.executeCommand("ton.startServer");
    });

    status.show();

    if (cfg.get<boolean>("autoStartServer", true))
        await commands.executeCommand("ton.startServer");
    else
        setStatus("circle-slash", "Language server not started due to `ton.autoStartServer` setting.");
}
