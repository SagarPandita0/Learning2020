using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using HospitalRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PatientLibrary;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC3.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PatientAPI : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        public PatientAPI(ILogger<HomeController> logger, HospitalDbContext hosdb)
        {
            _logger = logger;
            dB = hosdb;
        }
        HospitalDbContext dB;
        // GET: api/<PatientAPI>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PatientAPI>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PatientAPI>
        [HttpPost]
        public IActionResult Post([FromBody] Patient x)
        {
            var context = new ValidationContext(x, null, null);
            List<ValidationResult> validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(x, context, validationResults, true);
            if (isValid)
            {
                dB.patients.Add(x);
                dB.SaveChanges();
                List<Patient> PatientList = dB.patients.ToList<Patient>();
                return Ok(PatientList);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError,validationResults);
            }
        }

        // PUT api/<PatientAPI>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PatientAPI>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
