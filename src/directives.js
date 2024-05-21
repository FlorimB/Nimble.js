import nHtml from "./directives/n-html.js";
import nText from "./directives/n-text.js";
import nShow from "./directives/n-show.js";

// Object containing directive functions mapped to their names
const directives = {
    /**
     * Map directives to its functions
     */
    "n-html": nHtml,
    "n-text": nText,
    "n-show": nShow,
};

// Export the directives object
export default directives;
