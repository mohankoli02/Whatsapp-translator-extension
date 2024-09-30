document.getElementById('save').addEventListener('click', () => {
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
  
    chrome.storage.sync.set({ sourceLanguage, targetLanguage }, () => {
      alert('Language preferences saved!');
    });
  });
  
  chrome.storage.sync.get(["sourceLanguage", "targetLanguage"], ({ sourceLanguage, targetLanguage }) => {
    document.getElementById('sourceLanguage').value = sourceLanguage || 'auto'; // Default to automatic detection
    document.getElementById('targetLanguage').value = targetLanguage || 'en';   // Default to English
});
  