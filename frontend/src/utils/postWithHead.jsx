import axios from 'axios';

function PostWithHead(key, data, accessToken) {
    const baseURL="http://127.0.0.1:8080/";

    let thirdArg={
        headers:{
          "Authorization":"JWT "+accessToken,
          'Content-Type': 'application/json'
        }
      }
      console.log(baseURL+key);
      console.log(data);
      console.log(thirdArg);
  return (
      
    accessToken? axios.post(
        baseURL+key,data,thirdArg): axios.post(baseURL+key,data)
  )
}

export default PostWithHead;