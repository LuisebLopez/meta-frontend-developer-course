function DessertsList(props) {
  const lowCaloriesList = props.data
    .filter(list => {
      return list.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories
    })
    .map(list => {
    return <li>{list.name} - {list.calories} cal</li>
    });
  return (
  <ul>
    {lowCaloriesList}
  </ul>
)}

export default DessertsList;
