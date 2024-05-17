import Evaluate from "../evaluation/Evaluate";

export default function fIf(el, condition, data) {
    const evaluator = new Evaluate();
    const expression = evaluator.executeExpression(data, condition);
    if (!expression) {
        el.remove();
    }
}