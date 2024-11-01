import { FunctionComponent, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface Quote {
  quote: string
  author: string
}

const App: FunctionComponent = () => {
  const [quote, setQuote] = useState<Quote>({ quote: '', author: '' });

  
  const getQuotes = () => {
    axios.get('https://dummyjson.com/quotes/random')
    .then( response => {
      setQuote(response.data)
    })
    .catch( error => console.error('Error fetching random quote:', error))
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
  <div id='app'>
    <div id='quote-box'>
      <h1>Random Quote Machine</h1>
      <h2 id="text">{quote.quote}</h2>
      <h3 id="author">- {quote.author} -</h3>
      <div id='btn-container'>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`} className='grid place-items-center px-3 py-2 text-sm rounded bg-white text-[#0c0a3e] hover:bg-[#c7b09c] lg:px-5 lg:py-3 lg:text-2xl' target='_blank'>Share <FaTwitter /></a>
        <button id='new-quote' type='button' onClick={getQuotes}>New Quote</button>
      </div>
    </div>
    <footer>
      <span>Don't forget to follow me</span>
      <div className="social-media">
        <a href="https://linkedin.com/in/ariffahrizal" target='_blank'><FaLinkedin size={35}/></a>
        <a href="https://github.com/arif-fahrizal" target='_blank'><FaGithub size={35}/></a>
        <a href="https://instagram.com/arifahrizal__" target='_blank'><FaInstagram size={35}/></a>
      </div>
      <span>Build With ❤️ by Arif Fahrizal</span>
    </footer>
  </div>
  )
}

export default App
