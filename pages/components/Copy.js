import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
const Copy = ({text}) => {
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
