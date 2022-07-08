export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}; 

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
                              // .then(response => response.json())
                              // .then(response => console.log(response))
                              // .catch(err => console.error(err));

    //we are using fetch instead of axios , so we need to extract the data from "response"
    const data = await response.json();
    return data;
}