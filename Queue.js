class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        let newNode = new Node(null);
        this.front = newNode;
        this.rear = newNode;
    }

    enqueue(data){

        let newNode = new Node(data);
        let tempNode;

        if(this.front.data === null){
            this.front = newNode;
            this.rear = newNode;
        }else if(this.front === this.rear){
            this.rear = newNode;
            this.front.next = this.rear;
        }else{
            tempNode = this.rear;
            this.rear = newNode;
            tempNode.next = this.rear;
        }
    }

    dequeue(){

        let tempNode;

        if(this.front === null){
            console.log('this queue is empty!');
        }else{
            tempNode = this.front;
            this.front = this.front.next;
            tempNode = null;
        }
    }

    isEmpty(){

        if(this.front === null){
            console.log('this queue is empty!');
        }else{
            console.log(`this queue isn' empty!`);
        }
    }

    peek(){

        if(this.front === null){
            console.log('this queue is empty!');
        }else{
            console.log(`the front of queue list is ${this.front.data}`);
        }
    }

    printQueue(){

        let tempNode = this.front;
        let listQueue = '';

        if(this.front === null){
            console.log('this queue is empty!');
        }else{
            while(tempNode !== null){

                listQueue += tempNode.data.toString() + ' ';
                tempNode = tempNode.next;
            }

            console.log(`the queue lists are: ${listQueue}`);
        }
    }
}

let newQueue = new QueueLinkedList();
newQueue.enqueue(5);
newQueue.enqueue(11);
newQueue.enqueue(53);
newQueue.enqueue(92);
newQueue.enqueue(9);
newQueue.enqueue(17);
newQueue.enqueue(44);
newQueue.enqueue(67);
newQueue.printQueue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.printQueue();
newQueue.peek();

