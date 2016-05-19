using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace PhotoGimp.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Name", table: "Photo");
            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "Photo",
                nullable: true);
            migrationBuilder.AddColumn<string>(
                name: "FullFileName",
                table: "Photo",
                nullable: true);
            migrationBuilder.AddColumn<string>(
                name: "ThumbFile",
                table: "Photo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "FileName", table: "Photo");
            migrationBuilder.DropColumn(name: "FullFileName", table: "Photo");
            migrationBuilder.DropColumn(name: "ThumbFile", table: "Photo");
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Photo",
                nullable: true);
        }
    }
}
