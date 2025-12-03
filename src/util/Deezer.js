const Deezer = {
  search(term) {
    const encodedTerm = encodeURIComponent(term);
    const proxyUrl = 'https://corsproxy.io/?';
    const deezerUrl = `https://api.deezer.com/search?q=${encodedTerm}`;

    return fetch(`${proxyUrl}${deezerUrl}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('API hiba');
        }
        return response.json();
      })
      .then(jsonResponse => {
        if (!jsonResponse.data) {
          return [];
        }
        return jsonResponse.data.map(track => ({
          id: track.id,
          name: track.title,
          artist: track.artist.name,
          album: track.album.title,
          uri: track.link
        }));
      })
      .catch(error => {
        console.error('Deezer API hiba:', error);
        return [];
      });
  }
};

export default Deezer;
