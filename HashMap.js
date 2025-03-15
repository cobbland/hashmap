import LinkedList from "./LinkedList.js"
// Uses LinkedList where `value` is `key`
// and 'keyValue' is 'value'

export default class HashMap {

    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.currentLoad = 0;
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
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
        if (this.buckets[index].contains(key)) {
            const innerIndex = this.buckets[index].find(key);
            this.buckets[index].at(innerIndex).keyValue = value;
        } else {
            this.buckets[index].append(key);
            const innerIndex = this.buckets[index].find(key);
            this.buckets[index].at(innerIndex).keyValue = value;
            this.currentLoad++
        }
    }

    get(key) {
        const index = this.hash(key);
        if (this.buckets[index].contains(key)) {
            const innerIndex = this.buckets[index].find(key);
            return this.buckets[index].at(innerIndex).keyValue;
        } else {
            return null;
        }
    }

    has(key) {
        const index = this.hash(key);
        if (this.buckets[index].contains(key)) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        const index = this.hash(key);
        if (this.buckets[index].contains(key)) {
            const innerIndex = this.buckets[index].find(key);
            this.buckets[index].removeAt(innerIndex);
            return true;
        } else {
            return false;
        }
    }

    length() {
        let count = 0;
        for (let bucket in this.buckets) {
            count += this.buckets[bucket].size();
        }
        return count;
    }

    clear() {
        for (let bucket in this.buckets) {
            while (this.buckets[bucket].size() > 0) {
                this.buckets[bucket].pop();
            }
        }
    }

    keys() {
        let str = "";
        for (let linkedList in this.buckets) {
            str += `Bucket ${linkedList} keys: ${this.buckets[linkedList].toString()}`;
            if (linkedList < this.buckets.length - 1) {
                str += "\n";
            }
        }
        return str;
    }

    values() {
        let str = "";
        for (let linkedList in this.buckets) {
            str += `Bucket ${linkedList} values: `;
            if (this.buckets[linkedList].head === null) {
                str += "( null )";
            }
            let currentNode = this.buckets[linkedList].head;
            while (currentNode !== null && currentNode.nextNode !== null) {
                str += `( ${currentNode.keyValue} ) -> `;
                currentNode = currentNode.nextNode;
            }
            if (currentNode !== null) {
                str += `( ${currentNode.keyValue } )`;
            }
            if (linkedList < this.buckets.length - 1) {
                str += "\n";
            }
        }
        return str;
    }

    entries() {
        let str = "";
        for (let linkedList in this.buckets) {
            str += `Bucket ${linkedList} entries: [`;
            if (this.buckets[linkedList].head === null) {
                str += "[ null ]";
                str += "]";
                str += "\n";
            }
            let currentNode = this.buckets[linkedList].head;
            while (currentNode !== null && currentNode.nextNode !== null) {
                str += `[${currentNode.value}, ${currentNode.keyValue}], `;
                currentNode = currentNode.nextNode;
            }
            if (currentNode !== null) {
                str += `[${currentNode.value}, ${currentNode.keyValue}]`;
                str += "]";
                str += "\n";
            }
            
        }
        return str;
    }

}