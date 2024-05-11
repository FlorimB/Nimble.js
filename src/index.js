import directives from "./directives.js";
import Evaluate from "./evaluation/Evaluate.js";
import Refresh from "./DOM/DomManipulation.js";

window.Nimble = {
    /**
     * Directives like f-text, f-html, f-show, etc...
     */
    directives: directives,

    /**
     * start() will boot everything
     */
    start() {
        // Selecting the root element with f-data attribute
        this.root = document.querySelector("[f-data]");
        
        // Extracting initial data and storing it
        this.rawData = this.getInitialData();
        this.data = this.rawData;

        // Triggering the refresh of the DOM
        Refresh.refreshDom(this.root, this.directives, this.data);
    },

    /**
     * @returns {object} - Returns the converted object from data string
     * 
     * Takes the Data as string, and converts it to an object
     */
    getInitialData() {
        // Extracting the data string from the root element
        const dataString = this.root.getAttribute("f-data");
        const obj = {}; // Initializing an empty object to store key-value pairs
        let key = ''; // Initializing an empty string for the key
        let value = ''; // Initializing an empty string for the value
        let inQuotes = false; // Flag to track if inside quotes
        let isKey = true; // Flag to track if currently reading key or value
    
        // Looping through each character in the data string
        for (let i = 0; i < dataString.length; i++) {
            // Removing unnecessary characters like '{', '}', etc.
            let char = dataString[i].replace(/[\{{\}}]/g, "");
    
            // Checking if the character is a quote
            if (char === "'" || char === '"') {
                // Toggling the inQuotes flag
                inQuotes = !inQuotes;
            } else if (char === ':' && !inQuotes) {
                // Changing the flag to read value
                isKey = false;
            } else if (char === ',' && !inQuotes) {
                // Storing the key-value pair and resetting the variables
                obj[key.trim()] = Evaluate.evaluateDataType(value.trim());
                key = '';
                value = '';
                isKey = true;
            } else {
                // Appending characters to key or value based on the flag
                if (isKey) {
                    key += char;
                } else {
                    value += char;
                }
            }
        }
    
        // Storing the last key-value pair if any
        if (key.trim() !== '' && value.trim() !== '') {
            obj[key.trim()] = Evaluate.evaluateDataType(value.trim()); // Will convert the string to it's corresponing datatype.
        }
    
        // Returning the final object
        return obj;
    }
}

// Starting the program
window.Nimble.start();
