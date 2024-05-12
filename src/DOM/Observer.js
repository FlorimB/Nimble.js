import Refresh from "./DomManipulation";

/**
 * Creates an observer for data objects, triggering a refresh of the DOM when data changes.
 * @param {HTMLElement} root - The root element from which to start refreshing the DOM.
 * @param {object} directives - Object containing directive functions.
 * @param {object} data - Data object to observe for changes.
 * @param {Function} refreshDom - Function to refresh the DOM when data changes.
 * @returns {object} - Proxy object for observing changes in the data object.
 */
export default (root, directives, data) => {
    // Create a Proxy object to observe changes in the data
    return new Proxy(data, {
        // Define a trap for setting properties on the data object
        set(element, key, value) {
            // Set the property value in the data object
            element[key] = value;
            // Trigger the refreshDom function to update the DOM
            Refresh.refreshDom(root, directives, data);
            return true;
        }
    });
}
