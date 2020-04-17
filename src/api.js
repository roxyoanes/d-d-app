export const dndApi = async (category) => {
  try{
    const response = await fetch (
      `http://dnd5eapi.co/api/${category}/`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}