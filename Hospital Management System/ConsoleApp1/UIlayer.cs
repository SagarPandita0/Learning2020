using System;
using BLLOther;
using BusinessLayerLogic;
namespace ConsoleApp1
{
    class UIlayer
    {
          static void Main(String[] args)
        {
            Doctor d = new Doctor();
            d.id = "1aw2";
            DoctorSon ds = new DoctorSon();
            ds.func1();
          //  ds.address; //protected.
            WardBoy wb = new WardBoy();
            wb.func2();

           // wb.category; //internal.
          //  ds.age(); //private- so won't work.
        }

    }
}
