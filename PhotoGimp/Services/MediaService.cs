using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Server.Kestrel.Http;
using Microsoft.Extensions.Configuration;
using PhotoGimp.Models;
using PhotoGimp.Repositories;

namespace PhotoGimp.Services
{
    public class MediaService
    {
        private readonly PhotoRepository _photoRepo;
        private readonly IHostingEnvironment _env;
        private readonly string _thumbFolder;
        private readonly string _imageFolder;

        public MediaService(IConfiguration config, PhotoRepository photoRepo, IHostingEnvironment env)
        {
            _photoRepo = photoRepo;
            _env = env;
            _thumbFolder = config["thumbpath"];
            _imageFolder = config["photoFolder"];
        }

        public void Update()
        {

            // get folders from directory tree.
            var folderScanner = new FolderScanner();
            var folders = folderScanner.Scan(_imageFolder);

            // Get all images from folders.
            var imageScanner = new ImageScanner();
            IEnumerable<Photo> photoCollection = imageScanner.Scan(folders);

            // Create thumb and store photos in database.
            foreach (var photo in photoCollection)
            {
                if (_photoRepo.Exist(photo.FullFileName))
                    continue;

                var factory = new ImageFactory(photo.FullFileName, _env);
                string message;
                photo.ThumbFile = factory.CreateThumbImage(_thumbFolder, out message);

                if (!string.IsNullOrEmpty(photo.ThumbFile))
                    _photoRepo.Add(photo);
            }

            _photoRepo.Commit();


        }
    }
}