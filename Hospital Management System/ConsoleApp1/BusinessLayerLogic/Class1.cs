using BusinessLayerLogic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Collections.Specialized;
using System.Collections;
using System.Linq;
using System.ComponentModel;

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
    public class Patient
    {  //since patient can be attended by multiple nurse & wardboy.
        // we can have a dict with mapping of patient+nurse,patient+wardboy
        public Patient()
        {

        }
       public List<Nurse> nlist;
       public  List<WardBoy> wblist;
        Dictionary<string,List<string>> pn = new Dictionary<string, List<string>>();
        Dictionary<string, List<string>> pwb = new Dictionary<string, List<string>>();

        public void MapPatientToNurses(Patient p)
        { // Mapping Problem to medication.
            Patient pt = new Patient();
            pt._Name = p._Name;           
            Nurse nurse = new Nurse();
            List<string> nurseList = new List<string>();
            //Enter number of nurses to map to Patient
            int x = Int32.Parse(Console.ReadLine());
            while (x != 0)
            {
               nurse.Name = Console.ReadLine();
                nurseList.Add(nurse.Name);
                x--;
            }
            pn.Add(pt._Name, nurseList);
        }
        public void MapPatientToWardBoys(Patient p)
        { // Mapping Patient to WardBoys
            Patient pt = new Patient();
            pt._Name = p._Name;
            WardBoy wardBoy = new WardBoy();
            List<string> wardBoyList = new List<string>();
            //Enter number of WardBoys to map to Patient
            int x = Int32.Parse(Console.ReadLine());
            while (x != 0)
            {
                wardBoy.Name = Console.ReadLine();
                wardBoyList.Add(wardBoy.Name);
                x--;
            }
            pwb.Add(pt._Name, wardBoyList);
        }


        //static List<Allergies> patientAllergies = new List<Allergies>();
      // static ListWithDuplicates pts = new ListWithDuplicates();
        static NameValueCollection myCol = new NameValueCollection();
        public int id;      
            
        public string PrintTime()
        {   
            return(DateTime.Now.ToString("MM/dd/yyyy hh:mm tt"));
        }
        public Patient(string pName)
        { // call this constructor when you wish have timestamp attached.
            _Name = pName;     
          //  pts.Add(pName,PrintTime());
            myCol.Add(pName,PrintTime());
            //Console.WriteLine(PrintTime()); 
        }
        private Problem _problem1;
        private Allergies _allergies1;
        public Patient(Allergies allergies, Problem problem)
        {
            _allergies1 = allergies;
            _problem1 = problem;
        }      
        public void GeneratePatientReport(string patientName,string address,string number)
        {
            Patient patient = new Patient();
            patient._Name = patientName;
            patient._Address = address;
            patient._PhoneNumber = number;
            myCol.Get(patient._Name); // This gives name + time of entry in system.

            if (ts.ContainsKey(patientName))
            {
               List<Allergies> allergies =  ts[patientName]; //gives all allergies of patient.
            }
            if (ptop.ContainsKey(patientName))
            {
                List<Problem> problems = ptop[patientName]; // gives all the problems with the patient.
            }

            Dictionary<string, List<Medication>> data = DoctorRefersMedicationToPatient(patient);
            List<Medication> medList = new List<Medication>();
            foreach (var item in data.Keys)
            {
                //This will give all the medications that were administered to Patient
                foreach (var itemm in data[item])
                {
                    medList.Add(itemm); //clubbing all the medications together for the report.
                }
            }
            
                     
        }
        Dictionary<string, List<Allergies>> ts = new Dictionary<string, List<Allergies>>();
        public void IntakePatientAllergies(Allergies pata) 
        {         
            List<Allergies> allergies = new List<Allergies>();
           
            //Enter Patient Allergy count
            int x = Int32.Parse(Console.ReadLine());
            Allergies allergies1 = new Allergies();
            //start entering details one by one
            
            while (x != 0)
            {   
                allergies1.Name = pata.Name;
                allergies1.Description = pata.Description;
                allergies1.NumOfYears = pata.NumOfYears;
                allergies1.PatientName = pata.PatientName;
                allergies.Add(allergies1); // this way we added allergies with all required details.
                allergies1 = null;
                x--;
            }
            ts.Add(allergies1.PatientName, allergies);
        }
        //public void PrintPatientAllergies(string pname) 
        //{
        //    IEnumerable<List<Allergies>> pPA = ts.Select(p =>
        //    {
        //        Allergies v = p.Key = pname;
        //        return v;
        //    });

        //    Console.WriteLine(pPA);
        //}
        static Dictionary<string, List<Problem>> ptop = new Dictionary<string, List<Problem>>();
        public void MapPatientToProblems(Problem patp)
        {
            List<Problem> problems = new List<Problem>();
       
            int x = Int32.Parse(Console.ReadLine());
            Problem problem = new Problem();
            //start entering details one by one

            
            while (x != 0)
            {
                problem.Name =patp.Name;
                problem.Description = patp.Description;
                problem.NumOfDays = patp.NumOfDays;
                problems.Add(problem);  // this way we added problems with all required details.             
                problem = null;
                x--;
            }
            ptop.Add(_Name, problems);
        }
        private string _Name;
        private string _Address;
        public string GetPatientName(string name)
        {
           _Name = name;
            return name;
        }
        public void GetPatientAddress(string address)
        {
            _Address = address;
        }
        
        private string _PhoneNumber;
        public void GetPatientPhoneNumber(string num)
        {
            Regex expr = new Regex(@"^[6-9]\d{9}$");

            if (expr.IsMatch(num))
            {
                _PhoneNumber = num;
            }
            else
            {
                throw new Exception("Incorrect Number entered");
            }
        }
        public void MapPatientToTimeLogs()
        {

        }
       
        // this way we will be able to map multiple medications to a single problem.
        static Dictionary<string, List<Medication>> promed = new Dictionary<string, List<Medication>>();
        public void MapProblemToMedication(Problem pro)
        { // Mapping Problem to medication.
            _problem1.Name = pro.Name;
            //"Enter Medications for Problem."
            Medication medication = new Medication();
           //"Enter number of Medications"
            int x = Int32.Parse(Console.ReadLine());
            while (x!=0)
            {
                medication.Name = Console.ReadLine();
                pro.medications.Add(medication);
                x--;
            }
            promed.Add(_problem1.Name, pro.medications);
        }

        public Doctor doctor;
        public Dictionary<string,List<Medication>> DoctorRefersMedicationToPatient(Patient patient)
        {
            //doctor will access the mapped Medication-to-Problem.
            //Doctor will take in Patient Problem and give medication.
            Patient p = patient;
            Doctor d = new Doctor();
            p.doctor = d;
           List<Problem> problems = ptop[p._Name];
            Dictionary<string, List<Medication>> keyValuePairs = new Dictionary<string, List<Medication>>();
            foreach (var item in problems)
            {
                foreach (var items in promed)
                {
                    if (item.Equals(items.Key))
                    {
                        keyValuePairs.Add(items.Key,items.Value); // this will give the medications that exist for the particular problems.
                    }
                }
            }
            
            return null;
        }
    }
    public class Allergies 
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfYears { get; set; }
        public string PatientName { get; set; }
    }   
    public class Medication
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string PatientName { get; set; }
    }
    public class Problem
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfDays { get; set; }

        public List<Medication> medications;//1 problem - many medications.
    }
    public class Doctor : Staff
    {

        public string Education { get; set; }

        Doctor doctor = new Doctor();
        public void AssignEducationToDoctor(string education)
        {
            doctor.Education = education;
        }
       
       
        public void AssignNameToDoctor(string dname)
        {
            
            doctor.Name = dname; // this Name comes from Staff.
        }
        public void AssignJoiningdate(string ndate)
        {
            doctor.JoiningDate = ndate;
        }
        // public override int EncashSalary() => 100000;

    }

    public class Nurse : Staff
    {
        // public override int EncashSalary() => 10000;
        Nurse nurse = new Nurse();
        public void AssignNameToNurse(string nname)
        {
           
            nurse.Name = nname; // this Name comes from Staff.
        }
        public void AssignJoiningdate(string ndate)
        {
            nurse.JoiningDate = ndate;
        }
    }

    public class WardBoy : Staff
    {

        // public override int EncashSalary() => 5000;
        WardBoy wardBoy = new WardBoy();
        public void AssignNameToWardBoy(string wbname)
        {
            
            wardBoy.Name = wbname;// this Name comes from Staff.
        }
        public void AssignJoiningdate(string wbdate)
        {
            wardBoy.JoiningDate = wbdate;
        }
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
    /*
     Patient 'has a' problems+allergies. -> composition relationship.
    problem 'has a' medication. -> composition relationship.
    
     */

}

