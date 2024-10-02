export const getCollections = async () => {
  const apiUrl = 'http://localhost:5001/api/collections';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
