import Copy from "./Copy";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
const DownloadTextFile = dynamic(() => import('./DownloadTextFile'), {
  ssr: false,
});
const Transcript=({summary,engSummary})=>{
  const [displayTranscript,setDisplayTranscript]=useState(true);
 return (<div className="Box" title="Transcript of the youtube video">
   <h2 >Transcript Summary</h2>
   <nav>
    <div>
      <button className="navButton" onClick={()=>setDisplayTranscript(displayTranscript^true)}>Orignal transcript</button>
      </div>
      <Image src="/youtube.svg" height={50} width={50} alt="youtube svg"/>
      <div>
      <button className="navButton" onClick={()=>setDisplayTranscript(displayTranscript^true)}>English transcript</button>
      </div>
   </nav>
  <div className="co">
     <div className="coin">
      {displayTranscript?summary:engSummary}
     </div>
  </div>
  <nav>
   <DownloadTextFile text={displayTranscript?summary:engSummary}/>   
   <Copy text={displayTranscript?summary:engSummary}/>
   </nav>
  <style jsx>{`
   .Box{
     background: #7338F1;
     height:90vh;
     width:30vw;
     border-radius:5%;
   }
   h2{
    text-align:center;
    font-weight:bold;
    color:white;
    font-family: 'Inter';
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
   }
   .navButton{
    height:10vh;
    width:10vw;
    border-top-left-radius:40%;
    border-top-right-radius:40%;
    background-color:#3F16B6;
    color:white;
    font-size:1em;
    font-weight:bold;
    border-bottom:none;
    cursor:pointer;
   }
   .co{
    background: #3F16B6;
    height:71vh;
    width:30vw;
    margin-top:-1%;
   }
   .coin{
    display:flex;
    position:absolute;
    margin-top:1%;
    margin-left:1%;
    height:65vh;
    width:28vw;
    font-size:2em;
    font-weight:bold;
    overflow-y:scroll;
    background-color:white;
    color:black;
   }
   nav{
    background: #7338F1;
    display:flex;
    justify-content:space-between;
   }
  `}</style>
 </div>)
}
export default Transcript;