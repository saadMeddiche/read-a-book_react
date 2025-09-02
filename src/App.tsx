import './App.css'

function App() {

  let degree = 0;

  setInterval(() => {
    document.getElementById('app-container')?.style.setProperty('--app-linear-gradient-degree', `${degree}deg`);
    degree++;
  }, 100);

  return (
    <>
      <div className="app-container" id="app-container"></div>
    </>
  )
}

export default App
