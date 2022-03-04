import ReactPlayer from 'react-player'
export default function VideoPlayer({ url, isSelected }){
    return(
        <div>
          <ReactPlayer
            url={url}
            width='100%'
            playing={isSelected}
            controls
            height='520px'
          />
        </div>
    )
}