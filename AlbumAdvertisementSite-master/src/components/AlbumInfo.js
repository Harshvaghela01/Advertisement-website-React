import { icons } from '../assets/images'

function AlbumInfo({ props }) {

  const { title, artist, year, composer, cover, instruments } = props

  return <div id="album-con">
    <div id="album-cover" style={{ backgroundImage: `url("${cover}")` }}></div>
    <div id="album-info">
      <h1 className="label" id="album-title">{title}</h1>
      <div id="album-details">
        <div className="label" id="album-artist">by {artist}</div>
        <div className="label" id="album-year">published in {year}</div>
        <div className="label" id="album-composer">composed by {composer}</div>
      </div>
    </div>
    <h2>Band members</h2>
    <div id="instruments">
      {Object.entries(instruments).map(([type, player]) => (
        <div key={type}
          style={{ backgroundImage: `url("${icons[type]}")` }}
          className="instrument">
          {player}
        </div>
      ))}
    </div>
  </div>
}

export default AlbumInfo
