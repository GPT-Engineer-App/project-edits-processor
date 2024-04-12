# project-edits-processor

Please implement a web-based tool for processing a JSON file with data about code edits for different projects. 

The tool should have the following features:
- An input field where the user can enter a project ID
- A button to load the data for the entered project ID
- When the data is loaded, display a list of all code edits for that project
- For each edit, show metadata like the edit ID, creation time, edit number, status, error details, etc.
- Pretty print the actual code blocks for each edit
- Allow expanding/collapsing the code block display
- Some light styling to make the UI intuitive and easy to use

You can start with a basic create-react-app project. Don't worry about actually loading the JSON file for now, you can hard-code some sample data in the format I provided. The key features are the project ID filtering, edit list display, and pretty printed code blocks.

Let me know if you have any other questions!

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/project-edits-processor.git
cd project-edits-processor
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
