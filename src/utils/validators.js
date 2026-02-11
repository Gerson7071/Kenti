// Input validation functions

/**
 * Validate email format.
 * @param {string} email - Email address to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Validate phone number format (10 digits).
 * @param {string} phone - Phone number to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

/**
 * Validate DNI format (8 digits and a letter at the end).
 * @param {string} dni - DNI to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateDNI(dni) {
    const re = /^\d{8}[A-Z]$/;
    return re.test(dni);
}

/**
 * Validate password (minimum 8 characters, at least one letter and one number).
 * @param {string} password - Password to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
}

/**
 * Validate credit card number format (16 digits).
 * @param {string} cardNumber - Credit card number to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateCreditCard(cardNumber) {
    const re = /^\d{16}$/;
    return re.test(cardNumber);
}

/**
 * Validate CVV format (3 or 4 digits).
 * @param {string} cvv - CVV to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateCVV(cvv) {
    const re = /^\d{3,4}$/;
    return re.test(cvv);
}

/**
 * Validate expiry date format (MM/YYYY).
 * @param {string} expiry - Expiry date to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateExpiry(expiry) {
    const re = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return re.test(expiry);
}

/**
 * Validate address (non-empty string).
 * @param {string} address - Address to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateAddress(address) {
    return address.trim().length > 0;
}

// Exporting validation functions
module.exports = {
    validateEmail,
    validatePhone,
    validateDNI,
    validatePassword,
    validateCreditCard,
    validateCVV,
    validateExpiry,
    validateAddress
};