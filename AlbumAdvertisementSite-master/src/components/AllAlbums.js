import { SelectedAlbumContext, useContext } from '../contexts/SelectedAlbumContext'

function AllAlbums() {
  const { selected, setSelected, albums } = useContext(SelectedAlbumContext)

  return <div id="all-albums">
    <div id="see-all">
      See all albums
    </div>
    <div id="album-selector">
      {albums.map((album, i) => (
        <button
          key={i}
          onClick={() => {
            setSelected(i)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className={selected === i ? "current-album" : null}
        >
          <div className="all-cover"
            style={{ backgroundImage: `url("${album.cover}")` }}></div>
          {album.title}
        </button>
      ))}
    </div>
  </div>
}

export default AllAlbums
