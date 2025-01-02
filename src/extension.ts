// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in the code below
import * as vscode from 'vscode';

// This method is called when the extension is activated
// The extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when the extension is activated
	console.log('The extension "linkblog-markdown" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('linkblog-markdown.generateLinks', () => {
		// Replace this with the code to fetch the links from RSS and generate the markdown
		vscode.window.showInformationMessage('Hello VS Code!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {}
