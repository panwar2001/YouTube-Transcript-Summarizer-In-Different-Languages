const YouTubeIdExtractor=(link)=>{
let right=link.length,left=right,id='';
if(right>=15&&link[right-6]==='=')right=right-15;
else right=right-1;
while(left>=0&&link[left]!='/'&&link[left]!='=')left--;
left++;
while(left<=right)id+=link[left++];
return id;
}
export default YouTubeIdExtractor;