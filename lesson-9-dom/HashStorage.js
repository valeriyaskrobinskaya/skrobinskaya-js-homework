class THashStorage {
    constructor() {
        this.store = {};
    }
    addValue(key, value) {
        this.store[key] = value;
    }
    getValue(key) {
        return this.store[key];
    }
    deleteValue(key) {
        if (!(key in this.store)) {
            return false
        }
        return delete this.store[key];
    }
    getKeys() {
        return Object.keys(this.store);
    }
}