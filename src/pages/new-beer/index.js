import newBeer from '../../assets/new-beer.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function NewBeer() {

    const [form, setForm] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const sent = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', form)
        console.log(sent)
    }


    return (
        <div>
            <img src={newBeer} alt='beer' />
            <p>CRIE SUA CERVEJA!!</p>

            <form onSubmit={handleSubmit} style={{}}>
                <label>Nome: </label>
                <input name='name' value={form.name} onChange={handleChange} type='text' />
                <label>TagLine</label>
                <input name='tagline' value={form.tagline} onChange={handleChange} type='text' />
                <label>Descrição</label>
                <input name='description' value={form.description} onChange={handleChange} type='text' />
                <label>First Brewed</label>
                <input name='first_brewed' value={form.first_brewed} onChange={handleChange} type='text' />
                <label>brewers_tips</label>
                <input name='brewers_tips' value={form.brewers_tips} onChange={handleChange} type='text' />
                <label>attenuation level</label>
                <input name='attenuation_level' value={form.attenuation_level} onChange={(e) => setForm({ ...form, attenuation_level: Number(e.target.value) })} type='number' />
                <label>Contribuição de: </label>
                <input name='contributed_by' value={form.contributed_by} onChange={handleChange} type='text' />

                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    );
}

export default NewBeer;