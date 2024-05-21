import Evaluate from "../evaluation/Evaluate";

class Refresh {
    /**
     * Refreshes the DOM based on the provided root element, directives, and data.
     * @param {HTMLElement} root - The root element from which to start refreshing.
     * @param {object} directives - Object containing directive functions.
     * @param {object} data - Data object to be applied to the directives.
     */
    static refreshDom(root, directives, data) {
        const refresher = new Refresh();
        const evaluator = new Evaluate();

        refresher.walkDom(root, el => {
            Array.from(el.attributes).forEach(attribute => {
                if (Object.keys(directives).includes(attribute.name)) {
                    directives[attribute.name](el, evaluator.executeExpression(data, attribute.value), data, root);
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

    static conditionalDirectives(root, data) {
        const refresh = new Refresh();
        const evaluator = new Evaluate();
        refresh.walkDom(root, el => {
            Array.from(el.attributes).forEach(attribute => {
                if (attribute.name.includes("n-if")) {
                    let expression = evaluator.executeExpression(data, attribute.value);
                    if (expression) {
                        console.log(`open == ${data[attribute.value]}`);
                    }
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
