class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList{
    constructor(data){
        let newNode = new Node(data);
        this.top = newNode;
    }

    isEmpty(){

        if(this.top === null){
            console.log(`this stack is empty!`);
        }else{
            console.log(`this stack isn't empty`);
        }
    }

    push(data){
        
        let newNode = new Node(data);
        let tempNode;

        if(this.top === null){
            this.top = newNode;
        }else{
            tempNode = this.top;
            this.top = newNode;
            this.top.next = tempNode;
        }
        
    }

    pop(){

        let tempNode;

        if(this.top === null){
            console.log(`this stack is empty!`);
        }else{
            tempNode = this.top.next;
            this.top = null;
            this.top = tempNode;
        }
    }

    peek(){

        if(this.top === null){
            console.log(`this stack is empty!`)
        }else{
            console.log(`top value is ${this.top.data}`)
        }
    }

    printStack(){

        let tempNode = this.top;
        let listStack = '';

        while(tempNode !== null){

            listStack += tempNode.data.toString() + ' ';
            tempNode = tempNode.next;
        }
        console.log(`stack list from the top: ${listStack}`);
    }
}

let newStack = new StackLinkedList(2);
newStack.push(5);
newStack.push(51);
newStack.push(23);
newStack.push(11);
newStack.push(2);
newStack.peek();
newStack.printStack();
newStack.isEmpty();