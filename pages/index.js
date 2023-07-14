import Head from 'next/head'
import Home from './components/Home'
import Copy from './components/Copy'
export default function Index() {
  const examples={
    backgroundColor:'grey',
    width:'40%'
  }  
  return (<>
      <Head>
        <title>Youtube Transcript Summarizer</title>
        <meta name="viewport" content="width=device-width, initial-scale=.9,minimum-scale=1.0,user-scalable=1" />
        <link rel="icon" href="/youtube.svg" />
      </Head>
      <main >
         <Home/>
         <h2>Examples:</h2><br/>
         <div style={examples}>            
            <Copy text={'https://www.youtube.com/watch?v=_p1hJg0D5QE'}/>
             <strong>Japanese-https://www.youtube.com/watch?v=_p1hJg0D5QE</strong>
         </div>
         <div style={examples}>            
            <Copy text={'https://www.youtube.com/watch?v=hr7XNl6UqLw'}/>
             <strong>Hindi-https://www.youtube.com/watch?v=hr7XNl6UqLw</strong>
         </div>
         <div style={examples}>            
            <Copy text={'https://www.youtube.com/watch?v=H14bBuluwB8'}/>
             <strong>English-https://www.youtube.com/watch?v=H14bBuluwB8</strong>
         </div>
         <div style={examples}>            
            <Copy text={'https://www.youtube.com/watch?v=NiKtZgImdlY'}/>
             <strong>French-https://www.youtube.com/watch?v=NiKtZgImdlY</strong>
         </div>
         <div style={examples}>            
            <Copy text={'https://www.youtube.com/watch?v=xbX3NOiRX_w'}/>
             <strong>Spanish-https://www.youtube.com/watch?v=xbX3NOiRX_w</strong>
         </div>         
      </main>
    </>
  )
}
