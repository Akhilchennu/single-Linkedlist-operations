//singly linkedlist
"use strict";
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addElementAtStart(element) {
        if (element) {
            const nodeElement = new Node(element);
            let current = this.head;
            if (this.head) {
                this.head = nodeElement;
                nodeElement.next = current;
            } else {
                this.head = nodeElement;
            }
            this.size++;
        } else {
            return false;
        }
        return this.size;
    }

    addElementAtEnd(element) {
        if (element) {
            const nodeElement = new Node(element);
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = nodeElement;
            this.size++;
        } else {
            return false;
        }
        return this.size;
    }

    addElementAnyWhere(element, index) {
        if (element) {
            const nodeElement = new Node(element);
            let current = this.head;
            if (index > 0 && index > this.size) {
                return false;
            } else if (index === 0) {
                this.head = nodeElement;
                nodeElement.next = current;
                this.size++;
            } else {
                let previous, it = 0;
                while (it < index) {
                    previous = current;
                    current = current.next;
                    it++
                }
                previous.next = nodeElement;
                nodeElement.next = current;
                this.size++;
            }
        } else {
            return false;
        }
        return this.size;
    }

    findElement(element) {
        if (element) {
            let current = this.head;
            while (current && current.element) {
                if (current.element === element) {
                    return true;
                }
                current = current.next
            }
            return false;
        } else {
            return false;
        }
    }

    findElementsIndex(element) {
        if (element) {
            let current = this.head;
            let counter = 0;
            while (current && current.element) {
                if (current.element === element) {
                    return counter;
                }
                current = current.next;
                counter++
            }
            return -1;
        } else {
            return -1;
        }
    }

    findElementByIndex(index) {
        if (index < 0 || index > this.size) {
            return "not valid index";
        } else {
            let current = this.head;
            let it = 0;
            while (it < index) {
                current = current.next;
                it++
            }
            return current.element;
        }
    }

    removeElementAtStart() {
        let current = this.head;
        this.head = null;//for deallocating memory.As Javascript is having garbage collector it will
        //be deallocated automatically
        //check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
        this.head = current.next;
        this.size--;
        return this.size;
    }

    removeElementAtEnd() {
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        current = null;//for deallocating memoryß
        previous.next = null;
    }

    removeElement(element) {
        if (element) {
            let current = this.head;
            let previous = current;
            current = current.next;
            if (previous && previous.element === element) {
                this.head = current;
                previous = null;
                this.size--;
                return this.size;
            }
            while (current && current.element) {
                if (current.element === element) {
                    previous.next = current.next;
                    current = null;
                    this.size--;
                    return this.size;
                } else {
                    previous = current;
                    current = current.next;
                }
            }
        } else {
            return false;
        }
    }

    removeElementByIndex(index) {
        if (index < 0 && index > this.size) {
            return "Invalid index"
        } else {
            let current = this.head;
            let it = 0, previous;

            while (it < index) {
                previous = current;
                current = current.next;
                it++;
            }

            if (previous) {
                previous.next = current.next;
            } else { // for handling index 0 scenarios
                this.head = current.next;
            }
            this.size--;
            return this.size;
        }
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    listSize() {
        return this.size;
    }

    replaceElementAtStart(element) {
        if (element) {
            let current = this.head;
            current.element = element;
            return current.element;
        } else {
            return false;
        }
    }

    replaceElementAtEnd(element) {
        if (element) {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.element = element;
            return current.element
        } else {
            return false;
        }
    }

    replaceElementByIndex(element, index) {
        if (index < 0 || index > this.size) {
            return "invalid Index"
        } else {
            if (element) {
                let current=this.head;
                let it=0;
                while(it<index){
                    current=current.next;
                    it++;
                }
                current.element=element;
                return current.element;
            } else {
                return false;
            }
        }

    }

    reverselist() {
        let current=this.head,previous=null,next=null;

        while(current && current.element){
            next=current.next;
            current.next=previous;
            previous=current;
            current=next;
        }

        this.head=previous;

    }
}

const LinkedlistData = new Linkedlist();

LinkedlistData.addElementAtStart(2);
LinkedlistData.printList();
LinkedlistData.addElementAtStart(1);
LinkedlistData.printList();
LinkedlistData.addElementAtEnd(4);
LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(3, 2);
LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(5, 0);
LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(6, 5);
LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(5, 5);
LinkedlistData.printList();
console.log(LinkedlistData.findElement(1));
console.log(LinkedlistData.findElement(10));
console.log(LinkedlistData.findElementsIndex(5));
console.log(LinkedlistData.findElementsIndex(3));
console.log(LinkedlistData.findElementsIndex(6));
console.log(LinkedlistData.findElementsIndex(10));
console.log(LinkedlistData.findElementByIndex(3));
LinkedlistData.removeElementAtStart();
LinkedlistData.printList();
LinkedlistData.removeElementAtEnd();
LinkedlistData.printList();
LinkedlistData.removeElement(3);
LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(3, 2);
LinkedlistData.printList();
LinkedlistData.removeElementByIndex(2);
LinkedlistData.printList();
// LinkedlistData.removeElementByIndex(0);
// LinkedlistData.printList();
// LinkedlistData.removeElementByIndex(2);
// LinkedlistData.printList();
LinkedlistData.addElementAnyWhere(3, 2);
LinkedlistData.printList();
LinkedlistData.replaceElementAtStart(5);
LinkedlistData.printList();
LinkedlistData.replaceElementAtEnd(1);
LinkedlistData.printList();
LinkedlistData.replaceElementByIndex(4,1);
LinkedlistData.printList();
LinkedlistData.replaceElementByIndex(2,3);
LinkedlistData.printList();
// LinkedlistData.replaceElementByIndex(1,0);
// LinkedlistData.printList();
// LinkedlistData.replaceElementByIndex(5,4);
// LinkedlistData.printList();
LinkedlistData.reverselist();
LinkedlistData.printList();