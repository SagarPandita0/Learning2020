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
                                Patient p = new Patient();
                                Console.WriteLine("Patient Data Entry :");
                                Console.WriteLine("Enter Patient Name:");
                                p.Name = Console.ReadLine().Trim();
                                Console.WriteLine("Enter Patient's Address:");
                                p.Address = Console.ReadLine().Trim();
                                Console.WriteLine("Enter Patient's PhoneNumber:");
                                p.PhoneNumber = Console.ReadLine().Trim();
                                Console.WriteLine("Enter Patient's Allergies:");
                                p.Allergies = Console.ReadLine().Trim();
                                patientIndex.Add(c++,p.Name);
                                Console.WriteLine("Does the Patient have problems?[YES/NO]");
                                string ans = Console.ReadLine().ToLower().Trim();
                                if (ans.Equals("yes"))
                                {
                                    Console.WriteLine("Enter the number of problems");
                                    int x = Int32.Parse(Console.ReadLine().Trim());
                                    int j = k;
                                    List<string> vs = new List<string>();
                                    for (int i = 0; i < x; i++)
                                    {   
                                        Console.WriteLine("Enter Patient's Ailment");
                                        p.Ailment = Console.ReadLine().Trim();
                                       
                                        vs.Add(p.Ailment);
                                       // ailment[j].Add(p.Ailment);
                                    }
                                    ailment.Add(vs);
                                    vs.Clear();
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
