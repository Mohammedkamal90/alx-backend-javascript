// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // For simplicity, reject with an error message when success is false
            reject(new Error('API request failed'));
        }
    });
}

module.exports = getPaymentTokenFromAPI;
