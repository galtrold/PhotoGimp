using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using PhotoGimp.Models;

namespace PhotoGimp.Services
{
    public class ImageScanner
    {
        public IEnumerable<Photo> Scan(IEnumerable<string> folders)
        {

            var resultList = new List<Photo>();
            foreach (var folder in folders)
            {
                try
                {
                    var photos = ScanFolder(folder);
                    resultList.AddRange(photos);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                }
                
            }
            return resultList;
        }

        private IEnumerable<Photo> ScanFolder(string folderPath)
        {
            var di = new DirectoryInfo(folderPath);

            var files = di.EnumerateFiles();

            var photos = files.Select(f => new Photo()
            {
                
                FileName = f.Name,
                FullFileName = f.FullName,
            });
            return photos;
        }
    }
}