export declare class TextLintModuleMapper {
    /**
     * create entities from rules/rulesConfig and prefix
     * entities is a array which contain [key, value]
     * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
     * @param {Object} pluginRules an object is like "rules" or "rulesConfig" of plugin
     * @param {string} prefixKey prefix key is plugin name or preset name
     * @returns {[string, string][]}
     */
    static createEntities(pluginRules: {
        [index: string]: string;
    }, prefixKey: string): [string, string][];
    /**
     * create an object from rules/rulesConfig and prefix
     * the object shape is { key: value, key2: value }
     * @param {Object} pluginRules an object is like "rules" or "rulesConfig" of plugin
     * @param {string} prefixKey prefix key is plugin name or preset name
     * @returns {Object}
     */
    static createMappedObject(pluginRules: {
        [index: string]: string;
    }, prefixKey: string): {
        [index: string]: string;
    };
}