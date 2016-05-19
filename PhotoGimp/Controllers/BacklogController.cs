using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.ModelBinding;
using PhotoGimp.Models;
using PhotoGimp.Repositories;
using PhotoGimp.Services;

namespace PhotoGimp.Controllers
{
    public class BacklogController :Controller
    {
        private readonly PhotoRepository _photoRepo;
        private readonly MediaService _mediaService;

        public BacklogController(PhotoRepository photoRepo, MediaService mediaService)
        {
            _photoRepo = photoRepo;
            _mediaService = mediaService;
        }

        [HttpGet]
        public IEnumerable<Photo> Index()
        {
            
            var photoList = _photoRepo.Get(100, 0);
            return photoList;
        }


        [HttpPut]
        public void Update()
        {
            _mediaService.Update();
        }
        
    }
}