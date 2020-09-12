using System;
using System.Collections.Generic;

namespace PatientLibrary
{
    public class Patient
    {
        public int id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public List<Problem> Problems { get; set; }
    }

    public class Problem
    {
        public int id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public List<Treatment> Treatment { get; set; }
    }

    public class Treatment
    {
        public int id { get; set; }

        public string Name { get; set; }

        public string Dosage { get; set; }
    }
}
