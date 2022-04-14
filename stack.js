// 1st
/**
 * You are given a stack with n integers and you need to print the fifth element from
 * the top of the stack.
 */
// 1 2 3 4 5 6 7 8 9 10 11 12
// Output - 8

// 1 2 3 4
// Output - There are not enough elements in the stack

/**
 * Java Code
======================================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Stack<Integer> stack = new Stack<>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            stack.push(s.nextInt());
        printFifthElementFromEnd(stack);
    }

    // Method to print the fifth element from the top of the stack
    static void printFifthElementFromEnd(Stack<Integer> stack) {
        int n = stack.size();
        // If the stack doesn't have enough elements
        if (n < 5)
            System.out.println("There are not enough elements in the stack");
        else {
            for (int i = 0; i < 4; i++){
                stack.pop();
                }
            System.out.println(stack.peek());
        }
    }
}
=====================================================================================
 */

// 2nd
/**
 * You are given a stack with n integers and you need to print the fifth element from
 * the bottom of the stack.
 */
// 1 2 3 4 5 6 7 8 9 10 11 12
// Output - 5

// 1 2 3 4
// Output - There are not enough elements in the stack
/**
 * Java Code
====================================================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Stack<Integer> stack = new Stack<>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            stack.push(s.nextInt());
        printFifthElementFromStart(stack);
    }

    // Method to print the fifth element from the bottom of the stack
    static void printFifthElementFromStart(Stack<Integer> stack) {
        int n = stack.size();
        // If the stack doesn't have enough elements
        if (n < 5)
            System.out.println("There are not enough elements in the stack");
        else {
            while (stack.size() > 5){
                stack.pop();
                 }
            System.out.println(stack.peek());
        }
    }
}
===================================================================================
 */

// 3rd
/**
 * Reverse a string using a stack.
 * You are given a string and you have to print the reverse of the string using a
 * stack.
 */

// abcd
// Output - dcba
/**
 * Java Code
================================================================================
import java.util.Scanner;
import java.util.*;

public class Source{
    public static void main(String arg[]) {
        Stack<Character> s = new Stack<Character>();
        Scanner in = new Scanner(System.in);
        String ans = "", data = in.nextLine();
        for (char element : data.toCharArray()) {
            s.push(element);
        }
        for (char element : data.toCharArray()) {
            ans += s.pop();
        }
        System.out.print(ans);
    }
}
=============================================================================
 */

// 4th
/**
 * Parentheses matching.
 * You are given a string of parentheses to the method then you have to check whether
 * the parentheses are well-formed in the string or not. Return true if the parentheses
 * are well-formed otherwise return false.
 */
// (())
// true
// ))((
// false

/**
 * Java code 1 (with some issue)
============================================================
public class Parenthesis1 {
      public static void main(String[] args) {
        try {
            System.out.println(match("()"));
            System.out.println(match("((((((()))))))"));
            System.out.println(match("(((((()))))))"));
            System.out.println(match("(((((()))))))"));
            System.out.println(match("(((()(((()))))))"));
        } catch (Exception e) {
            // catch the exception thrown by the method match() in try block;
            // e.getMessage() will get the exception message
            System.out.println(e.getMessage());
        }
    }

    public static boolean match(String parens) throws Exception {
        int count = 0;
        char[] chars = parens.toCharArray();
        for (char c : chars) {
            if (c == '(') {
                count++;
            } else if (c == ')') {
                if (count > 0) {
                    count--;
                } else {
                    return false;
                }
            } else {
                throw new Exception("Invalid character " + c);
            }
        }
        if (count == 0) {
            return true;
        } else {
            return false;
        }
    }
}
=============================================================



 * Java Code 2 (with issue fix)
======================================================
import java.util.Scanner;

public class Source {
    public static boolean match(String parens) {
        int count = 0;
        char[] chars = parens.toCharArray();
        for (char c : chars) {
            if (count < 0) {
                return false;
            }
            if (c == '(') {
                count++;
            } else if (c == ')') {
                if (count > 0) {
                    count--;
                } else {
                    return false;
                }
            }
        }
        if (count == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println(match(in.nextLine()));
    }
}
=====================================================================
 */

// 5th
// Parenthesis Matching (Multiple Brackets)
/**
 * Java Code
==========================================================
public class Parenthesis2 {
    public static void main(String[] args) {
        try {
            System.out.println(match("(()")); // not balanced
            System.out.println(match("{{}}")); //balanced
            System.out.println(match("(){}")); //balanced
            System.out.println(match("(({}())")); // not balanced
            System.out.println(match("{{()}}")); // balanced
            System.out.println(match("{{(})}")); // Incorrect/not balanced, but identified as correct by the algorithm below
        } catch (Exception e) {
            // catch the exception thrown by the method match() in try block;
            // e.getMessage() will get the exception message
            System.out.println(e.getMessage());
        }
    }

    public static boolean match(String parens) throws Exception {
        int count1 = 0, count2 = 0;
        char[] chars = parens.toCharArray();
        for (char c : chars) {
            if (c == '(') {
                count1++;
            } else if (c == ')') {
                if (count1 > 0) {
                    count1--;
                } else if (c == '{') {
                    count2++;
                } else if (c == '}') {
                    if (count2 > 0) {
                        count2--;
                    } else {
                        return false;
                    }
                } else {
                    throw new Exception("Invalid character " + c);
                }
            }
        }

        if (count1 == 0 && count2 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
====================================================================================
 */

// 6th
// Parenthesis Matching (using Stacks)
/**
 * Java Code
=============================================================================
import java.util.Stack;
import java.util.LinkedList;
import java.util.EmptyStackException;

public class ParenthesisStack {
    private static MyStack<Character> stack = new MyStack<Character>();


    public static void main(String[] args) {
        try {
            System.out.println(match("()"));
            System.out.println(match("((((((()))))))"));
            System.out.println(match("(((((()))))))"));
            System.out.println(match("(((((()))))))"));
            System.out.println(match("(((()(((()))))))"));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public static boolean match(String parens) throws Exception {
        for (char c : parens.toCharArray()) {
            if (c == '(') {
                stack.push('(');
            } else if (c == ')') {
                if (!stack.isEmpty()) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                throw new Exception("Unexpected character " + c);
            }
        }
        if (stack.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}

class MyStack<T> {
    private LinkedList<T> list = new LinkedList<T>();

    public void push(T e) {
        this.list.add(e);
    }

    public T pop() {
        if (this.list.size() > 0) {
            T e = list.get(list.size() - 1);
            list.remove(list.size() - 1);
            return e;
        }
        throw new EmptyStackException();
    }

    public Boolean isEmpty() {
        return this.list.size() == 0;
    }
}
==============================================================================
 */

// 7th
// Parenthesis Matching (Multiple Brackets)- Stack
/**
======================================================================
import java.util.Stack;
import java.util.EmptyStackException;

public class Parenthesis3 {
   private static Stack<Character> stack = new Stack<Character>();
 
 
   public static void main(String[] args) {
     try {
       System.out.println(match("()"));
       System.out.println(match("((((((()))))))"));
       System.out.println(match("(((((()))))))"));
       System.out.println(match("(((((()))))))"));
       System.out.println(match("(((()(((()))))))"));
 
       System.out.println(match("{}"));
       System.out.println(match("{{{{{{{}}}}}}}"));
       System.out.println(match("{{{{{{}}}}}}}"));
       System.out.println(match("{{{{{{}}}}}}}"));
       System.out.println(match("{{{{}{{{{}}}}}}}"));
 
       System.out.println(match("{{({}{{{{}}}})}}"));
       System.out.println(match("{{({}{{{{}}})}}}"));
     }
     catch(Exception e) {
       System.out.println(e.getMessage());
     }
   }
 
   public static boolean match(String parens) throws Exception {
     Stack<Character> stack = new Stack<Character>();
      
     for(char c : parens.toCharArray()) {
       if(c == '(' || c == '{') {
         stack.push(c);
       }
       else if(c == ')') {
         try {
           char t = stack.pop();
           if(t != '(') {
             return false;
           }
         }
         catch(EmptyStackException e) {
           return false;
         }
       }
       else if(c == '}') {
         try {
           char t = stack.pop();
           if(t != '{') {
             return false;
           }
         }
         catch(EmptyStackException e) {
           return false;
         }
       }
      else {
         throw new Exception("Unexpected character " + c);
       }
     }
     if(stack.isEmpty()) {
       return true;
     }
     else {
       return false;
     }
   }
 }
 
 /*below class was commented 
 ===========================================================
 class MyStack<T> {
     private LinkedList<T> list = new LinkedList<T>();
 
     public void push(T e) {
         this.list.add(e);
     }
 
     public T pop() {
         if (this.list.size() > 0) {
             T e = list.get(list.size() - 1);
             list.remove(list.size() - 1);
             return e;
         }
         throw new EmptyStackException();
     }
 
     public Boolean isEmpty() {
         return this.list.size() == 0;
     }
 }
 ====================================================================
 =======================================================================
 */

// 8th
// Parenthesis Matching (incl. Square Brackets)
/**
  * Java Code
=======================================================================
import java.util.Stack;
import java.util.EmptyStackException;

public class Parenthesis4 {
   private static Stack<Character> stack = new Stack<Character>();


   public static void main(String[] args) {
       try {

           System.out.println(match("{[(}"));
           System.out.println(match("[{{{{{{{}}}}}}}]"));

       }
       catch(Exception e) {
           System.out.println(e.getMessage());
       }
   }

   public static boolean match(String parens) throws Exception {
       Stack<Character> stack = new Stack<Character>();
       for(char c : parens.toCharArray()) {
           if(c == '(' || c == '{'|| c == '[') {
               stack.push(c);
           }
           else if(c == ')') {
               try {
                   char t = stack.pop();
                   if(t != '(') {
                       return false;
                   }
               }
               catch(EmptyStackException e) {
                   return false;
               }
           }
           else if(c == '}') {
               try {
                   char t = stack.pop();
                   if(t != '{') {
                       return false;
                   }
               }
               catch(EmptyStackException e) {
                   return false;
               }
           } else if(c == ']') {
               try {
                   char t = stack.pop();
                   if(t != '[') {
                       return false;
                   }
               }
               catch(EmptyStackException e) {
                   return false;
               }
           }
           else {
               throw new Exception("Unexpected character " + c);
           }
       }
       if(stack.isEmpty()) {
           return true;
       }
       else {
           return false;
       }
   }
}
============================================================================
  */

// 9th
// Stack Implementation using Linked List
/**
 * Java Code
=================================================================
import java.util.List;
import java.util.LinkedList;
import java.util.EmptyStackException;

public class MyStack<T> {

    public static void main(String[] arg) {
        MyStack<String> stack = new MyStack<String>();

        stack.push("OOP");
        stack.push("Algorithms");
        stack.push("Data Structures");

        try {
            while (true) {
                System.out.println("Popped " + stack.pop());
            }
        } catch (EmptyStackException e) {
            System.out.println("Done!");
        }
    }

    private LinkedList<T> list = new LinkedList<T>();

    public void push(T e) {
        this.list.add(e);
    }

    public T pop() {
        if (this.list.size() > 0) {
            T e = list.get(list.size() - 1);
            list.remove(list.size() - 1);
            return e;
        }
        throw new EmptyStackException();
    }

    public Boolean isEmpty() {
        return this.list.size() == 0;
    }
}
=========================================================================
 */

// 10th
// Book Stack
/**
 * You are given 4 books. You are required to place them in a stack, and then pick the
 * book at the top and read 100 pages of it. The book object contains a title and the
 * number of pages which you have to read.  In a single reading session, you can only
 * read 100 pages. After a book is completed, remove it from the stack, and then begin
 * reading the book that is now at the top of the stack.
 *
 * Write a program that would first push the books into the stack, and then read all
 * the books one by one, 100 pages at a time.
 */
// Reading 100 pages of Tinkle
// Reading 100 pages of Lord of the Rings
// Reading 100 pages of Lord of the Rings
// Reading 100 pages of Lord of the Rings
// Reading 100 pages of Champak
// Reading 100 pages of Harry Potter
// Reading 100 pages of Harry Potter

/**
 * Java Code
========================================================================
import java.util.Scanner;
import java.util.Stack;

class Book {
    public String title;
    public int pagesLeft;

    public Book(String title, int pages) {
        this.title = title;
        this.pagesLeft = pages;
    }

    public String getTitle() {
        return this.title;
    }

    public int getPages() {
        return this.pagesLeft;
    }

    public void read100Pages() {
        System.out.println("Reading 100 pages of " + this.title);
        this.pagesLeft = this.pagesLeft - 100;
    }

    public Boolean completed() {
        return this.pagesLeft <= 0;
    }

}

public class Source {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Book book1 = new Book("Harry Potter", 200);
        Book book2 = new Book("Champak", 100);
        Book book3 = new Book("Lord of the Rings", 300);
        Book book4 = new Book("Tinkle", 100);

        Stack<Book> bookStack = new Stack<Book>();
        //pushing the books
        bookStack.push(book1);
        bookStack.push(book2);
        bookStack.push(book3);
        bookStack.push(book4);
        
        // reading and subsequently removing the books
        while (!bookStack.isEmpty()) {
            Book topBook = bookStack.peek();
            while (!(topBook.completed())) {
                topBook.read100Pages();
            }
            bookStack.pop();
        }
    }
}
============================================================================
 */

// 11th
/**
 * Given a sequence S1, check if it exists in another sequence S2. Assume that all the
 * elements are distinct in both the sequences. Sequence S1 exists in sequence S2 if
 * all the elements of S1 appear in S2 and their relative ordering is the same, which
 * means that there may be elements in the middle of two elements in S2, which are
 * adjacent in S1.
 */
//  S1 = 1 2 3
//  S2 = 1 4 2 5 6 3
//  Return: True because S2 also contains 1, 2, 3

// S1 = 1 2 3
// S2 = 1 2 4
// Return: False because 3 is not present in S2

/**
 * Java Code
===============================================================
import java.util.Scanner;
import java.util.Stack;

public class Source {
    public static Boolean contains(Stack<Integer> sequence1, Stack<Integer> sequence2) {
        while (!(sequence2.isEmpty())) {
            if (sequence2.pop() == sequence1.peek()) {
                sequence1.pop();
                if (sequence1.isEmpty()) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line1 = scanner.nextLine();
        String line2 = scanner.nextLine();
        Stack<Integer> sequence1 = new Stack<Integer>();
        Stack<Integer> sequence2 = new Stack<Integer>();
        int boxIndex = 0;
        for (String elem1 : line1.split(" ")) {
            sequence1.add(Integer.parseInt(elem1));
        }
        for (String elem2 : line2.split(" ")) {
            sequence2.add(Integer.parseInt(elem2));
        }
        Boolean isSubsequence = contains(sequence1, sequence2);
        System.out.println(isSubsequence);
    }
}
=====================================================================
 */

// 12th
/**
 * Reverse the elements
 * You are given a stack with n integers. You need to reverse the last half of the
 * elements i.e. floor(n/2) elements from the bottom of the stack using recursion and
 * print the elements of the stack.
 * Note : Floor function takes input as a real number and it returns the greatest
 * integer less than or equal to the input.
 * Ex. floor(5.4) will give output as 5 and floor(4) will give 4.
 */
// Stack(bottom -> top) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Output: [1, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7]
// Stack(bottom -> top) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Output: [1, 2, 3, 4, 5, 6, 11, 10, 9, 8, 7]

/**
 * Java Code
=============================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Stack<Integer> stack = new Stack<>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            stack.push(s.nextInt());
        reverseSecondHalf(stack);
        System.out.println(stack);
    }

    // Method to reverse the last half of the elements from the bottom of the stack
    static void reverseSecondHalf(Stack<Integer> stack) {
        int n = stack.size();
        reverse(stack, n / 2);
    }

    // Recursive method to reverse the last half of the elements from the bottom of the stack
    static void reverse(Stack<Integer> stack, int n) {
        if (n > 0) {
            int temp = stack.pop();
            reverse(stack, n - 1);
            //Insert all the integers held in function call stack one by one from the bottom to top
            insertAtBottom(stack, temp, n - 1);
        }
    }

    // Recursive method to insert the element temp at (ceil(n/2)+1)th position
    static void insertAtBottom(Stack<Integer> stack, int temp, int n) {
        if (n == 0)
            stack.push(temp);
        else {
            int temp2 = stack.pop();
            // Remove all the elements except the first ceil(n/2) elements of the original stack
            insertAtBottom(stack, temp, n - 1);
            // Push all the integers held in function call stack once the integer is inserted at the (ceil(n/2)+1)th position
            stack.push(temp2);
        }
    }
}
=============================================================
 */

// 13th
/**
 * Sort the stack
 * You are given a stack with n integers. You need to sort the elements of the stack in
 * ascending order such that the minimum value is at the bottom-most position of the
 * stack.
 */
//  Stack(bottom -> top) = [6, 12, 3, 4]
//  Output: [3, 4, 6,12]

/**
 * Java Code
=============================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Stack<Integer> stack = new Stack<>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            stack.push(s.nextInt());
        sort(stack);
    }

    // Method to sort the elements of the stack in ascending order
    static void sort(Stack<Integer> stack) {
        Stack<Integer> temp = new Stack<>();
        while (!stack.isEmpty()) {
            // Remove the top element from the original stack
            int n = stack.pop();
            // Remove the elements form temp stack which are greater than n and push into original stack
            while (!temp.isEmpty() && temp.peek() > n)
                stack.push(temp.pop());
            temp.push(n);
        }
        System.out.println(temp);
    }
}
=============================================================
 */
