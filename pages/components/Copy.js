'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
const Copy = ({text}) => {
const copy=(TEXT)=>{
    navigator.clipboard.writeText(TEXT);
}
return <>
    <button onClick={()=>copy(text)}>
    <FontAwesomeIcon icon={faCopy} fade/>
    </button>
    <style jsx>{`
     button{
        font-size:2em;
        cursor:pointer;
     }
    `}</style>
    </>
};

export default Copy;
