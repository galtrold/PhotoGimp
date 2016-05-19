using System.Collections.Generic;
using System.IO;

namespace PhotoGimp.Services
{
    public class FolderScanner
    {
        public IEnumerable<string> Scan(string rootPath)
        {
            var subFolders = Directory.GetDirectories(rootPath, "*", SearchOption.AllDirectories);
            var folders = new List<string>();
            folders.Add(rootPath);
            folders.AddRange(subFolders);
            return folders;
        }
    }
}