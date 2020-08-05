export const userfetch = (username) => {
  return fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
      'User-Agent': 'fetch-api'
    }
  })
    .then(res => res.json())
    .then(({ username, url, avatar_url, followers, following }) => ({
      username,
      url,
      image: avatar_url,
      followers,
      following
    }));
};

export const repositoriesFetch = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
    headers: {
      'User-Agent': 'fetch-api'
    }
  })
    .then(res => res.json())
    .then((repos) => (
      repos.map(({
        id,
        name,
        html_url,
        description,
        created_at,
        updated_at,
        size,
        language
      }) => ({
        id,
        name,
        url: html_url,
        description,
        created_at,
        updated_at,
        size,
        language
      }))
    ));
};
