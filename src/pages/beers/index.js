import beers from '../../assets/beers.png'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Beers() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {

        async function fetchBeers() {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            )
            setData(response.data)
        }
        fetchBeers()
    }, [])




    return (
        <div>
            <img src={beers} alt='beer' />
            <p>All Bears</p>

            <label>Search</label>
            <input type='text' onChange={(e) => setSearch(e.target.value)} />

            {data

                .filter((cE) => (cE.name).toLowerCase().includes(search.toLowerCase()))


                .map((cE) => {
                    return (
                        <Link to={`/beers/${cE._id}`}>
                            <div style={{ display: 'flex' }}>
                                <img src={cE.image_url} alt='beer' style={{ width: '100px' }} />
                                <div style={{ flexDirection: 'column' }}>
                                    <p>{cE.name}</p>
                                    <p>{cE.tagline}</p>
                                    <p>Created By: {cE.contributed_by}</p>
                                </div>

                            </div>
                        </Link>
                    )
                })}
        </div>
    );
}

export default Beers;