import fHtml from "./directives/f-html.js";
import fText from "./directives/f-text.js";

// Object containing directive functions mapped to their names
const directives = {
    /**
     * Map directives to its functions
     */
    "f-html": fHtml,
    "f-text": fText,
};

// Export the directives object
export default directives;
