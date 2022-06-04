import { useEffect, useState } from 'react';

import { fetchChannelContent, fetchChannelVideo } from 'shared/api/youtube';

type ChannelInfo = {
  subscriberCount: number;
  viewsCount: number;
  videoCount: number;
};

type Props = {
  user: string;
  video: string;
};

const useChannelContent = ({ user, video }: Props) => {
  const defaultChannelInfo = {
    subscriberCount: 0,
    viewCount: 0,
    videoCount: 0,
  };

  const [channelContent, setChannelContent] = useState(defaultChannelInfo);
  const [channelVideo, setChannelVideo] = useState('');

  const getChannelContent = async () => {
    const content = await fetchChannelContent(user);
    const videoContent = await fetchChannelVideo(video);

    setChannelContent(content.data.items[0].statistics);
    setChannelVideo(videoContent.data.items[0].player.embedHtml);
  };

  useEffect(() => {
    getChannelContent();
  }, []);

  return { channelContent, channelVideo };
};

export { ChannelInfo };
export default useChannelContent;
