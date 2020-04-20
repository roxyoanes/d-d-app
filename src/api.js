export const dndApi = async (category) => {
  try{
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const response = await fetch (
      `${nocors}http://dnd5eapi.co/api/${category}`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}

export const descriptionApi = async (category, option) => {
  try{
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const secondResponse = await fetch (
      `${nocors}http://dnd5eapi.co/api/${category}/${option}`
    );
    const dataDescription = await secondResponse.json();
    return dataDescription;
  } catch(error){
    throw error;
  }
}