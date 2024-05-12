// Class for evaluating data types
class Evaluate {
    /**
     * Evaluates the data type of the input value.
     * @param {*} input - The value to be evaluated.
     * @returns {*} - The evaluated value.
     */
    static evaluateDataType(input) {
        // Check if input is a string "true" or "false"
        if (input === "true" || input === "false") {
            return Boolean(input);
        } 
        // Check if input can be converted to a number
        else if (!isNaN(Number(input))) {
            return Number(input);
        } 
        // Return input as is if not a boolean or number
        else {
            return input;
        }
    }

    // Function to execute a function invocation string and return its result
    static executeFunction(funcString) {
        const functionName = funcString.substring(0, funcString.indexOf('(')).trim();
        const func = window[functionName];
        if (typeof func === 'function') {
            return func(); // Execute the function and return its result
        } else {
            console.error(`${functionName} is not a function.`);
            return {};
        }
    }

    /**
     * Takes the expression as a string and converts to js code
     * @param {*} expression 
     * @param {*} context 
     * @returns expression
     */
    static executeExpression(expression, context) {
        try {
            // Create a new Function object from the expression string
            const func = new Function('context', `return ${expression}`);
            // Execute the function with the provided context
            return func(context);
        } catch(error) {
            console.error(error);
        }
    }
}

export default Evaluate;
