using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientLibrary;

namespace MVCSagar.Controllers
{
    public class PatientController : Controller
    {
        public IActionResult Add()
        {
            return View("PatientAdd");
        }
        public IActionResult MySubmit(Patient obj)
        {
            return View("PatientDisplay" , obj);
        }
        
    }
}
