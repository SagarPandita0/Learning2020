using PatientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC3.Models
{
    public class PatientViewModel
    {
        public List<Patient> patientList;

        public Patient currentPatient;

        public Problem currentProblem;
    }
}
