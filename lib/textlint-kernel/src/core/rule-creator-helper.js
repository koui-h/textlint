// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * detect that ruleCreator has linter function
 * @param {*} ruleCreator
 * @returns {boolean}
 */
function hasLinter(ruleCreator) {
    if (typeof ruleCreator === "object" && typeof ruleCreator.linter === "function") {
        return true;
    }
    return typeof ruleCreator === "function";
}
exports.hasLinter = hasLinter;
/**
 * get linter function from ruleCreator
 * if not found, throw error
 * @param {Function|Object} ruleCreator
 * @returns {Function} linter function
 * @throws
 */
function getLinter(ruleCreator) {
    if (typeof ruleCreator === "object" && typeof ruleCreator.linter === "function") {
        return ruleCreator.linter;
    }
    if (typeof ruleCreator === "function") {
        return ruleCreator;
    }
    throw new Error("Not found linter function in the ruleCreator");
}
exports.getLinter = getLinter;
/**
 * detect that ruleCreator has fixer function
 * @param {*} ruleCreator
 * @returns {boolean}
 */
function hasFixer(ruleCreator) {
    return typeof ruleCreator === "object" && typeof ruleCreator.fixer === "function" && hasLinter(ruleCreator);
}
exports.hasFixer = hasFixer;
/**
 * get fixer function from ruleCreator
 * if not found, throw error
 * @param {Function|Object} ruleCreator
 * @returns {Function} fixer function
 * @throws
 */
function getFixer(ruleCreator) {
    if (!hasLinter(ruleCreator)) {
        throw new Error("fixer module should have also linter function.");
    }
    if (hasFixer(ruleCreator)) {
        return ruleCreator.fixer;
    }
    throw new Error("Not found fixer function in the ruleCreator");
}
exports.getFixer = getFixer;
/**
 * RuleModule should has either linter or fixer.
 * @param ruleCreator
 * @returns {boolean}
 **/
function isRuleModule(ruleCreator) {
    return hasLinter(ruleCreator) || hasFixer(ruleCreator);
}
exports.isRuleModule = isRuleModule;
/**
 * Validate rule module.
 * if invalid throw error
 * @param {*} ruleModule
 * @param {string} key
 * @throws
 */
function assertRuleShape(ruleModule, key) {
    if (key === void 0) { key = ""; }
    if (ruleModule === undefined) {
        throw new Error("Definition of rule '" + key + "' was not found.");
    }
    /*
    Check old rule function
    module.exports = function(context){

    }
    */
    if (!isRuleModule(ruleModule)) {
        throw new Error("Definition of rule '" + key + "' was not rule module.\nRule should export function:\nmodule.exports = function(context){\n    // Your rule\n};");
    }
}
exports.assertRuleShape = assertRuleShape;
/**
 * get linter function from ruleCreator
 * if not found, throw error
 * @param {*} ruleCreator
 * @returns {Function} linter function
 * @throws
 */
function getFilter(ruleCreator) {
    if (typeof ruleCreator === "function") {
        return ruleCreator;
    }
    throw new Error("Not found filter function in the ruleCreator");
}
exports.getFilter = getFilter;