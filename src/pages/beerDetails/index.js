import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function BeerDetails() {

    const { id } = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() => {
        async function fetchBeer() {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setBeer(response.data)
        }
        fetchBeer()
    }, [id])

    console.log(beer)


    return (
        <div>
            <img src={beer.image_url} alt="beer" style={{ width: '50px' }} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            <p>{beer.brewers_tips}</p>

            <Link to="/beers">Voltar</Link>
        </div>
    );
}

export default BeerDetails;