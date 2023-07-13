import Transcript from "./Transcript";
import Summary from "./Summary";
import YoutubeVideo from "./YoutubeVideo";
import { useState } from "react";
import YouTubeIdExtractor from "./YoutubeIdExtractor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import axios from "axios";
const Home=()=>{
    const [videoId,setVideoId]=useState('');
    const [link,setLink]=useState('');
    const [transcript,setTranscript]=useState('');
    const [engTranscript,setEngTranscript]=useState('');
    const [summary,setSummary]=useState('');
    const [engSummary,setEngSummary]=useState('');
    const displayFlex={
        display:'flex',
        justifyContent:'space-between'
    };
    const Input={
        fontSize:'2em',
        outline:'none',
        border:'0px'
    }
    const search={
      border:'1px solid black'
    }
    const handleClick= ()=>{
    setVideoId(YouTubeIdExtractor(link));
    axios.post('http://localhost:8080/api/v1/getTranscript',{id:link})
  .then(function (response) {
    setTranscript(response.data.transcript);
    setEngTranscript(response.data.engTranscript);
    axios.post('http://127.0.0.1:5000/getSummary',{lang:response.data.lang,transcript:response.data.engTranscript}).then((res)=>{
     setSummary(res.data.origSummary);
     setEngSummary(res.data.summary);  
     console.log('orig summary: ',res.data.origSummary);
     console.log('\neng summary: ',res.data.summary);
    });
  })
  .catch(function (error) {
    console.log(error);
  })
 }
 return <>
 <div style={displayFlex}>
<div>
<div style={search}>
<Image src="/youtube.svg" height={35} width={50} alt="youtube svg"/>
 <input onChange={(e)=>{setLink(e.target.value)}} style={Input} placeholder="Enter youtube link here ..."/>
 <button onClick={()=>{handleClick()}}>
 <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-3x"/>
 </button>
 </div>
 <YoutubeVideo videoId={videoId}/>
 </div>
 <Transcript transcript={transcript} engTranscript={engTranscript}/>
 <Summary summary={summary} engSummary={engSummary}/>
 </div>
 </>
}
export default Home;