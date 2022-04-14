// FIFO

// 1st
/**
 * You are given a queue with n integers and you need to print the fifth element from
 * the head of the queue
 */
//  Queue = [1, 2, 3, 4, 5, 6, 7, 8]
//  Output: 5

/**
 * Java code
====================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Queue<Integer> queue = new LinkedList<Integer>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            queue.add(s.nextInt());
        printFifthElementFromStart(queue);
    }

    // Method to print the fifth element from the head of the queue
    static void printFifthElementFromStart(Queue<Integer> queue) {
        int n = queue.size();
        // If the queue doesn't have enough elements
        if (n < 5)
            System.out.println("There are not enough elements in the queue");
        else {
            for (int i = 0; i < 4; i++)
                queue.remove();
            System.out.println(queue.peek());
        }
    }
}
====================================================
 */

// 2nd
/**
 * You are given a queue with n integers and you need to print the fifth element from
 * the tail of the queue.
 */
//  Queue = [1, 2, 3, 4, 5, 6, 7, 8]
//  Output: 4

/**
 * Java Code
==========================================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Queue<Integer> queue = new LinkedList<Integer>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            queue.add(s.nextInt());
        printFifthElementFromEnd(queue);
    }

    // Method to print the fifth element from the tail of the queue
    static void printFifthElementFromEnd(Queue<Integer> queue) {
        int n = queue.size();
        // If the queue doesn't have enough elements
        if (n < 5)
            System.out.println("There are not enough elements in the queue");
        else {
            while (queue.size() > 5)
                queue.remove();
            System.out.println(queue.peek());
        }
    }
}
==========================================================
 */

// 3rd
// Implement a stack using two queues

// 4th
// Implement a stack using one queue

// 5th
/**
 * Identify a palindrome using Queue
 * Given an input string of unknown length, write a program to check whether the string
 * is a palindrome or not using a queue data structure. If the string comes out to be a
 * palindrome, then print “ The given input is a palindrome.”  else print “ The given
 * input is not a palindrome.” . Your program should take the following as input from
 * the user:
 */
//  Sample Input 1:
//  DAD
//  Sample Output 1:
//  The given input is a palindrome.

// Sample Input 3:
// abca
// Sample Output 3:
// The given input is not a palindrome.

/**
 * Java code
=================================================================
 import java.util.*;
   class Source {

       public void checkPalindrome(String input){

           Queue queue = new LinkedList();

           for (int i = input.length()-1; i >=0; i--) {
               queue.add(input.charAt(i));
           }

           String reverse = "";

           while (!queue.isEmpty()) {
               reverse = reverse+queue.remove();
           }
           if (input.equals(reverse))
               System.out.println("The given input is a palindrome.");
           else
               System.out.println("The given input is not a palindrome.");

       }

       public static void main(String[] args) {
           Source obj=new Source();
           Scanner in=new Scanner(System.in);
           String inputString = in.nextLine();
           obj.checkPalindrome(inputString);

       }
   }
=================================================================
 */

// 6th
/**
 * Detect duplicate parenthesis
 * Write a program that can evaluate a given balanced expression for the duplicate
 * parenthesis if it contains. If the expression includes duplicate parenthesis then
 * print “Input string contains duplicate parenthesis” else print “Input string does
 * not contain duplicate parenthesis”.
 */
//  Sample Input:
//  (((a+1))+(b+1))
//  Sample output:
//  Input string contains duplicate parenthesis

// Sample Input:
// (909)
// Sample output:
// Input string does not contain duplicate parenthesis

/**
 * Java code
=======================================================================
import java.util.*;
class Source {
    public static String findDuplicateParenthesis(String inputString) {

        Stack<Character> stack = new Stack();
        for (int i = 0; i < inputString.length(); i++) {
            char ch = inputString.charAt(i);
            if (ch != ')') {
                stack.push(ch);
            } else {
                char top = stack.peek();
                stack.pop();
                int count = 0;
                while (top != '(') {
                    top = stack.peek();
                    stack.pop();
                    count++;
                }
                if (count <= 1) {
                    return "Input string contains duplicate parenthesis";
                }
            }
        }
        return "Input string does not contain duplicate parenthesis";

    }


        public static void main(String[] args){
            Source obj = new Source();
            String inputString = new String();
            Scanner in = new Scanner(System.in);
            inputString = in.nextLine();
            System.out.println(obj.findDuplicateParenthesis(inputString));

        }

    }
=======================================================================
 */

// 7th
// Find kth largest element
/**
 * Write a code to find the kth largest number of the given sequence in a stack.
 */
// Sample Input 1:
// 4 2 0 9 6 1
// k=4, therefore, the 4th largest element has to be found
// Sample Output 1:
// 2

// Sample Input 2:
// 1 2 3 4 5 6
// k=2 , therefore the 2nd largest element has to be found
// Sample Output 2:
// 5

/**
 * Java code
====================================================
import java.util.*;

public class Source {
  // This function returns the sorted stack
   public static Stack < Integer > sortStack(Stack < Integer > input) {
       Stack <Integer> temp = new Stack <>();

       while (!input.isEmpty()) {
           // pop out the top element in stack
           int value = input.pop();

           // while temporary stack is not empty and value of the top element of input stack is less than the value of the top element of temp stack
           while (!temp.isEmpty() && value < temp.peek()) {
               // pop the last element from temporary stack and push it to the input stack
               input.push(temp.pop());
           }

           // push value in the temp stack
           temp.push(value);
       }
       return temp;
   }

   public static void findKthLargestNum(Stack <Integer> sortedStack, int k) {
       int j = 1;
       while (j < k) {
           sortedStack.pop();
           j++;
       }
       System.out.println(sortedStack.peek());
   }


  public static void main(String args[]) {
      Stack < Integer > inputStack = new Stack < Integer > ();
      Scanner in = new Scanner(System.in);
      int n = in .nextInt();
      for (int i = 0; i < n; i++) {
          inputStack.add( in .nextInt());
      }

      if (inputStack.isEmpty()) {
          System.out.println("stack is empty");
          System.exit(0);
      }

      int k = in .nextInt();
      if (k > inputStack.size()) {
          System.out.println("invalid input");
          System.exit(0);
      }

      // This is the temporary stack

      Stack < Integer > temp = sortStack(inputStack);
               findKthLargestNum(temp, k);

  }
}
====================================================
 */

// 8th
/**
 * Delete the elements
 * You are given a queue with n integers. You need to delete the second half of the
 * elements i.e., floor(n/2) elements from the head of the queue and print the
 * remaining elements.
 */
// Queue(head -> tail) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Output: [1, 2, 3, 4, 5, 6]

// Queue (head -> tail)= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Output: [1, 2, 3, 4, 5, 6]

/**
 * Java code
=============================================
import java.util.*;

public class Source {
    public static void main(String args[]) {
        Queue<Integer> queue = new LinkedList<Integer>();
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        while (n-- > 0)
            queue.add(s.nextInt());
        deleteSecondHalf(queue);
    }

    // Method to delete the second half of the elements and print the remaining elements
    static void deleteSecondHalf(Queue<Integer> queue) {
        int n = queue.size();
        int temp = n - n / 2;
        // Removing the first ceil(n/2) elements of the queue and adding back to the same queue
        for (int i = 0; i < temp; i++)
            queue.add(queue.remove());
        // Removing the end floor(n/2) elements of the original queue
        for (int i = 0; i < n / 2; i++)
            queue.remove();
        // Printing the remaining elements
        System.out.println(queue);
    }
}
=============================================
 */

// 9th
/**
 * You are given a queue. Your aim is to find the maximum element of the queue and move
 * that element to the end of the queue.
 */
//  Sample Input:
//  3 5 2 6 4
//  Sample Output:
//  [3, 5, 2, 4, 6]
/**
 * Java code
=============================================
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Source{
    static Queue<Integer> q = new LinkedList<Integer>();

    public static void func() {
        //Finding the maximum element
        int max = q.peek();
        for (int i = 0; i < q.size(); i++) {
            int del = q.remove();
            if (max < del) {
                max = del;
            }
            q.add(del);
        }
        // Adding the maximum element to the end of the queue.
        int s = q.size();
        for (int i = 0; i < s; i++) {
            int del = q.remove();
            if (del != max) {
                q.add(del);
            }
        }
        q.add(max);
    }

    public static void main(String arg[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        for (int j = 0; j < n; j++) {
            q.add(in.nextInt());
        }
        func();
        System.out.println(q);
    }
}
=============================================
 */

// 10th
/**
 * Reverse the queue
 * You are given a queue. Your aim is to reverse that queue.
 */
//  Sample Input:
//  8 1 9 2 5 3
//  Sample Output:
//  [3, 5, 2, 9, 1, 8]
/**
 * Java code
=============================================
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.Stack;

class Source {
    static Queue<Integer> q = new LinkedList<Integer>();
    static Stack<Integer> s = new Stack<>();

    public static void func() {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            s.push(q.remove());
        }
        for (int i = 0; i < size; i++) {
            q.add(s.pop());
        }
    }

    public static void main(String arg[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        for (int j = 0; j < n; j++) {
            q.add(in.nextInt());
        }
        func();
        System.out.println(q);
    }
}
=============================================
 */
