import './App.css';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import CardList from './pages/CardList'
import CardDetail from './pages/CardDetail';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header></Header> */}
        <div className="content">
        <Switch>
          <Route path="/card/:id">
            <CardDetail></CardDetail>
          </Route>
          <Route path="/card">
            <CardList></CardList>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

// function useFetchPokemonType () {
//   const [type, setTypes] = useState([])
//   useEffect(() => {
//     fetch("https://api.pokemontcg.io/v2/types")
//       .then((response) => {
//         return response.json()
//       })
//       .then(data => {
//         setTypes(data.data)
//       })
//   }, [])
//   return type
// }

export default App;
