using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using AutoMapper;
using HospitalRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PatientLibrary;
using ValidationContext = System.ComponentModel.DataAnnotations.ValidationContext;

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
        public IEnumerable<Patient> Get()
        {

            return dB.patients
                .Include(pat => pat.Problems);
        }

        // GET api/<PatientAPI>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PatientAPI>
        [HttpPost]
        public IActionResult Post([FromBody] PatientDto x) 
        {
            
            //use automapper
            Patient obj = new Patient();
            obj.name = x.name;
            obj.id = x.id;
            obj.Phone = x.Phone;
            obj.address = x.address;
            obj.Problems = x.Problems;
            var context = new ValidationContext(obj, null, null);
            // ObjectMapper<Patient, PatientDto> mapper = new ObjectMapper<Patient, PatientDto>();
            List<ValidationResult> validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(obj, context, validationResults, true);
            if (isValid)
            {
                dB.patients.Add(obj);
                dB.SaveChanges();

                List<Patient> PatientList = dB.patients
                    .Include(pat => pat.Problems)
                    .ToList<Patient>();
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
