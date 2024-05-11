import Evaluate from "./evaluation/Evaluate.js";

/**
 * @returns {object} - Returns the converted object from data string
 * 
 * Takes the Data as string, and converts it to an object
 */
const getInitialData = (root) => {
    const dataString = root.getAttribute("f-data");
    const obj = {};
    let key = '';
    let value = '';
    let inQuotes = false;
    let isKey = true;

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

    return obj;
}

export { getInitialData };
