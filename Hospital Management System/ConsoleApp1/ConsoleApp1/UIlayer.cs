using System;
using BusinessLayerLogic;
using System.Collections.Generic;
using System.Collections;

namespace ConsoleApp1
{
    class UIlayer
    {
          static void Main(String[] args)
        {
            Doctor d = new Doctor();
            d.education = "MD MBBS";
            d.Department = "Surgery";
            d.Name = "ABC";
            d.JoiningDate = "12/03/2010";

            Nurse n = new Nurse();
            n.Name = "QWERTY";
            n.JoiningDate = "23/4/2003";
            n.Department = "Surgery";

            WardBoy wb = new WardBoy();
            wb.Name = "RTY";
            Dictionary<string, string> dn = new Dictionary<string, string>();

            dn.Add(d.Name, n.Name);
           // Console.WriteLine(dt);
            foreach (var item in dn)
            {
                Console.WriteLine("Doctor Name: " + item.Key + " Nurse Name: " + item.Value);
            }
            Dictionary<string, string> wn = new Dictionary<string, string>();
            wn.Add(n.Name, wb.Name);
            foreach (var item in wn)
            {
                Console.WriteLine("Nurse Name: "+item.Key+" WardBoy Name: "+item.Value);
            }
            //foreach (PropertyDescriptor descriptor in TypeDescriptor.GetProperties(d))
            //{
            //    string name = descriptor.Name;
            //    object value = descriptor.GetValue(d);
            //    Console.WriteLine("{0}={1}", name, value);
            //}

        }

    }
}
