﻿using System;
using BusinessLayerLogic;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using Microsoft.VisualBasic.CompilerServices;

namespace ConsoleApp1
{
    class UIlayer
    { // THis is not the real UI code. Just factory being tested out.
          static void Main(String[] args)
        {
            Console.WriteLine("Type Staff which you wish to call.[Doctor,Nurse,WardBoy]");

            var category = Console.ReadLine().ToLower();
            var catg = StaffFactory.Build(category);
            Console.WriteLine($" You built a {catg.GetType().Name}");
            Console.Read();
            
        }

    }
}
/*
 This is how the UI would have looked like, before I added encapsulation.
 using System;
using BusinessLayerLogic;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using Microsoft.VisualBasic.CompilerServices;

namespace ConsoleApp1
{
    class UIlayer
    {
          static void Main(String[] args)
        {
            Console.WriteLine("Hospital System Management");
            string userInput = "";
            Dictionary<string, string> doctorDept = new Dictionary<string, string>();
            Dictionary<string, string> nurseDept = new Dictionary<string, string>();
            Dictionary<string, string> nurseDoct = new Dictionary<string, string>();
            Dictionary<int, string> patientIndex = new Dictionary<int, string>();
            
            List<List<string>> ailment = new List<List<string>>();
            int c = 0;
            int k = 0;
            // loop until the exit command comes in.
            while (userInput != "exit")
            {
                // display a prompt
                Console.Write("> ");
                // get the input
                userInput = Console.ReadLine().ToLower();
                

                switch (userInput)
                {
                    case "exit":
                        break;

                    case "help":
                        {
                            Console.WriteLine(" Press 1 for Doctor data entry");
                            Console.WriteLine("Press 2 for Patient data entry ");
                            Console.WriteLine("Press 3 for Nurse data entry");
                            Console.WriteLine("Press 4 for WardBoy data entry");
                            Console.WriteLine("Type \"exit\" to end the program ");                           
                            break;
                        }

                    case "1":
                        {
                            try
                            {
                                Doctor d = new Doctor();
                                Console.WriteLine("Doctor Data Entry :");
                                Console.WriteLine("Enter Doctor Name:");
                                d.Name = Console.ReadLine();
                                Console.WriteLine("Enter Doctor's Department:");
                                d.Department = Console.ReadLine();
                                doctorDept.Add(d.Department, d.Name);
                                //Console.WriteLine(doctorDept.Count);
                                //Console.WriteLine(doctorDept[d.Department]);
                                Console.WriteLine("Enter Doctor's Joining Date:");
                                d.JoiningDate = Console.ReadLine();
                                Console.WriteLine("Enter Doctor's Education:");
                                d.Education = Console.ReadLine();
                                Console.WriteLine("Doctor details completed !");
                            }
                            catch (Exception e)
                            {

                                Console.WriteLine(e);
                            }
                            
                            break;
                        }

                    case "2":
                        {
                            try
                            {
                                Console.WriteLine("Patient Data Entry :");
                                Console.WriteLine("Enter Patient Name:");
                                string Name = null;
                                Name = Console.ReadLine().Trim();
                                if (String.IsNullOrEmpty(Name))
                                {
                                    Console.WriteLine("Enter Valid Name, Try again!");
                                    break;
                                }
                                Patient p = new Patient(Name);
                                Allergies a = new Allergies();
                                Console.WriteLine("Enter Patient's Address:");
                                p.Address = Console.ReadLine().Trim();
                                Console.WriteLine("Enter Patient's PhoneNumber:");
                                p.PhoneNumber = Console.ReadLine().Trim();
                                Console.WriteLine("Enter Patient's Allergy Count:");
                                int x = Int32.Parse(Console.ReadLine().Trim());
                                for (int i = 0; i < x; i++)
                                {
                                    Console.WriteLine("Enter Patient's Allergy:");
                                    p.Allergies = Console.ReadLine().Trim();
                                    Console.WriteLine("Enter Patient's Allergy description:");
                                    a.description = Console.ReadLine().Trim();
                                    Console.WriteLine("Enter Patient's Allergy duration in years:");
                                    a.numOfYears = Int32.Parse(Console.ReadLine().Trim());
                                    p.PatientAllergies(p.Allergies, a.description, p.Name, a.numOfYears);
                                }
                                p.PrintPatientAllergies(p.Name);
                                patientIndex.Add(c++,p.Name);
                               
                                Console.WriteLine("Does the Patient have problems?[YES/NO]");
                                string ans = Console.ReadLine().ToLower().Trim();
                                int j = k;
                                List<string> vs = new List<string>();
                                if (ans.Equals("yes"))
                                {
                                    Console.WriteLine("Enter the number of problems");
                                    int xx = Int32.Parse(Console.ReadLine().Trim());
                                   
                                    
                                    for (int i = 0; i < x; i++)
                                    {   
                                        Console.WriteLine("Enter Patient's Ailment");
                                        p.Ailment = Console.ReadLine().Trim();
                                       
                                        vs.Add(p.Ailment);
                                       
                                    }
                                    ailment.Add(vs);
                                    k++;
                                    vs.Clear();
                                }
                                Console.WriteLine("Do you wish to see Patient history? [YES/NO]");
                                string z = Console.ReadLine().Trim().ToUpper();
                                if (z == "YES")
                                {
                                    p.PatientHistory(p.Name);
                                }
                                Console.WriteLine("Patient details completed !");
                                Console.WriteLine(DateTime.Now.ToString("MM/dd/yyyy hh:mm tt"));
                                
                            }
                            catch (Exception e)
                            {

                                Console.WriteLine(e);
                            }
                            
                            break;
                        }
                    case "3":
                        {
                            
                            try
                            {
                                Nurse n = new Nurse();
                                Console.WriteLine("Nurse Data Entry :");
                                Console.WriteLine("Enter Nurse Name:");
                                n.Name = Console.ReadLine();
                                Console.WriteLine("Enter Nurse's Department:");
                                n.Department = Console.ReadLine();
                                nurseDept.Add(n.Department, n.Name);
                                Console.WriteLine(nurseDept.Count);
                                Console.WriteLine("Enter Nurse's Date of Joining:");
                                n.JoiningDate = Console.ReadLine();
                                //Console.WriteLine(doctorDept.Count);
                                foreach (var item in nurseDept.Keys)
                                {
                                   // Console.WriteLine("Going in");
                                   // Console.WriteLine(item);
                                   // Console.WriteLine(doctorDept[item]);
                                   // Console.WriteLine(nurseDept[item]);
                                    if (doctorDept.ContainsKey(item))
                                    {
                                      //  Console.WriteLine("Comparison Successful!");
                                        nurseDoct.Add(nurseDept[item], doctorDept[item]);
                                    }
                                }
                              //  Console.WriteLine(nurseDoct.Count);
                            }
                            catch (Exception e)
                            {

                                Console.WriteLine(e);
                            }
                                                     
                            break;
                        }
                    case "4":
                        {//ward boy.
                            break;
                        }
                    
                    default:
                        {
                            Console.WriteLine("\"{0}\" is not a recognized command.  Type \"help\" for options.", userInput);
                            break;
                        }
                }
            }


        }

    }
}

 */