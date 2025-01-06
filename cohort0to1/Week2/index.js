const fs = require('fs');

function cleanText(filename) {
    // Read the file
    const text = fs.readFileSync(filename, 'utf8');
    
    // Remove extra whitespace between words
    const cleanedText = text.split(/\s+/).join(' ');
    
    // Write back to file (optional)
    fs.writeFileSync(filename, cleanedText);
    
    return cleanedText;
}

// Use the function
try {
    const result = cleanText('file.txt');
    console.log(result);
} catch (error) {
    console.error('Error:', error.message);
}
