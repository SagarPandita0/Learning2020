using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalRepository.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblPatient",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblPatient", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "tblProblems",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Patientid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblProblems", x => x.id);
                    table.ForeignKey(
                        name: "FK_tblProblems_tblPatient_Patientid",
                        column: x => x.Patientid,
                        principalTable: "tblPatient",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tblTreatMents",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Dosage = table.Column<string>(nullable: true),
                    Problemid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblTreatMents", x => x.id);
                    table.ForeignKey(
                        name: "FK_tblTreatMents_tblProblems_Problemid",
                        column: x => x.Problemid,
                        principalTable: "tblProblems",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblProblems_Patientid",
                table: "tblProblems",
                column: "Patientid");

            migrationBuilder.CreateIndex(
                name: "IX_tblTreatMents_Problemid",
                table: "tblTreatMents",
                column: "Problemid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblTreatMents");

            migrationBuilder.DropTable(
                name: "tblProblems");

            migrationBuilder.DropTable(
                name: "tblPatient");
        }
    }
}
