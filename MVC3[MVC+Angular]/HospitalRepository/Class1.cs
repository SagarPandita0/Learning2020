using Microsoft.EntityFrameworkCore;
using PatientLibrary;
using System;

namespace HospitalRepository
{
    
        public class HospitalDbContext : DbContext
        {
            
        public HospitalDbContext(DbContextOptions<HospitalDbContext> options): base(options)
        {

        }


            // mapping inherits from DbContext
            protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
                modelBuilder.Entity<Patient>()
                        .ToTable("tblPatient");
                modelBuilder.Entity<Problem>()
                        .ToTable("tblProblems");
                modelBuilder.Entity<Treatment>()
                        .ToTable("tblTreatMents");

            }
            public DbSet<Patient> patients { get; set; }
        }
    
}
