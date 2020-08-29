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
    public abstract class Staff
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
    public class Patient: IAllergies, IMedication
    {
        List<Nurse> nlist = new List<Nurse>();
        List<WardBoy> wblist = new List<WardBoy>();
        static List<IAllergies> patientAllergies = new List<IAllergies>();
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
            
            //patientAllergies.Add(new IAllergies { name = aname, description = adescription, patientName = pname, numOfYears = noy });
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
        public List<IMedication> Medications { get; set; }
        public string Description { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int NumOfYears { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string PatientName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
    public interface IAllergies 
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfYears { get; set; }
        public string PatientName { get; set; }
    }

    public interface IMedication
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string PatientName { get; set; }
    }
    public class Doctor : Staff
    {
       // public Nurse nrse { get; set; }
        private string _education;
        
        public string Education
        {
            get { return _education; }
            set {if(value != null) _education = value; }
        }

        
       // public override int EncashSalary() => 100000;
       
    }

    public class Nurse : Staff
    {
        // public override int EncashSalary() => 10000;
        // public WardBoy wboy { get; set; }
        // public ICollection<Doctor> doctr { get; set; }
    }

    public class WardBoy : Staff
    {
        
       // public override int EncashSalary() => 5000;
       // public Nurse nse { get; set; }
    }

    public static class StaffFactory
    {
        public static Staff Build(string type)
        {
            return type switch
            {
                "doctor" => new Doctor(),
                "nurse" => new Nurse(),
                "wardboy" => new WardBoy(),
                _ => throw new ArgumentException("Invalid type", "type"),
            };
        }
    }
    

}

