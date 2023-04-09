
class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}

let presentNode;
let size = 0;
let countNode;

class List {

    size = 0;
    head = null;
    constructor(head) {
        this.head = head;
    }

    add(element) {
        let newNode = new Node(element);

        if (this.head == null) {
            this.head = newNode;
        }
        else {
            presentNode = this.head;
            while (presentNode.link) {
                presentNode = presentNode.link;
            }
            presentNode.link = newNode;
        }
        size++;
    }

    addSpecificPosition(element, position) {
        let newNode = new Node(element);
        presentNode = this.head;
        countNode=0;
        countNode++;
        while (presentNode.link) {
            if (countNode == position) {
                let tempNode = presentNode.link;
                presentNode.link = newNode;
                newNode.link = tempNode;

                break;
            }
            countNode++;
            presentNode = presentNode.link;
            size++;
        }
    }

    addStart(element){
        let newNode=new Node(element);
        if(this.head==null){
            this.head=newNode;
        }
        else
        {
            presentNode=this.head;
            this.head=newNode;
            newNode.link=presentNode;
        }
    }

    printLinkedlist() {
        if (this.head == null) {
            console.log("List is emplty");
        }
        else {
            let presentNode = this.head;
            while (presentNode.link) {
                console.log(presentNode.data);
                presentNode = presentNode.link;
            }
            console.log(presentNode.data);
        }
    }
}


const x = new List();
x.add(5);
x.add(6);
x.add(7);
x.add(0);
x.addStart(10);
x.addSpecificPosition(3, 2);
x.add(20);
x.addStart(30);


console.log("after node insert : ");
x.printLinkedlist();