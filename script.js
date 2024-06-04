async function getCategoriesData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Something went wrong:', error);
      console.log('something went wrong');
    }
  }
  
  async function getIngredientData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Something went wrong:', error);
      console.log('something went wrong');
    }
  }
  
  document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
  document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);
  