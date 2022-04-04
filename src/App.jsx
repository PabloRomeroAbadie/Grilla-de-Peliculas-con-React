import Moviesgrid from "./Moviesgrid";
import styles from "./App.module.css"

function App() {
 return (
  <div>
   <header>
    <h1 className={styles.title}>Movies</h1>
   </header>
   <main>
    <ul>
     <Moviesgrid></Moviesgrid>
    </ul>
   </main>
  </div>
 )
}

export default App;