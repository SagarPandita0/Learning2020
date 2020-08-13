using System;
using System.Diagnostics; // here resides the stopwatch feature.
namespace BoxUnbox
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch o = new Stopwatch();
            o.Start();
            CheckPerformance();
            o.Stop();

            Console.WriteLine(o.ElapsedMilliseconds);
            o.Reset();


            o.Start();
            CheckPerformance();
            o.Stop();

            Console.WriteLine(o.ElapsedMilliseconds);
            o.Reset();


            o.Start();
            CheckPerformance();
            o.Stop();

            Console.WriteLine(o.ElapsedMilliseconds);
            o.Reset();

            Console.WriteLine("After CheckPerf");
        }
        static void CheckPerformance()
        {
           
            for (int i = 0; i < 100000000; i++)
            {
                int q = 10;
                object w = q; //boxing happening here.
                //object w = (object)q //explicit boxing.
                int r = (int)w; //unboxing happening here.
            }
        }
    }
}