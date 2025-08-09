/**
 * VocabularyLoader - Fetches and manages vocabulary data.
 * Now uses a Promise-based approach for better async handling.
 */
const VocabularyLoader = (() => {
    // Private variable to store loaded data
    let _vocabularyData = [];

    /**
     * Fetches vocabulary data from a JSON URL.
     * @param {string} url - The JSON file URL.
     * @returns {Promise<Array>} - Resolves with the loaded data.
     */
    async function fetchVocabulary(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            _vocabularyData = await response.json();
            return _vocabularyData; // Return for direct use
        } catch (error) {
            console.error('Error loading vocabulary:', error);
            throw error; // Re-throw for caller to handle
        }
    }

    /**
     * Gets the currently loaded vocabulary data.
     * @returns {Array} - The loaded vocabulary (empty if not fetched yet).
     */
    function getVocabulary() {
        return _vocabularyData;
    }

    // Public API
    return {
        fetchVocabulary,
        getVocabulary,
    };
})();
