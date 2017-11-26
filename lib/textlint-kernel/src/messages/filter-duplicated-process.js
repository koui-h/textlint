// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TextlintMessage} aMessage
 * @param {TextlintMessage} bMessage
 */
var isEqualMessage = function (aMessage, bMessage) {
    return (aMessage.index === bMessage.index &&
        aMessage.severity === bMessage.severity &&
        aMessage.message === bMessage.message);
};
/**
 * filter duplicated messages
 * @param {TextlintMessage[]} messages
 * @returns {TextlintMessage[]} filtered messages
 */
function filterDuplicatedMessages(messages) {
    if (messages === void 0) { messages = []; }
    return messages.filter(function (message, index) {
        var restMessages = messages.slice(index + 1);
        return !restMessages.some(function (restMessage) {
            return isEqualMessage(message, restMessage);
        });
    });
}
exports.default = filterDuplicatedMessages;