﻿// <auto-generated />
using System;
using HospitalRepository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HospitalRepository.Migrations
{
    [DbContext(typeof(HospitalDbContext))]
    partial class HospitalDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PatientLibrary.Patient", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("tblPatient");
                });

            modelBuilder.Entity("PatientLibrary.Problem", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Patientid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Patientid");

                    b.ToTable("tblProblems");
                });

            modelBuilder.Entity("PatientLibrary.Treatment", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Dosage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Problemid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("Problemid");

                    b.ToTable("tblTreatMents");
                });

            modelBuilder.Entity("PatientLibrary.Problem", b =>
                {
                    b.HasOne("PatientLibrary.Patient", null)
                        .WithMany("Problems")
                        .HasForeignKey("Patientid");
                });

            modelBuilder.Entity("PatientLibrary.Treatment", b =>
                {
                    b.HasOne("PatientLibrary.Problem", null)
                        .WithMany("Treatment")
                        .HasForeignKey("Problemid");
                });
#pragma warning restore 612, 618
        }
    }
}
