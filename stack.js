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


