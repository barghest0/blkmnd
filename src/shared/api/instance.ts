import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const newInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

const youtubeInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export { newInstance, instance, youtubeInstance };
