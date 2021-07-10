import { useState, useEffect } from 'react';
import '../assets/styles/pages/home.css'
import Tab from '../components/Tab/Tab'
import useFetchPokemonType from '../hooks/useFetchPokemonType';

function Home () {
  const { types, setType } = useFetchPokemonType();
  const [active, setActive] = useState('')
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState([])

  // click tab
  const handleTabClick = (title) => {
    const newTypes = types.map(item => {
      item.title === title ? item.active = true : item.active = false
      return item
    })
    setActive(title)
    setType(newTypes)
  }

  // fetch pokemon card
  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      const url = `https://api.pokemontcg.io/v2/cards?pageSize=50${active ? `&q=types:${active.toLowerCase()}`: ''}`
      const response = await fetch(url)
      return response.json()
    }
    fetchData()
    .then(data => {
      setCards(data.data)
      setLoading(false)
    })
  }, [active])

  return (
    <div className="home-wrapper">
      <h1 className="home-title">Pokemon Card</h1>
      <div className="tab-list-wrap">
        { types.map((item, index) => {
          return <Tab key={index} tab={item} setActive={handleTabClick}></Tab>
        })}
      </div>
      <div className="card-wrap">
        { loading 
          ? (
          <div>
            <p className="text-md">Loading ...</p>
          </div>
          ) 
          : cards.map((item, index) => {
          return (
            <div className="image-wrapper">
              <img src={item.images.small} key={index} alt="poke-card" className="poke-card"></img>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default Home