using PatientLibrary;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MVC3.Models
{
    public class PatientViewModel
    {   
        public PatientViewModel()
        {
            errors = new List<ValidationResult>();
        }
        public List<Patient> patientList;

        public Patient currentPatient;
        public List<ValidationResult> errors { get; set; }
        public Problem currentProblem;
    }
}
