using System;
using BusinessLayerLogic;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using Microsoft.VisualBasic.CompilerServices;

namespace ConsoleApp1
{
    class UIlayer
    {
          static void Main(String[] args)
        {
            Console.WriteLine("Enter a number of wheels between 1 and 12 to build a vehicle and press enter");

            var category = Console.ReadLine();
            var catg = StaffFactory.Build(category);
            Console.WriteLine($" You built a {catg.GetType().Name}");
            Console.Read();
        }

    }
}
