let tweets = [
  {
    id: '1',
    text: '우리 모두 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
  },
  {
    id: '2',
    text: '우리 모두 화이팅!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'ellie',
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets.filter((t) => t.id !== id);
}
