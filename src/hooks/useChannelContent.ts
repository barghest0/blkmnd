import { useEffect, useState } from 'react';
import { fetchChannelContent } from '../shared/api/youtube';

const useChannelContent = () => {
  const [channel, setChannel] = useState({});

  const getChannelContent = async () => {
    const channelContent = await fetchChannelContent();
    setChannel(channelContent.data.items[0].statistics);
  };

  useEffect(() => {
    getChannelContent();
  }, []);

  return channel;
};

export default useChannelContent;
