const YoutubeVideo=({videoId})=>{
const opts = {
height: '60vh',
width: '35vw',
paddingTop:'15vh'
}
return (
<iframe
  src={"https://www.youtube.com/embed/" + videoId}
  title="Youtube video"
  frameBorder="0"
  allowFullScreen
  style={opts}
/>
)
}
export default YoutubeVideo;