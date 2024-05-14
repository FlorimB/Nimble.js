import Evaluate from "../evaluation/Evaluate";

class Refresh {
    /**
     * Refreshes the DOM based on the provided root element, directives, and data.
     * @param {HTMLElement} root - The root element from which to start refreshing.
     * @param {object} directives - Object containing directive functions.
     * @param {object} data - Data object to be applied to the directives.
     */
    static refreshDom(root, directives, data) {
        // Creating a new instance of Refresh
        const refresher = new Refresh();
        const evaluator = new Evaluate();

        // Walking through the DOM starting from the root element
        refresher.walkDom(root, el => {
            // Iterating through each attribute of the element
            Array.from(el.attributes).forEach(attribute => {
                // Checking if the attribute name matches any directive
                if (Object.keys(directives).includes(attribute.name)) {
                    // Applying the directive function to the element
                    directives[attribute.name](el, data[attribute.value]);
                }
            });
        });
    }

    static eventListeners(root, data) {
        const refresher = new Refresh();
        const evaluator = new Evaluate();

        refresher.walkDom(root, el => {
            Array.from(el.attributes).forEach(attribute => {
                if (attribute.name.startsWith("@")) { // Check if attribute starts with "@"
                    const event = attribute.name.replace("@", ""); // Remove "@" from attribute name
                    el.addEventListener(event, () => {
                        const expression = attribute.value;
                        // Bind the expression directly to the 'data' object
                        evaluator.executeExpression(data, expression);
                    });
                }
            });
        });
    }
    
    

    /**
     * Recursively walks through the DOM tree and applies a callback function to each element.
     * @param {HTMLElement} el - The current element being processed.
     * @param {Function} callback - The function to be applied to each element.
     */
    walkDom(el, callback) {
        // Applying the callback function to the current element
        callback(el);
        // Moving to the first child element
        el = el.firstElementChild;

        // Looping through each child element
        while (el) {
            // Recursively walking through the child elements
            this.walkDom(el, callback);
            // Moving to the next sibling element
            el = el.nextElementSibling;
        }
    }
}

// Exporting the Refresh class
export default Refresh;
