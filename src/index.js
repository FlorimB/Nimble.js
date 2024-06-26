import directives from "./directives.js";
import { getInitialData } from "./DataInitialiser.js";
import observer from "./DOM/Observer.js";
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
        this.root = document.querySelector("[n-data]");
        
        // Extracting initial data and storing it
        this.rawData = getInitialData(this.root);
        this.data = observer(this.root, this.directives, this.rawData);

        // Triggering even listeners method
        Refresh.eventListeners(this.root, this.data);

        // Triggering the refresh of the DOM
        Refresh.refreshDom(this.root, this.directives, this.data);

        // Conditional Directives
        Refresh.conditionalDirectives(this.root, this.data);
    },
}

// Starting the program
window.Nimble.start();
