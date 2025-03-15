import Node from "./Node.js";

export default class LinkedList {

    head = null;

    append(value) {
        // adds a new node containing value to the end of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;

        }
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        // returns the total number of nodes in the list
        let listSize = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            listSize++;
            currentNode = currentNode.nextNode;
        }
        return listSize;
    }

    listHead() {
        // returns the first node in the list
        return this.head;
    }

    listTail() {
        // returns the last node in the list
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        // returns the node at the given index (starting with 0)
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        // removes the last element from the list
        if (this.head === null) {
            return;
        } else if (this.head.nextNode === null) {
            this.head = null;
            return;
        }
        let currentNode = this.head;
        let previousNode;
        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = null;
    }

    contains(value) {
        // returns true if the passed in value is in the list 
        // and otherwise returns false.
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        // returns the index of the node containing value, or null if not found.
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentIndex++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString() {
        // represents your LinkedList objects as strings, 
        // so you can print them out and preview them in the console. 
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let str = "";
        if (this.head === null) {
            str = "( null )";
            return str;
        }
        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            str += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        str += `( ${currentNode.value } )`;
        return str;
    } 

    // Extra credit below!
    // Extra Credit Tip: When you insert or remove a node, 
    // consider how it will affect the existing nodes. 
    // Some of the nodes will need their nextNode link updated.

    insertAt(value, index) {
        // that inserts a new node with the provided value at the given index.
        if (index === 0) {
            this.prepend(value);
        } else if (index === (this.size())) {
            this.append(value);
        } else if (index >= this.size() || index < 0) {
            console.log("Index out of bounds.");
        } else {
            const newNode = new Node(value);
            let previousNode;
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            previousNode.nextNode = newNode;
            newNode.nextNode = currentNode;
        }
    }

    removeAt(index) {
        // that removes the node at the given index.
        if (index === 0) {
            this.head = this.head.nextNode;
        } else if (index >= this.size() || index < 0) {
            console.log("Index out of bounds.");
        } else {
            let previousNode;
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            previousNode.nextNode = currentNode.nextNode;
        }
    }

}

