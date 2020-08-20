using System;
using BusinessLayerLogic;
using System.Collections.Generic;
using System.Collections;

namespace ConsoleApp1
{
    class UIlayer
    {
          static void Main(String[] args)
        {
            Console.WriteLine("Hospital System Management");
            string userInput = "";

            // loop until the exit command comes in.
            while (userInput != "exit")
            {
                // display a prompt
                Console.Write("> ");
                // get the input
                userInput = Console.ReadLine().ToLower();
                Dictionary<string,string> doctorDept = new Dictionary<string,string>();
                Dictionary<string, string> nurseDept = new Dictionary<string, string>();
                
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
                            Doctor d = new Doctor();
                            Console.WriteLine("Doctor Data Entry :");
                            Console.WriteLine("Enter Doctor Name:");
                            d.Name = Console.ReadLine();
                            Console.WriteLine("Enter Doctor's Department:");
                            d.Department = Console.ReadLine();
                            doctorDept.Add(d.Name, d.Department);
                            Console.WriteLine("Enter Doctor's Joining Date:");
                            d.JoiningDate = Console.ReadLine();
                            Console.WriteLine("Enter Doctor's Education:");
                            d.Education = Console.ReadLine();
                            Console.WriteLine("Doctor details completed !");
                            break;
                        }

                    case "2":
                        {
                            Patient p = new Patient();
                            Console.WriteLine("Patient Data Entry :");
                            Console.WriteLine("Enter Patient Name:");
                            p.Name = Console.ReadLine();
                            Console.WriteLine("Enter Patient's Address:");
                            p.Address = Console.ReadLine();
                            Console.WriteLine("Enter Patient's PhoneNumber:");
                            p.PhoneNumber = Console.ReadLine();
                            Console.WriteLine("Enter Patient's Allergies:");
                            p.Allergies = Console.ReadLine();
                            Console.WriteLine("Enter Patient's Ailment");
                            p.Ailment = Console.ReadLine();
                            Console.WriteLine("Patient details completed !");
                            break;
                        }
                    case "3":
                        {
                            Nurse n = new Nurse();
                            Console.WriteLine("Nurse Data Entry :");
                            Console.WriteLine("Enter Nurse Name:");
                            n.Name = Console.ReadLine();
                            Console.WriteLine("Enter Nurse's Department:");
                            n.Department = Console.ReadLine();
                            nurseDept.Add(n.Name,n.Department);
                            Console.WriteLine("Enter Nurse's Date of Joining:");
                            n.JoiningDate = Console.ReadLine();
                            
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
