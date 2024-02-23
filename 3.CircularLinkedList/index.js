import CircularLinkedList from "./Implementation/List.js";

const list = new CircularLinkedList();

list.addToHead(0);
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);

list.removeFromHead();
list.removeFromTail();

list.traverse();
