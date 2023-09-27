import './index.css'
import { useEffect, useState } from 'react'
import { SelectedAlbumContext } from './contexts/SelectedAlbumContext'
import AlbumInfo from './components/AlbumInfo'
import AllAlbums from './components/AllAlbums'
import Links from './components/Links'
import Footer from './components/Footer'
import albums from './albumData'

function App() {

  const [selected, setSelected] = useState(0)

  const contextData = {
    selected,
    setSelected,
    albums
  }

  useEffect(() => {
    document.getElementById("background").style.backgroundImage = `url("${albums[selected].cover}")`
  }, [selected])

  return <SelectedAlbumContext.Provider value={contextData}>
    <div id="background"></div>
    <div id="master-con">
      <AlbumInfo props={albums[selected]} />
      <Links links={albums[selected].links} />
      <AllAlbums />
      <Footer />
    </div>
  </SelectedAlbumContext.Provider >
}

export default App
