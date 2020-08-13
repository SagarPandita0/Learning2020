using System;

namespace Delegates
{
    delegate int NumberChanger(int n);
    class Program
    {
        static int num = 10;

        public static int AddNum(int p)
        {
            num += p;
            return num;
        }
       
       
        static void Main(string[] args)
        {
            //create delegate instances
            NumberChanger nc1 = new NumberChanger(AddNum);
            

            //calling the methods using the delegate objects
           int x =  nc1(25);
            Console.WriteLine("Value of Num: "+ x);

        }
    }
}