    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Moq;
    using System;
    using MVC3.Controllers;
    using PatientLibrary;
    using Microsoft.Extensions.Configuration;
    using HospitalRepository;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Http;

    namespace testProject
    {
        [TestClass]
        public class MyUnitTestNS
        {
            public static IConfiguration InitConfiguration()
            {
                var config = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json")
                    .Build();
                return config;
            }
            public static HospitalDbContext CreateDbContext()
            {
                var config = InitConfiguration();
                var connectionString = config["connstring"];

                var optionsBuilder = new DbContextOptionsBuilder<HospitalDbContext>();
                optionsBuilder.UseSqlServer(connectionString);
                var fewdbcontext = new HospitalDbContext(optionsBuilder.Options);
                return fewdbcontext;
            }
            [TestMethod]
            public void TestCustomerAdd()
            {
                Customer x = new Customer();
                //  A A A
                Mock<IDataLayer> mockdatalayer = new Mock<IDataLayer>(); // Arrange
                                                                         // Arrange
                                                                         //mockdatalayer.Setup(x => x.Add()).Callback(() =>
                                                                         //{
                                                                         //    // Do not do anything
                                                                         //    var x = 100;
                                                                         //});
                mockdatalayer.Setup(x => x.Add(It.IsAny<string>()))
                    .Returns(true);
                x.db = mockdatalayer.Object;
                x.name = "Shiv";
                // Act
                var isadded = x.Add();
                // Assert
                Assert.AreEqual(true, isadded); // assert / check
            }
            [TestMethod]
            public void TestAPIPost()
            {
                // Mock
                // Mock on function , void , paraeters
                // HTTPContext , Session , Request , Response
                // IsAny for mocking all data types of .NET
                // Good understanding
                Mock<HttpContext> httpmock = new Mock<HttpContext>();
                Mock<ISession> sessionmock = new Mock<ISession>();

                sessionmock.Setup(x => x.Set(It.IsAny<string>(), It.IsAny<byte[]>()))
                                .Callback<string, byte[]>((s, b) =>
                                {
                                // do nothing
                                var x = 0;
                                }
                                );
                httpmock.Setup(s => s.Session).
                    Returns(sessionmock.Object);

                List<PatientDto> pdtos = new List<PatientDto>();
                pdtos.Add(new PatientDto() { name = "Shiv", address = "Mumbai", Phone = "9865986598" });
               // pdtos.Add(new PatientDto() { name = "", address = "Mumbai1", Phone = "7845653245" });
               pdtos.Add(new PatientDto() { name = "ddd", address = "Mumbai1", Phone = "020151" });

                PatientAPI pobjApi = new PatientAPI(
                    new Patient(), CreateDbContext()
                    );
                pobjApi.ControllerContext.HttpContext = httpmock.Object;
                var ar = pobjApi.Post(pdtos);
                var or = ar as OkObjectResult;
                Assert.AreEqual(200, or.StatusCode);
                Assert.AreNotEqual(0, ((List<Patient>)or.Value).Count);
            }
        }
        public class Customer
        {
            public string name { get; set; }
            public IDataLayer db = new DataLayer();
            public bool Add()
            {
                if (name.Length == 0)
                {
                    return false;
                }
                if (db.Add(""))
                {
                    name = "Welcome " + name; // code will never 
                }
                return true;
            }
        }
        public interface IDataLayer
        {
            bool Add(string connection);
        }
        public class DataLayer : IDataLayer
        {
            public bool Add(string connection)
            {
                throw new Exception("Sql Server is not running");

                // Data acces
            }
        }
    }



