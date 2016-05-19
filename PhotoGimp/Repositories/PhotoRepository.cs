using System.Collections.Generic;
using System.Linq;
using PhotoGimp.Models;

namespace PhotoGimp.Repositories
{
    public class PhotoRepository
    {
        private readonly PhotoGimpDbContext _dbContext;

        public PhotoRepository(PhotoGimpDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Photo> Get(int take, int skip)
        {
            
            var photoQuery = _dbContext.Photos.Skip(skip).Take(take);
            return photoQuery.ToList();
        }

        public void Add(Photo photo)
        {
            _dbContext.Photos.Add(photo);
        }

        public int Commit()
        {
            var saveChanges = _dbContext.SaveChanges();
            return saveChanges;
        }

        public bool Exist(string filePath)
        {
            return _dbContext.Photos.Any(p => p.FullFileName.Equals(filePath));
        }

        public Photo GetById(int id)
        {
            var photo = _dbContext.Photos.FirstOrDefault(p => p.Id == id);
            return photo;
            
        }
    }
}