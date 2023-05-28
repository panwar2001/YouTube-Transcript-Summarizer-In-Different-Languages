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
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={opts}
/>
)
}
export default YoutubeVideo;