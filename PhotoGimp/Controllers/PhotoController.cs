using Microsoft.AspNet.Mvc;
using Microsoft.Net.Http.Headers;
using PhotoGimp.Repositories;
using PhotoGimp.Services;

namespace PhotoGimp.Controllers
{
    public class PhotoController : Controller
    {
        private readonly PhotoRepository _repo;

        public PhotoController(PhotoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("photo/{id}")]
        public FileContentResult Get(int id)
        {
            var photo = _repo.GetById(id);

            var imageConverter = new ImageConverter(photo.FullFileName);
            var convertedImage = imageConverter.Medium();
            return new FileContentResult(convertedImage, "image/jpeg");
        }
    }
}