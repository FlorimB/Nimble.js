import Evaluate from "../evaluation/Evaluate";

export default function nShow(el, value, data) {
    const evaluator = new Evaluate();
    const expression = evaluator.executeExpression(data, value);

    el.style.display = expression ? "block" : "none";
}