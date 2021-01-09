class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.last = null
    }

    addToEmpty(data){
        if(this.last !== null){
            return this.last;
        }
            
        const temp = new Node(data);
        this.last = temp;
        this.last.next = this.last;
        return this.last;
    }

    addBegin(data){
        if(this.last === null){
            this.addToEmpty(data);
        }else{
            const newNode = new Node(data);
            newNode.next = this.last.next;
            this.last.next = newNode;
            return this.last;
        }
    }

    addEnd(data){
        if(this.last === null){
            this.addToEmpty(data);
        }else{
            const newNode = new Node(data);
            newNode.next = this.last.next;
            this.last.next = newNode;
            this.last = newNode;
            return this.last;
        }
    }

    traverse(){
        let temp;

        if(this.last === null){
            console.log(`Linked List is Empty!`);
            return;
        }
        temp = this.last.next;
        do{
            console.log(temp.data);
            temp = temp.next;
        }while(temp != this.last.next)
    }
}

const cLL = new CircularLinkedList();
cLL.addBegin(4);
cLL.addBegin(7);
cLL.addBegin(11);
cLL.addBegin(41);
cLL.addBegin(44);
cLL.traverse();