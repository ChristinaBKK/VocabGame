// loadWords.js
const VocabularyLoader = (() => {
  let vocabularyData = [];

  // Fetch JSON data and store it internally
  function fetchVocabulary(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        vocabularyData = data;
        return vocabularyData; // return data so caller can chain
      })
      .catch(error => {
        console.error('Error loading vocabulary:', error);
        throw error;
      });
  }

  // Getter to access loaded vocabulary data
  function getVocabulary() {
    return vocabularyData;
  }

  return {
    fetchVocabulary,
    getVocabulary,
  };
})();
