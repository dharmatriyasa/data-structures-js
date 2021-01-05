class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){

        let node = new Node(data);

        let currentNode;

        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            this.tail = currentNode.next;
        }
    }

    addLast(data){

        let node = new Node(data);

        let currentNode;

        if(this.tail === null){
            this.head = node;
            this.tail = node;
        }else{
            currentNode = this.tail;

            currentNode.next = node;

            this.tail = currentNode.next;
        }
    }

    addFirst(data){

        let node = new Node(data)

        let currentNode;

        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            currentNode = this.head;

            this.head = node;

            this.head.next = currentNode;
        }
    }

    removeLast(){

        let currentNode = this.head;

        while(currentNode.next != this.tail){
            currentNode = currentNode.next;
        }

        currentNode.next = null;
        this.tail = currentNode;
    }

    removeFirst(){

        let currentNode = this.head;
        this.head = currentNode.next;
        currentNode = null;

    }

    printNode(){
        let currentNode = this.head;

        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(8);
linkedList.add(11);
linkedList.addFirst(99);
linkedList.addLast(77);
linkedList.addFirst(128);
linkedList.printNode();
linkedList.removeFirst();
linkedList.removeLast();
linkedList.printNode();