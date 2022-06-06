import { youtubeInstance } from './instance';

const youtubeKey = 'AIzaSyDWxi5JwVAyDQx00GZR8XpYR3FFGCLYG8g';

const fetchChannelContent = (userId: string) => youtubeInstance.get(
  `channels?part=statistics&id=${userId}&key=${youtubeKey}`,
);

const fetchChannelVideo = (videoId: string) => youtubeInstance.get(`videos?part=player&id=${videoId}&key=${youtubeKey}`);

export { fetchChannelContent, fetchChannelVideo };
