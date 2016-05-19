using System;
using System.IO;
using System.Text.RegularExpressions;
using ImageMagick;

namespace PhotoGimp.Services
{
    public class ImageConverter
    {
        private readonly string _imageFile;

        public ImageConverter(string imageFile)
        {
            _imageFile = imageFile;
        }

        public byte[] Medium()
        {
            try
            {
                byte[] result;
                using (MagickImage image = new MagickImage(_imageFile))
                {
                    using (var ms = new MemoryStream())
                    {

                        image.Quality = 80;
                        image.Resize(new MagickGeometry(1600));
                        result = image.ToByteArray();
                    }

                }
                return result;
            }
            catch (Exception ex)
            {

                return null;
            }


            
        }
    }
}