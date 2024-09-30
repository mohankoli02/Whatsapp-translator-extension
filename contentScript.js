// Sample dictionary for translation (you can expand this)
const translationDictionary = {
    "Hello": "Hola",        // English to Spanish
    "Goodbye": "Adiós",     // English to Spanish
    "Thank you": "Gracias", // English to Spanish
    // Add more phrases as needed
};

function translateMessage(text, sourceLang, targetLang) {
    // Check if the text exists in the translation dictionary
    const translatedText = translationDictionary[text] || "Translation not available.";
    return translatedText;
}

chrome.storage.sync.get(["sourceLanguage", "targetLanguage"], ({ sourceLanguage, targetLanguage }) => {
    const messages = document.querySelectorAll('.message-in .copyable-text');

    messages.forEach(msg => {
        const originalText = msg.innerText;
        const translatedText = translateMessage(originalText, sourceLanguage, targetLanguage);
        msg.innerText = translatedText;
    });

    const inputBox = document.querySelector('div[contenteditable="true"]');
    inputBox.addEventListener('input', () => {
        const userTypedMessage = inputBox.innerText;
        const translatedMessage = translateMessage(userTypedMessage, sourceLanguage, targetLanguage);
        inputBox.innerText = translatedMessage;
    });
});
