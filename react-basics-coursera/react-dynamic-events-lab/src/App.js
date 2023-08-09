  
function App() {
  const handleClick= () => {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum)
    let userInput = prompt('type a number');
    var lose = console.log(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    var win = console.log(`Congratulations!! The Computer number was: ${randomNum}`);
    (randomNum == userInput) ? lose : win ;
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
