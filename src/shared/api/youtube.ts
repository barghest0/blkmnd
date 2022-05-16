import axios from 'axios';

const youtubeKey = 'AIzaSyDWxi5JwVAyDQx00GZR8XpYR3FFGCLYG8g';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});

const fetchChannelContent = (userId: string) =>
  instance.get(`channels?part=statistics&id=${userId}&key=${youtubeKey}`);

const fetchChannelVideo = (videoId: string) =>
  instance.get(`videos?part=player&id=${videoId}&key=${youtubeKey}`);

export { fetchChannelContent, fetchChannelVideo };
