import LinkedList from "./LinkedList.js"
// Uses LinkedList where `value` is `key`
// and 'keyValue' is 'value'

export default class HashMap {

    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.capacityIncrement = capacity;
        this.currentLoad = 0;
        this.currentLoadFactor = 0.00;
        this.buckets = [];
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = new LinkedList();
        }
    }

    updateCurrentLoad() {
        this.currentLoadFactor = this.currentLoad / this.buckets.length;
    }

    moreBuckets() {
        this.updateCurrentLoad();
        let newCapacity = this.capacity + this.capacityIncrement;
        for (let i = this.capacity; i < newCapacity; i++) {
            this.buckets[i] = new LinkedList();
        }
        this.capacity = newCapacity;
        const tempNodes = []
        for (let linkedList in this.buckets) {
            while (this.buckets[linkedList].size() > 0) {
                tempNodes.push(this.buckets[linkedList].listTail());
                this.buckets[linkedList].pop();
            }
        }
        this.currentLoad = 0;
        this.updateCurrentLoad();
        for (let node in tempNodes) {
            this.set(tempNodes[node].value, tempNodes[node].keyValue);
        }
        this.updateCurrentLoad();
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
        const index = this.hash(key);
        if (this.buckets[index].contains(key)) {
            const innerIndex = this.buckets[index].find(key);
            this.buckets[index].at(innerIndex).keyValue = value;
        } else {
            if (this.currentLoadFactor >= this.loadFactor) {
                this.moreBuckets();
            }
            this.buckets[index].append(key);
            const innerIndex = this.buckets[index].find(key);
            this.buckets[index].at(innerIndex).keyValue = value;
            this.currentLoad++;
            this.updateCurrentLoad();
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