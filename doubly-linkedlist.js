class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;  
    }

    addFirst(data){
        let node = new Node(data);
        let currentNode;

        if(this.head !== null){
            currentNode = this.head;
            this.head = node;
            this.head.next = currentNode;
            currentNode.prev = this.head
        }else{
            this.head = node;
            this.tail = node;
        }
    }

    addLast(data){
        let node = new Node(data);
        let currentNode;

        if(this.tail !== null){
            currentNode = this.tail;
            this.tail = node;
            this.tail.prev = currentNode;
            currentNode.next = this.tail;
        }else{
            this.head = node;
            this.tail = node;
        }
    }

    removeFirst(){
        let currentNode = this.head;
        this.head = currentNode.next;
        this.head.prev = null;
        currentNode = null;
    }

    removeLast(){
        let currentNode = this.tail;
        this.tail = currentNode.prev;
        this.tail.next = null;
        currentNode = null;
    }

    printAllNode(){
        let currentNode = this.head;

        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let dLL = new DoublyLinkedList();
dLL.addFirst(5);
dLL.addFirst(88);
dLL.addLast(8);
dLL.addFirst(18);
dLL.addLast(82);
dLL.printAllNode();
dLL.removeFirst();
dLL.printAllNode();
dLL.removeLast();
dLL.printAllNode();
