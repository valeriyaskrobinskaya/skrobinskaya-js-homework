class THashStorage {
    constructor() {
        this.store_ = {};
    }

    addValue(key, value) {
        this.store_[key] = value;
    }

    getValue(key) {
        return this.store_[key];
    }

    deleteValue(key) {
        if (!(key in this.store_)) {
            return false
        }

        return delete this.store_[key];
    }

    getKeys() {
        return Object.keys(this.store_);
    }
}