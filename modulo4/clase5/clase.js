/* ---------------------------- Listas Enlazadas ---------------------------- */
//se utiliza para almacenar una secuencia de elementos, 
// donde cada elemento tiene una referencia al siguiente elemento de la lista.
// se establece un nodo que posee un valor y una referencia al siguiente nodo de la lista.
class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//aquí se crea una lista enlazada, 
// que es una estructura de datos compuesta por 
// los nodos ya definidos que poseen un valor y un siguiente.
class LinkedList{

    constructor(data){
        this.head = new LinkedListNode();
        this.head.data = data;
    }

    //se agrega un nuevo nodo al final de la lista enlazada.
    //se establece una referencia al siguiente nodo de la lista enlazada.
    appendElement(node){
        if(this.head.next === null){
            this.head.next = node;
            return;
        }
        let currentNode = this.head.next;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    //se imprime el valor de cada nodo de la lista enlazada.
    // hasta que ya no haya un nodo siguiente.
    printAllData(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

// se crean 2 nodos 
const node1 = new LinkedListNode(2);
const node2 = new LinkedListNode(5);

// se muestran solo el haberlos creado
console.log(node1, node2);

// se enlazan los nodos, el primero apunta al segundo
node1.next = node2;

console.log(node1);

console.log("---------------------------------");

// se crea una lista enlazada con el primer nodo
// ya que el objeto LinkedList apunta a las propiedades 
// del nodo permite poner una propiedad de siguiente
const myLinkedList = new LinkedList(5);

// se agregan nodos a la lista enlazada
myLinkedList.appendElement(new LinkedListNode(8));
myLinkedList.appendElement(new LinkedListNode(15));
myLinkedList.appendElement(new LinkedListNode(120));

// se imprime el valor de cada nodo de la lista enlazada
// hasta que ya no haya un nodo siguiente.
myLinkedList.printAllData();

console.log(myLinkedList);



/* ---------------------------------- Filas --------------------------------- */
// las filas son estructuras de datos que permiten almacenar elementos en un orden específico,
// siguiendo el principio FIFO (First In, First Out), es decir, el primer elemento en entrar es el primero en salir.
// se utilizan para gestionar tareas, procesos o cualquier situación en la que el orden de llegada sea importante.
// se implementan utilizando arreglos o listas enlazadas,
class Queue{
    constructor(){
        this.queue = [];
    }

    // se agrega un nuevo elemento al final de la fila.
    enqueue(data){
        this.queue = [data, ...this.queue];
    }

    // se elimina el primer elemento de la fila y lo devuelve.
    // se crea una nueva fila sin el primer elemento.
    dequeue(){
        let frontElement = this.queue[this.queue.length - 1];
        let newQueue = [];
        for (let i = 0; i < this.queue.length - 1; i++) {
            newQueue = [...newQueue, this.queue[i]];
        }
        this.queue = newQueue;
        return frontElement;
    }

    // se devuelve el primer elemento de la fila sin eliminarlo.
    front(){
        return this.queue[this.queue.length - 1];
    }

    // se verifica si la fila está vacía.
    isEmpty(){
        return this.queue.length === 0;
    }
}

// se crea una fila vacía
const myQueue = new Queue();

// se agregan elementos a la fila
myQueue.enqueue(6);
myQueue.enqueue(2);
myQueue.enqueue(5);
// muestra el primer elemento de la fila
console.log(myQueue.front());
// elimina el primer elemento de la fila y lo devuelve
console.log(myQueue.dequeue());
// verifica si la fila está vacía
console.log(myQueue.isEmpty());
console.log(myQueue);

/* ---------------------------------- Pila ---------------------------------- */
// las pilas son estructuras de datos que permiten almacenar elementos en un orden específico,
// siguiendo el principio LIFO (Last In, First Out), es decir, el último elemento en entrar es el primero en salir.
class Stack{
    constructor(){
        this.stack = [];
    }

    // se agrega un nuevo elemento a la parte superior de la pila.
    push(data){
        this.stack = [...this.stack, data];
    }

    // se elimina el último elemento de la pila y lo devuelve.
    // se crea una nueva pila sin el último elemento.
    pop(){
        let topElement = this.stack[this.stack.length - 1];
        let newStack = [];
        for (let i = 0; i < this.stack.length - 1; i++) {
            newStack = [...newStack, this.stack[i]];
        }
        this.stack = newStack;
        return topElement;
    }

    // se devuelve el último elemento de la pila sin eliminarlo.
    peek(){
        return this.stack[this.stack.length - 1];
    }

    // se verifica si la pila está vacía.
    isEmpty(){
        return this.stack.length === 0;
    }
}

const myStack = new Stack();

// se agregan elementos a la pila
myStack.push(5);
myStack.push(8);
myStack.push(3);
myStack.push(9);

// muestra el último elemento de la pila
console.log(myStack.peek());
// elimina el último elemento de la pila y lo devuelve
console.log(myStack.pop());
// verifica si la pila está vacía
console.log(myStack.isEmpty());

//muestra todo el objeto de la pila
console.log(myStack);

// se crea una segunda pila vacía
const secondStack = new Stack();

// se verifica que la pila esté vacía
console.log(secondStack.isEmpty());