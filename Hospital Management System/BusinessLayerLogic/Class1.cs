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

    //Patient comes for treatment. Patient has to give his name , Address,
    //phone number and What problem he had. Name , Phonnumber are compulsory fields
    /* Every patient can have allergies.System should have the ability to put allergy name , 
     * small description and 
     * number of years he has this allergy.[list<String:allgyName,String:descriptn,Integer:noOfYears>]
     * create your own class to encapsulate those three strings in a meaningful way, then use List<YourNewClass>.
     
     *  public class MyCustomClass
    {
        public string MyString1 { get; set; }
        public string MyString2 { get; set; }
        public string MyString3 { get; set; }
    }

    class MyApp
    {
        public MyApp()
        {
            List<MyCustomClass> customList = new List<MyCustomClass>();
            customList.Add(new MyCustomClass
            {
                MyString1 = "Hello",
                MyString2 = "Every",
                MyString3 = "Body",
            });
        }
    }

     Patient can have multiple problems.So like a patient can have fever , 
    cough.While entering problem system should have ability to put problem description , 
    number of days he has this problem[list<String:problem,Integer:noOfDays>]
     Patient is allocated to doctor who gives him treatments.
    At any time only one Patient will be allocated to a doctor.
    [HashMap can be used here-(key:doctor,value:patient)]*/
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
            }
        }

        private string _address;

        public string address
        {
            get { return _address; }
            set { if (value != null)
                {
                    _address = value;
                }
            }
        }

        
        private int _phoneNumber;

        public int phoneNumber
        {
            get { return _phoneNumber; }
            set
            {
                try
                {
                    int num = value;
                }
                catch (ArgumentNullException )
                {
                    Console.WriteLine("Enter valid values");
                } _phoneNumber = value; }
        }

        private string _problem;

        public string problem
        {
            get { return _problem; }
            set { if (value != null)
                {
                    _problem = value;
                }
            }
        }


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

