// chatbotService.js

/**
 * Function to process product questions and generate responses based on product information.
 * @param {Object} product - The product information.
 * @param {string} question - The question asked by the user.
 * @returns {string} - The response generated for the user's question.
 */
function processProductQuestion(product, question) {
    // Basic structure to respond to product questions
    let response = '';

    // Convert question to lower case for easier matching
    const normalizedQuestion = question.toLowerCase();

    // Check for different types of queries
    if (normalizedQuestion.includes('price')) {
        response = `The price of ${product.name} is ${product.price}.`;
    } else if (normalizedQuestion.includes('available') || normalizedQuestion.includes('stock')) {
        response = product.inStock ? `${product.name} is available.` : `${product.name} is currently out of stock.`;
    } else if (normalizedQuestion.includes('feature') || normalizedQuestion.includes('features')) {
        response = `Features of ${product.name}: ${product.features.join(', ')}.`;
    } else {
        response = `I'm sorry, I don't have information about that.`;
    }

    return response;
}

module.exports = { processProductQuestion };