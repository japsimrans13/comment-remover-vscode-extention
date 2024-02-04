import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "comment-remover" is now active!');

    let disposable = vscode.commands.registerCommand('comment-remover.removeSinghLineComments', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active text editor found');
            return; // No open text editor
        }

        const document = editor.document;
        
        let count = 0;
        // Start a batch edit
        editor.edit(editBuilder => {
            // Iterate through each line in the document
            for (let lineIndex = 0; lineIndex < document.lineCount; lineIndex++) {
                const line = document.lineAt(lineIndex);
				
				// Check if the line contains a single-line comment
				// check if the line does not contain a URL
                if (line.text.includes('//') && !line.text.includes('http://') && !line.text.includes('https://')) {
                    count++;
                    // Remove the text after the '//' and the '//' itself
                    const newText = line.text.substring(0, line.text.indexOf('//'));
                    // Replace the line with the new text
                    editBuilder.replace(line.range, newText);
                }
            }
        }).then(success => {
            if (success) {
                vscode.window.showInformationMessage(`Removed ${count} single-line comments.`);
            } else {
                vscode.window.showErrorMessage('Error removing comments.');
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
