import { useState, useEffect } from 'react'

const getBackgroundColor = (type) => {
  let color = ''
  switch (type) {
    case "Colorless":
      color = '#E98580'
      break;
    case "Darkness":
      color = '#343A40'
      break;
    case "Dragon":
      color = '#865439'
      break;
    case "Fairy":
      color = '#865439'
      break;
    case "Fighting":
      color = '#D83A56'
      break;
    case "Fire":
      color = '#D54C4C'
      break;
    case "Grass":
      color = '#66DE93'
      break;
    case "Lightning":
      color = '#D9DD6B'
      break;
    case "Metal":
      color = '#C1AC95'
      break;
    case "Psychic":
      color = '#8D2828'
      break;
    case "Water":
      color = '#39A2DB'
      break;
    default:
      color = '#F5A962'
      break;
  }
  return color
}

export default function useFetchPokemonType () {
  const [types, setType] = useState([])
  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/types")
    .then((response) => {
      return response.json()
    })
    .then(data => {
      const mapPokemonType = data.data.map(item => {
        return {
          title: item,
          style: {
            backgroundColor: getBackgroundColor(item)
          },
          active: false
        }
      })
      setType(mapPokemonType)
    })
  },[])
  return {
    types,
    setType
  }
}