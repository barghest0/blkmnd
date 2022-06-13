import { CartProduct } from 'redux/cart/types';
import { SoundKit } from 'redux/soundKits/types';
import { User } from 'redux/user/types';
import { Beat, Comment } from 'reduxStore/beats/types';

const mockBeat = {
  id: 1,
  title: 'Future Mask off type beat',
  type: 'beat',
  price: 33,
  tags: [
    {
      id: 1,
      name: 'future',
    },
    {
      id: 2,
      name: 'mask off',
    },
  ],
  bpm: 155,
  date: '01.02.2021',
  time: '02:12',
  chord: 'Em',
  musician: {
    id: 1,
    name: 'musician',
  },
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        username: 'someone',
        password: 'asdkglasdjklfgasdkjfajkdfhg1245ko25k2l4kjw2',
        role: 'user',
      },
      text: 'any text',
      date: '01.02.2021',
    },
    {
      user: {
        id: 1251,
        username: 'someone',
        password: 'asdgasdfjk3k4j23',
        role: 'user',
      },
      text: 'asd',
      date: '05.23.2022',
    },
    {
      user: {
        id: 1251,
        username: 'someone',
        password: 'asdgasdfjk3k4j23',
        role: 'user',
      },
      text: 'asdasdasd',
      date: '05.23.2022',
    },
    {
      user: {
        id: 1251,
        username: 'someone',
        password: 'asdgasdfjk3k4j23',
        role: 'user',
      },
      text: 'фыв',
      date: '05.23.2022',
    },
  ],
  image:
    'https://main.v2.beatstars.com/fit-in/tracks/300x300/filters:format(.jpeg):quality(50):fill(000000)/users/prod/1062484/imrtgldf1.png',
  track:
    'https://main.v2.beatstars.com/stream?id=10319536&return=audio&timestamp=1652727289&cf=true',
  excerpt:
    'https://main.v2.beatstars.com/stream?id=10319536&return=audio&timestamp=1652727289&cf=true',
  featured: true,
  licenses: [
    {
      id: 1,
      name: 'Basic',
      price: 33,
      fileTypes: [
        {
          id: 1,
          name: 'MP3',
        },
      ],
      contractValues: {
        copies: 2000,
        radioStations: 2,
        musicVideo: 1,
        streams: 500000,
      },
    },
    {
      id: 2,
      name: 'Premium',
      price: 55,
      fileTypes: [
        {
          id: 1,
          name: 'MP3',
        },
        {
          id: 2,
          name: 'WAV',
        },
      ],
      contractValues: {
        copies: 3000,
        radioStations: 2,
        musicVideo: 1,
        streams: 500000,
      },
    },
    {
      id: 3,
      name: 'Premium plus',
      price: 111,
      fileTypes: [
        {
          id: 1,
          name: 'MP3',
        },
        {
          id: 2,
          name: 'WAV',
        },
        {
          id: 3,
          name: 'TRACK STEMS',
        },
      ],
      contractValues: {
        copies: 10000,
        radioStations: 2,
        musicVideo: 1,
        streams: 500000,
      },
    },
    {
      id: 4,
      name: 'Unlimited',
      price: 333,
      fileTypes: [
        {
          id: 1,
          name: 'MP3',
        },
        {
          id: 2,
          name: 'WAV',
        },
        {
          id: 3,
          name: 'TRACK STEMS',
        },
      ],
      contractValues: {
        copies: 'Unlimited',
        radioStations: 2,
        musicVideo: 1,
        streams: 500000,
      },
    },
    {
      id: 5,
      name: 'Exclusive',
      price: 1111,
      fileTypes: [
        {
          id: 1,
          name: 'MP3',
        },
        {
          id: 2,
          name: 'WAV',
        },
        {
          id: 3,
          name: 'TRACK STEMS',
        },
      ],
      contractValues: {
        copies: 'Unlimited',
        radioStations: 'Unlimited',
        musicVideo: 'Unlimited',
        streams: 'Unlimited',
      },
    },
  ],
} as Beat;

const mockCartProduct = {
  license: {
    id: 4,
    name: 'Unlimited',
    price: 333,
    fileTypes: [
      {
        id: 1,
        name: 'MP3',
      },
      {
        id: 2,
        name: 'WAV',
      },
      {
        id: 3,
        name: 'TRACK STEMS',
      },
    ],
    contractValues: {
      copies: 'Unlimited',
      radioStations: 2,
      musicVideo: 1,
      streams: 500000,
    },
  },
  details: {
    id: 1,
    title: 'Future Mask off type beat',
    type: 'beat',
    price: 33,
    tags: [
      {
        id: 1,
        name: 'future',
      },
      {
        id: 2,
        name: 'mask off',
      },
    ],
    bpm: 155,
    date: '01.02.2021',
    time: '02:12',
    chord: 'Em',
    musician: {
      id: 1,
      name: 'musician',
    },
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          username: 'someone',
          password: 'asdkglasdjklfgasdkjfajkdfhg1245ko25k2l4kjw2',
          role: 'user',
        },
        text: 'any text',
        date: '01.02.2021',
      },
      {
        user: {
          id: 1251,
          username: 'someone',
          password: 'asdgasdfjk3k4j23',
          role: 'user',
        },
        text: 'asd',
        date: '05.23.2022',
      },
      {
        user: {
          id: 1251,
          username: 'someone',
          password: 'asdgasdfjk3k4j23',
          role: 'user',
        },
        text: 'asdasdasd',
        date: '05.23.2022',
      },
      {
        user: {
          id: 1251,
          username: 'someone',
          password: 'asdgasdfjk3k4j23',
          role: 'user',
        },
        text: 'фыв',
        date: '05.23.2022',
      },
    ],
    image:
      'https://main.v2.beatstars.com/fit-in/tracks/300x300/filters:format(.jpeg):quality(50):fill(000000)/users/prod/1062484/imrtgldf1.png',
    track:
      'https://main.v2.beatstars.com/stream?id=10319536&return=audio&timestamp=1652727289&cf=true',
    excerpt:
      'https://main.v2.beatstars.com/stream?id=10319536&return=audio&timestamp=1652727289&cf=true',
    featured: true,
    licenses: [
      {
        id: 1,
        name: 'Basic',
        price: 33,
        fileTypes: [
          {
            id: 1,
            name: 'MP3',
          },
        ],
        contractValues: {
          copies: 2000,
          radioStations: 2,
          musicVideo: 1,
          streams: 500000,
        },
      },
      {
        id: 2,
        name: 'Premium',
        price: 55,
        fileTypes: [
          {
            id: 1,
            name: 'MP3',
          },
          {
            id: 2,
            name: 'WAV',
          },
        ],
        contractValues: {
          copies: 3000,
          radioStations: 2,
          musicVideo: 1,
          streams: 500000,
        },
      },
      {
        id: 3,
        name: 'Premium plus',
        price: 111,
        fileTypes: [
          {
            id: 1,
            name: 'MP3',
          },
          {
            id: 2,
            name: 'WAV',
          },
          {
            id: 3,
            name: 'TRACK STEMS',
          },
        ],
        contractValues: {
          copies: 10000,
          radioStations: 2,
          musicVideo: 1,
          streams: 500000,
        },
      },
      {
        id: 4,
        name: 'Unlimited',
        price: 333,
        fileTypes: [
          {
            id: 1,
            name: 'MP3',
          },
          {
            id: 2,
            name: 'WAV',
          },
          {
            id: 3,
            name: 'TRACK STEMS',
          },
        ],
        contractValues: {
          copies: 'Unlimited',
          radioStations: 2,
          musicVideo: 1,
          streams: 500000,
        },
      },
      {
        id: 5,
        name: 'Exclusive',
        price: 1111,
        fileTypes: [
          {
            id: 1,
            name: 'MP3',
          },
          {
            id: 2,
            name: 'WAV',
          },
          {
            id: 3,
            name: 'TRACK STEMS',
          },
        ],
        contractValues: {
          copies: 'Unlimited',
          radioStations: 'Unlimited',
          musicVideo: 'Unlimited',
          streams: 'Unlimited',
        },
      },
    ],
  },
  price: 333,
  id: 1,
} as CartProduct;

const mockLicense = {
  id: 1,
  name: 'Basic',
  price: 33,
  fileTypes: [
    {
      id: 1,
      name: 'MP3',
    },
  ],
  contractValues: {
    copies: 2000,
    radioStations: 2,
    musicVideo: 1,
    streams: 500000,
  },
};

const mockCollab = {
  id: 1,
  type: 'collab',
  title: 'Beat Collabs',
  price: 29.99,
  description: 'something description',
  image:
    'https://main.v2.beatstars.com/fit-in/services/800x800/filters:format(.jpeg):quality(50):fill(000000)//users/prod/1062484/imrtgzyv4.jpg',
};

const mockComment = {
  user: {
    id: 1,
    username: 'someone',
    password: '123',
    role: 'user',
  },
  text: 'text',
  date: '05.23.2022',
} as Comment;

const mockSoundKit = {
  id: 1,
  type: 'sound-kit',
  title: 'BLACK NOVEMBER MIDI MELODY PACK',
  description: 'something description',
  image:
    'https://main.v2.beatstars.com/fit-in/soundkits/600x600/filters:format(.jpeg):quality(50):fill(000000)/users/prod/1062484/image/1638287755/black-november.jpg',
  price: 0,
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        username: 'someone',
        password: 'asdkglasdjklfgasdkjfajkdfhg1245ko25k2l4kjw2',
        role: 'user',
      },
      text: 'any text',
      date: '01.02.2021',
    },
  ],
} as SoundKit;

const mockTag = {
  id: 1,
  name: 'future',
};

const mockUser = {
  id: 1,
  username: 'user',
  password: 'adsfjkfg2jelowkgjk%Q@$@42k5j3',
  role: 'user',
} as User;

const mockMembership = {
  id: 1,
  title: 'beat downloads',
  price: 25,
  details: 'details',
};

export {
  mockBeat,
  mockCartProduct,
  mockLicense,
  mockCollab,
  mockComment,
  mockSoundKit,
  mockTag,
  mockUser,
  mockMembership
};
