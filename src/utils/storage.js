// storage.js

/**
 * Get an item from localStorage
 * @param {string} key - The key of the item to retrieve
 * @returns {any|null} - The value of the item, or null if not found
 */
function getFromStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error(`Error getting item from storage: ${error}`);
        return null;
    }
}

/**
 * Set an item in localStorage
 * @param {string} key - The key of the item to store
 * @param {any} value - The value to be stored
 */
function setInStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting item in storage: ${error}`);
    }
}

/**
 * Remove an item from localStorage
 * @param {string} key - The key of the item to remove
 */
function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing item from storage: ${error}`);
    }
}

/**
 * Clear all items in localStorage
 */
function clearAllStorage() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error(`Error clearing storage: ${error}`);
    }
}

// Exporting functions
export { getFromStorage, setInStorage, removeFromStorage, clearAllStorage };