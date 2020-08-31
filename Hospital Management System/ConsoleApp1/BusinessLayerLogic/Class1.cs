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
    public partial class Patient: IAllergies
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
        { // call this constructor when you wish have timestamp attached.
            this.Name = pName;
            
            
          //  pts.Add(pName,PrintTime());
            myCol.Add(pName,PrintTime());
            //Console.WriteLine(PrintTime()); 
        }

        public Patient()
        {
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
        public void PatientAllergies(IAllergies pata)
        {
            List<IAllergies> allergies = new List<IAllergies>();
            allergies.Add(pata);
        }
        public void PrintPatientAllergies(string pname) 
        {
            IEnumerable<string> pPA = patientAllergies.Select(selector: p => p.Name = pname)
                                                   ;
            Console.WriteLine(pPA);
        }
        
        public void PatientProblem(IProblem patp)
        {
            List<IProblem> problems = new List<IProblem>();

            problems.Add(patp);
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

       

        public void GenerateReport() { }

        public string Description { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int NumOfYears { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string PatientName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
    public partial class Patient : IMedication,IProblem
    {
        IProblem _problem = new Patient();
        IMedication _medication = new Patient();
        Dictionary<string, string> ailmed = new Dictionary<string, string>();
        public void MapAilmentToMedication(IProblem pro, IMedication med)
        { // Mapping Problem to medication.
            _problem.Name = pro.Name;
            _medication.Name = med.Name;
            ailmed.Add(_problem.Name, _medication.Name);

        }
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
    public interface IProblem
    {
        public string Name { get; set; }
        public string Description { get; set; }
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

