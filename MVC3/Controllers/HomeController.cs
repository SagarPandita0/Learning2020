using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using HospitalRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MVC3.Models;
using PatientLibrary;

namespace MVC3.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            
            return View("Index");
        }     
        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Add()
        {
            return View("Index");
        }       
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
