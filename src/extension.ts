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
		// vscode.window.showInformationMessage('Hello VS Code!');

		// Fetch the links from RSS. Replace hard-coded values with values from settings later.
		fetchRSS('https://www.newsblur.com/social/stories/109116/alvinashcraft?n=5');

		// Generate the markdown
	});

	context.subscriptions.push(disposable);
}

const axios = require('axios');
const xml2js = require('xml2js');

async function fetchRSS(url: string) {
    try {
        const response = await axios.get(url);
        const result = await xml2js.parseStringPromise(response.Data);
        const items = result.rss.channel[0].item;
        
        items.forEach((item: { title: any[]; link: any[]; description: any[]; }) => {
            console.log({
                title: item.title[0],
                link: item.link[0],
                description: item.description[0]
            });
        });

        vscode.window.showInformationMessage('Links fetched: ' + items.length);
        console.log('Links fetched: ' + items.length);
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
    }
}

// This method is called when the extension is deactivated
export function deactivate() {}
