using BusinessLayerLogic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Collections.Specialized;
using System.Collections;
using System.Linq;

namespace BusinessLayerLogic
{
    public interface IStaff
    {
        public string Name { get; set; }
       public string Department { get; set; }
      public string JoiningDate { get; set; }
      //  public interface int EncashSalary();
    }

    //public class ListWithDuplicates : List<KeyValuePair<string, string>>
    //{
    //    public void Add(string key, string value)
    //    {
    //        var element = new KeyValuePair<string, string>(key, value);
    //        this.Add(element);
    //    }
        
    //}
    public class Patient
    {
        List<Nurse> nlist = new List<Nurse>();
        List<WardBoy> wblist = new List<WardBoy>();
        static List<Allergies> patientAllergies = new List<Allergies>();
      // static ListWithDuplicates pts = new ListWithDuplicates();
        static NameValueCollection myCol = new NameValueCollection();
        public int id;
        private string _name;
        
        public string PrintTime()
        {   
            return(DateTime.Now.ToString("MM/dd/yyyy hh:mm tt"));
        }
        public Patient(string pName)
        {
            this.Name = pName;
            
            
          //  pts.Add(pName,PrintTime());
            myCol.Add(pName,PrintTime());
            //Console.WriteLine(PrintTime()); 
        }
        public void PatientHistory(string name)
        {
            //foreach (var item in pts)
            //{
            //    string x = string.Format("{0} entered at {1} ", item.Key, item.Value);
            //    // Console.WriteLine(x);
            //}
            Console.WriteLine("Patient History: {0}",myCol[name]);
        }
        public void PatientAllergies(string aname,string adescription,string pname, int noy )
        {
            
            patientAllergies.Add(new Allergies { name = aname, description = adescription, patientName = pname, numOfYears = noy });
        }
        public void PrintPatientAllergies(string pname) 
        {
            IEnumerable<string> languageList = patientAllergies.Select(selector: p => p.name = pname)
                                                   ;
            Console.WriteLine(languageList);
        }


        public string Name { get; set; }

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
    public class Allergies 
    {
        public string name;
        public string description;
        public int numOfYears;
        public string patientName;

    }

    public class Medication
    {
        string name;
        string description;
        string patientName;
    }
    public class Doctor : IStaff
    {
       // public Nurse nrse { get; set; }
        private string _education;
        
        public string Education
        {
            get { return _education; }
            set {if(value != null) _education = value; }
        }

        public string Name { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Department { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string JoiningDate { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

       // public override int EncashSalary() => 100000;
       
    }

    public class Nurse : IStaff
    {
        // public override int EncashSalary() => 10000;
        // public WardBoy wboy { get; set; }
        // public ICollection<Doctor> doctr { get; set; }
        public string Name { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Department { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string JoiningDate { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }

    public class WardBoy : IStaff
    {
        public string Name { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Department { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string JoiningDate { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

       // public override int EncashSalary() => 5000;
       // public Nurse nse { get; set; }
    }

    public static class StaffFactory
    {
        public static IStaff Build(string type)
        {
            return type switch
            {
                "Doctor" => new Doctor(),
                "Nurse" => new Nurse(),
                "WardBoy" => new WardBoy(),
                _ => throw new ArgumentException("Invalid type", "type"),
            };
        }
    }
    

}

