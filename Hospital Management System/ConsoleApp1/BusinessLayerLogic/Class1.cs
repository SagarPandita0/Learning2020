using BusinessLayerLogic;
using System;
using System.Collections.Generic;

namespace BusinessLayerLogic
{
    public abstract class Staff
    {
        public string Name;
       public string Department;
      public string JoiningDate;
        public abstract int EncashSalary();
    }

    public class Patient
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public int PhoneNumber { get; set; }
        public string Ailment { get; set; }
        public string Allergies { get; set; }
        public void PrintEverything() { }
    }

    public class Doctor : Staff
    {
        public string education;
        public override int EncashSalary() => 100000;
       
    }

    public class Nurse : Staff
    {
        public override int EncashSalary() => 10000;
    }

    public class WardBoy : Staff
    {
        public override int EncashSalary() => 5000;
    }

    public class Medication
    {
        string name;
        string description;
    }

}

