using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using PhotoGimp.Models;

namespace PhotoGimp.Repositories
{
    public class PhotoGimpDbContext : DbContext
    {
        public PhotoGimpDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Photo> Photos { get; set; }
    }
}