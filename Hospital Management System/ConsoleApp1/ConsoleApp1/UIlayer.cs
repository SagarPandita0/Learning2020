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
            Console.WriteLine("Type Staff which you wish to call.[Doctor,Nurse,WardBoy]");

            var category = Console.ReadLine().ToLower();
            var catg = StaffFactory.Build(category);
            Console.WriteLine($" You built a {catg.GetType().Name}");
            Console.Read();
        }

    }
}
