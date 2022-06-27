import randomBeer from '../../assets/random-beer.png'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RandomBeer() {

    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchRandom() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            setData(response.data)
        }
        fetchRandom()
    }, [])

    console.log(data)

    return (
        <div>
            <img src={randomBeer} alt='beer' />
            <p>Random Beer</p>
            <img src={data.image_url} alt='beer' style={{ width: '50px' }} />
            <p>{data.name}</p>
            <p>{data.tagline}</p>
            <p>{data.description}</p>
        </div>
    );
}

export default RandomBeer;