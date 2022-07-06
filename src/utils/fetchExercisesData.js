export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

export const fetchExercisesData = async(url, options) => {
    const response = await fetch(url, options);

    //we are using fetch instead of axios , so we need to extract the data from "response"
    const data = await response.json();
    return data;
}