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

                // Branch based on the input
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
                            Console.WriteLine("Enter Doctor's Joining Date:");
                            d.JoiningDate = Console.ReadLine();
                            Console.WriteLine("Enter Doctor's Education:");
                            d.education = Console.ReadLine();
                            Console.WriteLine("Doctor details completed !");
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
