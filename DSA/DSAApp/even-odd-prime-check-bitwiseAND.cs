using System;

class Program
{
    static bool isEven(int n)
    {
        return (n & 1) == 0;
    }

    static bool isPrime(int n)
    {
        if (n < 2) return false;

        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0) return false;
        }
        return true;
    }

    static void Main()
    {
        while (true)
        {
            Console.WriteLine("Enter start of range: ");
            int start = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter end of range: ");
            int end = int.Parse(Console.ReadLine());

            int evenCount = 0;
            int oddCount = 0;
            int primeCount = 0;

            Console.WriteLine("\nNumber\tEven\tOdd\tPrime");

            for (int i = start; i <= end; i++)
            {
                string type = isEven(i) ? "Even" : "Odd";
                string prime = isPrime(i) ? "Yes" : "No";

                if (type == "Even") evenCount++;
                else oddCount++;

                if (prime == "Yes") primeCount++;

                Console.WriteLine($"{i}\t{type}\t\t{prime}");
            }
            Console.WriteLine($"Total Even: {evenCount}");
            Console.WriteLine($"Total Odd: {oddCount}");
            Console.WriteLine($"Total Prime: {primeCount}");

            Console.Write("\nDo you want to check another range? (y/n): ");
            string choice = Console.ReadLine().ToLower();

            if (choice != "y")
            {
                Console.WriteLine("Goodbye");
                break;
            }

            Console.WriteLine("\n--------------------------\n");
        }
    }
}