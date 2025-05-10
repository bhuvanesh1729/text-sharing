


https://prod.liveshare.vsengsaas.visualstudio.com/join?F62CE0C3A1655D2D08AFB488C28A70FCC8F7

https://prod.liveshare.vsengsaas.visualstudio.com/join?0DA3D0799C08DCA41BC11BC6FF87726C5875
gh repo clone https://github.com/NewsBerry/socialr_backend



# Text Sharing

A simple JavaScript library for sharing and managing text snippets.

## Features

- Add new text snippets with author attribution
- Retrieve all texts or a specific text by ID
- Like texts to show appreciation
- Delete texts when they're no longer needed
- Timestamps for all texts

## Installation

```bash
npm install text-sharing
```

## Usage

```javascript
const TextSharing = require('text-sharing');

// Create a new instance
const textSharing = new TextSharing();

// Add a new text
const textId = textSharing.addText("Hello, world!", "JohnDoe");

// Get all texts
const allTexts = textSharing.getAllTexts();

// Get a specific text
const specificText = textSharing.getText(textId);

// Like a text
textSharing.likeText(textId);

// Delete a text
textSharing.deleteText(textId);
```

## Running the Demo

To run the included demo:

```bash
node index.js
```

## License

ISC
