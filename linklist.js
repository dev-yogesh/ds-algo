// 1st
/**
 * Search in a LinkedList
 * You are given a linked list. You need to check if a node with the data of k is
 * present in that Linked List. If a node with data of k is present in the given
 * Linked List, return “true” else return “false”.
 */
// 5 8 2 15 6 25 1 11 13
// 11

/**
 * Java Code
==========================================================
import java.util.*;

public class Source {
    static Node head;

    static class Node {
        int data;
        Node next;

        Node(int n) {
            data = n;
            next = null;
        }
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        head = null;
        if (n > 0) {
            head = new Node(s.nextInt());
            Node temp = head;
            for (int i = 1; i < n; i++) {
                temp.next = new Node(s.nextInt());
                temp = temp.next;
            }
        }
        int k = s.nextInt();
        System.out.println(search(k));
    }

    // Method to search for k in the given LinkedList
    static boolean search(int k) {
        while (head != null) {
            if (head.data == k)
                return true;
            head = head.next;
        }
        return false;
    }
}
=============================================================================
 */

// 2nd
/**
 * Insert a node at the end of the LinkedList
 * You are given a linked list and an integer k. You need to insert a node with data
 * value k at the end of the given linked list.
 */
//  5 8 2 15 6 25 1 11 13
// 50
/**
 * Java Code
==========================================================
import java.util.*;

public class Source {
    static Node head;

    static class Node {
        int data;
        Node next;

        Node(int n) {
            data = n;
            next = null;
        }
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        head = null;
        if (n > 0) {
            head = new Node(s.nextInt());
            Node temp = head;
            for (int i = 1; i < n; i++) {
                temp.next = new Node(s.nextInt());
                temp = temp.next;
            }
        }
        int k = s.nextInt();
        addAtEnd(k);
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    // Method to add the element at the end of the list
    static void addAtEnd(int k) {
        if (head == null)
            head = new Node(k);
        else {
            Node temp = head;
            while (temp.next != null)
                temp = temp.next;
            temp.next = new Node(k);
        }
    }
}
=====================================================================
 */

// 3rd
/**
 * Insert a node at the given index
 * You are given a linked list, an integer k and a non-negative integer index. You
 * need to insert a node with data value k at the given index of the given linked list
 * and print the elements of the linked list.
 */
//  5 8 2 15 6 25 1 11 13
// 50
// 4

/**
 * Java Code
=====================================================
import java.util.*;

public class Source {
    static Node head;

    static class Node {
        int data;
        Node next;

        Node(int n) {
            data = n;
            next = null;
        }
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        head = null;
        if (n > 0) {
            head = new Node(s.nextInt());
            Node temp = head;
            for (int i = 1; i < n; i++) {
                temp.next = new Node(s.nextInt());
                temp = temp.next;
            }
        }
        int k = s.nextInt();
        int index = s.nextInt();
        addAtGivenIndex(k, index);
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    // Method to add the element at the given index of the LinkedList
    static void addAtGivenIndex(int k, int index) {
        if (head == null)
            head = new Node(k);
        else {
            Node temp = head;
            int i = 0;
            while (temp.next != null && i++ < index - 1)
                temp = temp.next;
            Node temp2 = new Node(k);
            temp2.next = temp.next;
            temp.next = temp2;
        }
    }
}
============================================================
 */

// 4th
/**
 * Delete the last node of the LinkedList
 * You are given a linked list. You need to delete the last node of the Linked List if
 * present.
 */
/**
 * Java Code
==================================================================
import java.util.*;

public class Source {
    static Node head;

    static class Node {
        int data;
        Node next;

        Node(int n) {
            data = n;
            next = null;
        }
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        head = null;
        if (n > 0) {
            head = new Node(s.nextInt());
            Node temp = head;
            for (int i = 1; i < n; i++) {
                temp.next = new Node(s.nextInt());
                temp = temp.next;
            }
        }
        deleteLastNode();
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    // Method to delete the last node of the LinkedList
    static void deleteLastNode() {
        if (head == null)
            return;
        else if (head.next == null) {
            head = null;
        } else {
            Node temp = head;
            while (temp.next.next != null)
                temp = temp.next;
            temp.next = null;
        }
    }
}
================================================================
 */

// 5th
/**
 * Delete the node at the given index
 * You are given a linked list and a non-negative integer index. You need to delete
 * the node at the given index of the Linked List.
 */
// 5 8 2 15 6 25 1 11 13
// 4

/**
 * Java Code
=======================================================================
import java.util.*;

public class Source {
    static Node head;

    static class Node {
        int data;
        Node next;

        Node(int n) {
            data = n;
            next = null;
        }
    }

    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        head = null;
        if (n > 0) {
            head = new Node(s.nextInt());
            Node temp = head;
            for (int i = 1; i < n; i++) {
                temp.next = new Node(s.nextInt());
                temp = temp.next;
            }
        }
        int index = s.nextInt();
        deleteNodeAtGivenIndex(index);
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    // Method to delete the node at the given index of the LinkedList
    static void deleteNodeAtGivenIndex(int index) {
        if (head == null)
            return;
        else {
            Node temp = head;
            int i = 1;
            while (temp.next != null && i++ < index - 1)
                temp = temp.next;
            if (i == index && temp.next != null)
                temp.next = temp.next.next;
        }
    }
}
==================================================================
 */
