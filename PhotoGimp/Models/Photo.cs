using Newtonsoft.Json;

namespace PhotoGimp.Models
{
    public class Photo
    {
        public int Id { get; set; }
        [JsonIgnore]
        public string FullFileName { get; set; }
        [JsonIgnore]
        public string FileName { get; set; }
        public string ThumbFile { get; set; }
    }
}