#Flask is a micro web framework written in Python.
from flask import Flask,request,jsonify #request is global server object
import transcriptSummarizer
from googletrans import Translator
translator = Translator()
# flask extension for handling cross origin resource sharing(CORS), making cross origin possible
from flask_cors import CORS
app=Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type' #configuring cors headers to content type

@app.route('/getSummary',methods=['POST'])
def summary():
    transcript = request.json['transcript']
    lang= request.json['lang']
    summary=transcriptSummarizer.summarize(transcript,0.5)
    origSummary=translator.translate(summary,dest=lang)
    response=jsonify({'origSummary':origSummary.text,'summary': summary})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return  response  #return json of summary to frontend

if __name__=='__main__':
    app.run(debug=True) #to start flask application
