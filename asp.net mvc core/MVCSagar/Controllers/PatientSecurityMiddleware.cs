using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;

namespace MVCSagar.Controllers
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class PatientSecurityMiddleware
    {
        private readonly RequestDelegate _next;

        public PatientSecurityMiddleware(RequestDelegate next)
        {
            _next = next;
            Debug.WriteLine("Hello from middleware");
        }

        public Task Invoke(HttpContext httpContext)
        {

            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class PatientSecurityMiddlewareExtensions
    {
        public static IApplicationBuilder UsePatientSecurityMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<PatientSecurityMiddleware>();
        }
    }
}
