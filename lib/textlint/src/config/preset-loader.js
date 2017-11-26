// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interopRequire = require("interop-require");
var ObjectAssign = require("object-assign");
var textlint_module_mapper_1 = require("../engine/textlint-module-mapper");
/**
 * create `<plugin>/<rule>` option
 * @param {Object} [rulesConfig]
 * @param {string} presetName
 * @returns {Object}
 */
function mapRulesConfig(rulesConfig, presetName) {
    var mapped = {};
    // missing "rulesConfig"
    if (rulesConfig === undefined || typeof rulesConfig !== "object") {
        return mapped;
    }
    return textlint_module_mapper_1.TextLintModuleMapper.createMappedObject(rulesConfig, presetName);
}
exports.mapRulesConfig = mapRulesConfig;
// load rulesConfig from plugins
/**
 *
 * @param ruleNames
 * @param {TextLintModuleResolver} moduleResolver
 * @returns {{}}
 */
function loadRulesConfigFromPresets(ruleNames, moduleResolver) {
    if (ruleNames === void 0) { ruleNames = []; }
    var presetRulesConfig = {};
    ruleNames.forEach(function (ruleName) {
        var pkgPath = moduleResolver.resolvePresetPackageName(ruleName);
        var preset = interopRequire(pkgPath);
        if (!preset.hasOwnProperty("rules")) {
            throw new Error(ruleName + " has not rules");
        }
        if (!preset.hasOwnProperty("rulesConfig")) {
            throw new Error(ruleName + " has not rulesConfig");
        }
        // set config of <rule> to "<preset>/<rule>"
        ObjectAssign(presetRulesConfig, mapRulesConfig(preset.rulesConfig, ruleName));
    });
    return presetRulesConfig;
}
exports.loadRulesConfigFromPresets = loadRulesConfigFromPresets;