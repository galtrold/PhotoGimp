using System;
using System.Text.RegularExpressions;
using ImageMagick;
using Microsoft.AspNet.Hosting;

namespace PhotoGimp.Services
{
    public class ImageFactory
    {
        private readonly string _imageFile;
        private readonly IHostingEnvironment _env;

        public ImageFactory(string imageFile, IHostingEnvironment env)
        {
            _imageFile = imageFile;
            _env = env;
        }

        public string CreateThumbImage(string thumbFolder, out string message)
        {
            try
            {
                using (MagickImage image = new MagickImage(_imageFile))
                {
                    // Retrieve the exif information
                    var profile = image.GetExifProfile();

                    // Create thumbnail from exif information
                    using (MagickImage thumbnail = profile.CreateThumbnail())
                    {
                        var regex = new Regex("\\.\\w+$");
                        var match = regex.Match(_imageFile);
                        var fileExtension = match.Value;

                        var thumbSize = CalcScale(image.Width, image.Height);
                        thumbnail.Scale(new MagickGeometry(0, 200));

                        // Check if exif profile contains thumbnail and save it
                        var newId = Guid.NewGuid();
                        var thumbFilePath = $"/{thumbFolder}/{newId}.thumb{fileExtension}";
                        thumbnail?.Write($"{_env.WebRootPath}\\{thumbFolder}\\{newId}.thumb{fileExtension}");
                        message = "Success";
                        return thumbFilePath;
                    }
                }

            }
            catch (Exception ex)
            {
                message = ex.Message;
                return string.Empty;
            }
        }

        private Size CalcScale(int width, int height)
        {
            var vSize = 200;
            var hSize = 280;

            var thumbSize = height > width ? new Size(width / (height / vSize), vSize) : new Size(hSize, height / (width / hSize));
            return thumbSize;
        }

    }

    internal struct Size
    {
        public Size(int width, int height)
        {
            Width = width;
            Height = height;
        }

        public int Width { get; set; }
        public int Height { get; set; }
    }
}