const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors({origin: '*'}));
app.use(express.json());
const { YoutubeTranscript } =require('youtube-transcript');
const {translate} = require('@vitalets/google-translate-api');
const PORT=process.env.PORT || 8080;
const getTranscript=async (id)=>{
    const orignalTranscript=await YoutubeTranscript.fetchTranscript(id);
    const len=orignalTranscript.length;
    let transcript='';
    for(let i=0;i<len;i++)
      transcript+=orignalTranscript[i].text+' ';
    return transcript;
}

app.post('/api/v1/getTranscript', (req, res)=>{
    getTranscript(req.body.id).then(async (transcript)=>{
        const {text,raw} = await translate(transcript, { to: 'en',detect:true });
        res.json({lang:raw.src,transcript:transcript,engTranscript:text});
    }) 
});

app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`);});
