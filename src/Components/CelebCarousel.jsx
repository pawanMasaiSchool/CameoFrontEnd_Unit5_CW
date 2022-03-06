import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import VideoPlayer from './VideoPlayer'
const CelebCarousel = ({videos}) => {
  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;
  return (
    <div>
      <Carousel emulateTouch={true} renderItem={customRenderItem}>
        <VideoPlayer url={videos.intro}/>
        {videos.birthdayCelebration.map(item=>{
            return <VideoPlayer url={item}/>
        })}
        {videos.pepTalk.map(item=>{
            return <VideoPlayer url={item}/>
        })}
      </Carousel>
    </div>
  )
}

export default CelebCarousel