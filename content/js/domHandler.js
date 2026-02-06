export const generatePlaylist = (songs) => {
  let html = '';
  songs.forEach((song) => {
    html += `
        <article class="song-card">
        <h3>${song.id} ${song.title}</h3>
        <p>${song.artist}</p><p class="genre"${song.genre}</p>
        </article>`;
  });
  return html;
};
