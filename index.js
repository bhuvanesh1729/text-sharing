// Text Sharing Application

class TextSharing {
  constructor() {
    this.texts = [];
  }

  // Add a new text to the collection
  addText(text, author) {
    const newText = {
      id: Date.now().toString(),
      content: text,
      author: author || 'Anonymous',
      timestamp: new Date().toISOString(),
      likes: 0
    };
    
    this.texts.push(newText);
    return newText.id;
  }

  // Get all texts
  getAllTexts() {
    return this.texts;
  }

  // Get a specific text by ID
  getText(id) {
    return this.texts.find(text => text.id === id);
  }

  // Like a text
  likeText(id) {
    const text = this.getText(id);
    if (text) {
      text.likes += 1;
      return true;
    }
    return false;
  }

  // Delete a text
  deleteText(id) {
    const initialLength = this.texts.length;
    this.texts = this.texts.filter(text => text.id !== id);
    return this.texts.length !== initialLength;
  }
}

// Example usage
const textSharing = new TextSharing();

// Export the class for use in other files
module.exports = TextSharing;

// If this file is run directly, show a demo
if (require.main === module) {
  console.log("Text Sharing Demo:");
  
  // Add some sample texts
  const id1 = textSharing.addText("Hello, world!", "User1");
  const id2 = textSharing.addText("JavaScript is awesome", "User2");
  
  // Display all texts
  console.log("\nAll texts:");
  console.log(textSharing.getAllTexts());
  
  // Like a text
  textSharing.likeText(id1);
  console.log("\nAfter liking text 1:");
  console.log(textSharing.getText(id1));
  
  // Delete a text
  textSharing.deleteText(id2);
  console.log("\nAfter deleting text 2:");
  console.log(textSharing.getAllTexts());
}
