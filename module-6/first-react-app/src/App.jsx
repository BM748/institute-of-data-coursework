import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Address.jsx"
import "./MovieList.jsx"
import MoviesList from './MovieList.jsx'
import EmojiChanger from './Emoji'
import BigCats from './BigCats'
import Calculator from './Calculator'
import ActivityFinder from './Example1'
import ActivityFinder2 from './Example2'
import { MoodProvider } from './EmojiContext'
import BitcoinRates from './BitcoinRates'
import DisplayMood from './DisplayMood'

//function App() {
  //const [count, setCount] = useState(0)

  //return (
    //<>
      //<div>
        //<a href="https://vitejs.dev" target="_blank">
          //<img src={viteLogo} className="logo" alt="Vite logo" />
        //</a>
        //<a href="https://react.dev" target="_blank">
          //<img src={reactLogo} className="logo react" alt="React logo" />
        //</a>
      //</div>
      //<h1>Vite + React</h1>
      //<div className="card">
        //<button onClick={() => setCount((count) => count + 1)}>
        //  count is {count}
        //</button>
        //<p>
          //Edit <code>src/App.jsx</code> and save to test HMR
        //</p>
      //</div>
      //<p className="read-the-docs">
        //Click on the Vite and React logos to learn more
      //</p>
    //</>
  //)
//}

function App(){
  return (
    <div className='App'>
      <h1> Excerise </h1>

      <MoodProvider>
        <BitcoinRates/>
        <DisplayMood/>
      </MoodProvider>

      <ActivityFinder2/>
    </div>
  );
}



export default App
