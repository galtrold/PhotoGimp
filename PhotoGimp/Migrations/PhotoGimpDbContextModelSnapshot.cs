using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using PhotoGimp.Repositories;

namespace PhotoGimp.Migrations
{
    [DbContext(typeof(PhotoGimpDbContext))]
    partial class PhotoGimpDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PhotoGimp.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileName");

                    b.Property<string>("FullFileName");

                    b.Property<string>("ThumbFile");

                    b.HasKey("Id");
                });
        }
    }
}
