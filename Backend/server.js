const express=require('express');
const cors=require('cors')
require('dotenv').config();
const app=express();
app.use(cors({origin: '*'}));
app.use(express.json());
const { YoutubeTranscript } =require('youtube-transcript');
const {translate} = require('@vitalets/google-translate-api');
const PORT=process.env.PORT || 8080;
let SummarizerManager = require("node-summarizer").SummarizerManager;

const getTranscript=async (id)=>{
    const orignalTranscript=await YoutubeTranscript.fetchTranscript(id);
    const len=orignalTranscript.length;
    let transcript='';
    for(let i=0;i<len;i++)
      transcript+=orignalTranscript[i].text;
    return transcript;
}

app.post('/api/v1/getTranscript', (req, res)=>{
    console.log(req.body)
    getTranscript(req.body.id).then(async (transcript)=>{
        const { text } = await translate(transcript, { to: 'en' });
        res.json({transcript:transcript,engTranscript:text});
    }) 
});


app.post('/api/v1/getSummary', async (req, res)=>{
    let Summarizer = new SummarizerManager(req.body.text, 1); 
    let summary = Summarizer.getSummaryByFrequency().summary;
    res.json({summary:summary});
});


app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`);});
