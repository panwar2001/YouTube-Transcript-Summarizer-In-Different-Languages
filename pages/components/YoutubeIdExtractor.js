const YouTubeIdExtractor=(link)=>{
//here youtube id is extracted from url like https://www.youtube.com/embed/id 
let right=link.length,left=right,id='';
//find left pointer to starting of id and right pointer to end of id.
if(right>=15&&link[right-6]==='=')right=right-15;
else right=right-1;
while(left>=0&&link[left]!='/'&&link[left]!='=')left--;
left++;
//extract the id from left pointer to right pointer
while(left<=right)id+=link[left++];
return id;
}
export default YouTubeIdExtractor;