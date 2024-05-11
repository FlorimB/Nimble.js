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
}

export default Evaluate;
