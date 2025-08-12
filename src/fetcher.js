const Base_Url = "http://localhost:3001";

export const fetcher = async(url ) =>{
    
   const response= await fetch(Base_Url+ url);
   const responseData = await response.json();
   return responseData;
    

}