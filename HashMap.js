export default class HashMap {

    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    boundsCheck(index) {
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    hash(key, seed = 31) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (seed * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        // check loadFactor
        // if maxed out, grow hashmap
        const index = this.hash(key);
        this.boundsCheck(index);
        let inHere = false;
        for (let thing in this.buckets[index]) {
            if (
                this.buckets[index][thing] &&
                this.buckets[index][thing].key === key
            ) {
                this.buckets[index][thing].value = value;
                inHere = true;
            }
        }
        if (!inHere) {
            this.buckets[index].push({key, value});
        }
    }

}