import Evaluate from "./evaluation/Evaluate.js";

/**
 * @param {HTMLElement} root - The root element containing the data attribute
 * @returns {object} - Returns the converted object from data string
 * 
 * Takes the Data as string, and converts it to an object
 */
const getInitialData = (root) => {
    const dataString = root.getAttribute("n-data");
    let obj = {};
    let key = '';
    let value = '';
    let inQuotes = false;
    let isKey = true;

    if (!dataString) return obj; 

    if (dataString.includes("(") || dataString.includes(")")) {
        obj = executeFunction(dataString);
    } else {
        for (let i = 0; i < dataString.length; i++) {
            let char = dataString[i].replace(/[\{{\}}]/g, "");
    
            if (char === "'" || char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ':' && !inQuotes) {
                isKey = false;
            } else if (char === ',' && !inQuotes) {
                obj[key.trim()] = Evaluate.evaluateDataType(value.trim());
                key = '';
                value = '';
                isKey = true;
            } else {
                if (isKey) {
                    key += char;
                } else {
                    value += char;
                }
            }
        }
    
        if (key.trim() !== '' && value.trim() !== '') {
            obj[key.trim()] = Evaluate.evaluateDataType(value.trim());
        }
    }

    return obj;
}

export { getInitialData };
