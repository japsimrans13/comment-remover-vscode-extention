# Comment Remover for VS Code

This VS Code extension provides a simple and efficient way to remove single-line comments from your code. Whether you're cleaning up a file, preparing code for production, or simply need to declutter your workspace, Comment Remover makes it easy with just one command.

## Features

- **Remove Single-line Comments**: Quickly remove `//` single-line comments from any file.
- **Intelligent URL Skipping**: Preserves URLs in your code, ensuring that only non-essential comments are removed.
- **Support for Multiple Languages**: Works with any programming language supported by VS Code that uses `//` for single-line comments.

## Installation

1. Open Visual Studio Code.
2. Press `Ctrl+P` to open the Quick Open dialog.
3. Type `ext install your-publisher.comment-remover` and press Enter.
4. Once installed, you can access Comment Remover from the Command Palette.

## Usage

To use Comment Remover, follow these steps:

1. Open the file from which you want to remove comments.
2. Open the Command Palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).
3. Type "Remove Single-line Comments" and press Enter.

Your file will be instantly cleaned of single-line comments, except for URLs or commented-out URLs.

## Configuration

No configuration is necessary to use Comment Remover. It works out of the box with any supported file type.

## Known Issues

Currently, Comment Remover only supports single-line comments starting with `//`. Block comments and other comment types are not affected.

## Contributing

If you encounter a bug or have a feature request, please open an issue on our [GitHub repository](#). Contributions to improve Comment Remover are always welcome!

## Release Notes

### 1.0.0

Initial release of Comment Remover:
- Remove single-line comments.
- Skip URLs in comments.
