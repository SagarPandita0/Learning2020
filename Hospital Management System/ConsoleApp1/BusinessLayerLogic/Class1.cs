using BusinessLayerLogic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

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
        private string _name;

        public string name
        {
            get { return _name; }
            set { if (value != null) 
                    {
                    _name = value; 
                    }
                else
                {
                    throw new Exception("Enter valid name!");
                }
            }
        }

        public string Address { get; set; }

        private string _PhoneNumber;

        public string PhoneNumber
        {
            get { return _PhoneNumber; }
            set
            {
                Regex expr = new Regex(@"^[6-9]\d{9}$");

                if (expr.IsMatch(value))
                {
                    _PhoneNumber = value;
                }
                else
                {
                    throw new Exception("Incorrect Number entered");
                } 
            }
        }


        public string Ailment { get; set; }
        public string Allergies { get; set; }
        public void PrintEverything() { }
        public List<Medication> Medications { get; set; }

        
    }
    public class Medication
    {
        string name;
        string description;
        string patientName;
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

    

}

