import { platforms } from '../assets/images'

function Links({ links }) {


  return <div>
    {Object.entries(links).map(([platform, link]) => (
      <a
        key={platform}
        href={link}
        className="play-on"
      >
        <div
          className="platform-logo-con"
          style={{ backgroundImage: `url("${platforms[platform]}")` }}
        ></div>
        Play on {platform}
      </a>
    ))}
  </div>
}

export default Links
