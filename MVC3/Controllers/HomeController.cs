using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using HospitalRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MVC3.Models;
using PatientLibrary;

namespace MVC3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        static PatientViewModel pvm = new PatientViewModel();
        HospitalDbContext dB;

        public HomeController(ILogger<HomeController> logger, HospitalDbContext hosdb)
        {
            _logger = logger;
            dB = hosdb;
        }

        public IActionResult Index()
        {
            return View("Index", pvm);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult AddPat(Patient x)
        {
            pvm.currentPatient = x;
            return View("Index", pvm);
        }

        public IActionResult AddPro(Problem x)
        {
            if (!(pvm.currentPatient is null))
            {
                if (pvm.currentProblem is null)
                {
                    pvm.currentProblem = x;
                    pvm.currentProblem.Treatment = new List<Treatment>();
                }
                else
                {
                    pvm.currentPatient.Problems = new List<Problem>();
                    pvm.currentPatient.Problems.Add(pvm.currentProblem);
                    pvm.currentProblem = x;
                }
            }
            return View("Index", pvm);
        }

        public IActionResult AddT(Treatment x)
        {
            if (!(pvm.currentPatient is null))
            {
                if (!(pvm.currentProblem is null))
                {
                    if (pvm.currentProblem.Treatment is null)
                    {
                        pvm.currentProblem.Treatment = new List<Treatment>();
                    }
                    pvm.currentProblem.Treatment.Add(x);
                }
            }
            return View("Index", pvm);
        }

        public IActionResult AddFinalPatient()
        {
            if (pvm.patientList is null)
            {
                pvm.patientList = new List<Patient>();
            }
            pvm.patientList.Add(pvm.currentPatient);
            pvm.currentProblem = null;
            pvm.currentPatient = null;
            return View("Index", pvm);
        }

        public IActionResult AddFinalProblem()
        {
            if (pvm.currentPatient.Problems is null)
            {
                pvm.currentPatient.Problems = new List<Problem>();
            }
            pvm.currentPatient.Problems.Add(pvm.currentProblem);
            pvm.currentProblem = null;
            return View("Index", pvm);
        }

        public IActionResult AddFinal()
        {
            if (!(pvm.currentProblem is null))
            {
                if (pvm.currentPatient.Problems is null)
                {
                    pvm.currentPatient.Problems = new List<Problem>();
                    pvm.currentPatient.Problems.Add(pvm.currentProblem);
                }
                else
                {
                    pvm.currentPatient.Problems.Add(pvm.currentProblem);
                }
            }
            if (pvm.patientList is null)
            {
                pvm.patientList = new List<Patient>();
            }
            pvm.patientList.Add(pvm.currentPatient);
            pvm.currentPatient = null;
            pvm.currentProblem = null;
            return View("Index", pvm);
        }

        public IActionResult AddToDB()
        {
            dB.Database.EnsureCreated();
            foreach (var item in pvm.patientList)
            {
                dB.patients.Add(item);
            }
            dB.SaveChanges();
            pvm.currentPatient = null;
            pvm.patientList = null;
            return View("Index", pvm);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
