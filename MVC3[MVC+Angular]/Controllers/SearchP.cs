using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalRepository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace MVC3.Controllers
{
    public class SearchP : Controller
    {
        HospitalDbContext dB;
        public IActionResult Index(string SearchString)
        {
            dB.Database.EnsureCreated();
            var brandItems = dB.patients
    .Where(b => b.name == SearchString)
    .Select(b => new SelectListItem
    {
        Value = b.id.ToString(),
        Text = b.name
    })
    .ToListAsync();
            return View("Index", brandItems);
          
        }
    }
}
