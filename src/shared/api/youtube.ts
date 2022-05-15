import axios from 'axios';

const youtubeKey = 'AIzaSyDWxi5JwVAyDQx00GZR8XpYR3FFGCLYG8g';

const youtubeUser = 'UCpi4NSNZrV3oBtgpdaEGeyw';

const fetchChannelContent = () =>
  axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`,
  );

export { fetchChannelContent };
