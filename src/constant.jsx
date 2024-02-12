export const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const YOUTUBE_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;

export const tags = [
  "All",
  "News",
  "Music",
  "Anime",
  "Manga",
  "Gaming",
  "Romance",
  "Thriller",
  "Comedy",
  "Horror",
  "Cricket",
  "Soccer",
  "Freestyle",
];
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;
export const CHANNEL_IMG_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;
export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=" +
  API_KEY +
  "&videoId=";
export const SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
export const VIDEO_RECOMMENDATIONS_API = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${API_KEY}&channelId=`;
