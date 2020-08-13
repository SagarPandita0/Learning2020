using BusinessLayerLogic;
using System;

namespace BusinessLayerLogic
{
   /* public abstract class Staff
    {
        public string name { get; set; }
        public string id { get; set; }


    }*/
    public class Doctor 
    {
        private string _id;

        public string id
        {
            get { return _id; }
            set 
            {
                if (value == null)
                {
                    return;
                }
                _id = value; 
            }
        }
        // ID can be alpha-numeric.
        private string _name;

        public string name
        {
            get { return _name; }
            set 
            {
                if (value == null) 
                { 
                    return;
                }
                _name = value;
            }
        }

        private short age { get; set; } // no need for int. short suffices the range for age.
        protected string address { get; set; }
        public int contact { get; set; } // entails the mobile-number.
        public string speciality { get; set; }
    }
    public class DoctorSon : Doctor
    {
        //for checking protected class methods.
        public void func1() {
            address = "hello"; // address was accessible in DoctorSon which it inherited from Doctor.
                               //'protected' keyword prevents it from being used by classes which don't inherit Doctor.
         //   Console.WriteLine(address);

        }
        public void func3()
        {
          //  age = "hello"; //Doctor.age will remain inaccessible because its private. age here throws the same error.
           

        }
    }
    public class Nurse 
    {
        public string id { get; set; }
        public string category { get; set; } // category for which the nurse has training.
        public short age { get; set; }
        public int contact { get; set; }
    }
   /* public class WardBoy
    {
        public string id { get; set; }
        public short age { get; set; }
    }*/
    public class Patient 
    {
        public string id { get; set; }
        public string name { get; set; }
        public string  address { get; set; }
        public short age { get; set; }
        public int contact { get; set; }
       public string assignedRoom { get; set; }
        public string assignedDoctor { get; set; }
    }
    public class Manager
    {
        public string id { get; set; }
        public string department { get; set; }
        public string address { get; set; }
        public short age { get; set; }
        public int contact { get; set; }

    }
    public class Admin
    {
        public string id { get; set; }
        internal string category { get; set; }
        public short age { get; set; }
    }
}

namespace BLLOther
{
    public class WardBoy: Admin
    {
        public void func2()
        {
            category = "ward_boy"; //since category is available from admin class[which belongs to seperate namespace],
                                   //we can infer 'internal' is working.
           // Console.WriteLine(category);

        }
        public new string id { get; set; } //hiding intensional. add 'new' keyword.
        public new short age { get; set; }
    }
}

