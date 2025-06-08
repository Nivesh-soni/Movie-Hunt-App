import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './Components/MovieCard'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  const [Movie, setMovie] = useState([])
  const [filtered, setfiltered] = useState([])
  const [fixMovie, setfixMovie] = useState("Alice")
  const [input, setinput] = useState("")
  const [theme, settheme] = useState("dark")

  const Types = ['movie', 'series']

  const API_URl = "https://www.omdbapi.com/?apikey=d8dd9b1a"

  const fetchApi = async (title) => {
    let req = await fetch(`${API_URl}&s=${title}`)
    let res = await req.json()

    console.log(res)
    setMovie(res.Search)
  }
  useEffect(() => {
    fetchApi("Alice")
  }, [])

  useEffect(() => {
    document.body.className = theme
  }, [theme])


  const handleTheme = () => {
    settheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleInput = (e) => {
    const newInput = e.target.value
    setinput(newInput)
  }

  const handleMovie = (e) => {
    fetchApi(input)
    setinput('')
  }
  const handleHome = (e) => {
    fetchApi(fixMovie)
    setinput('')
  }
  const handleType = (data) => {
    if (data === 'movie' || data === 'series') {
      const filtered = Movie.filter(item => item.Type === data)
      fetchApi(fixMovie)
      setfiltered(filtered)
      setMovie([])
    }
    else if(data === 'All')
    {
      setfiltered([])
      fetchApi(fixMovie)
    }

    else {
      return alert('sorry')
    }
  }

  return (
    <>
      <div className='min-h-[100vh] overflow-hidden'>
        <div className='flex items-center justify-center flex-col'>
          <Header handleTheme={handleTheme} handleHome={handleHome} theme={theme} />

          <div className={`${theme === 'dark' ? '' : 'border-black'} border-2 rounded-3xl sm:mt-4 px-5 py-2 w-[12rem] sm:w-[20rem] flex justify-between items-center`}>
            <input value={input} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") { handleMovie() } }} className={`w-[8rem] sm:w-[15rem] border-0 outline-0`} type="text" placeholder='Search Movies' />
            <i onClick={handleMovie} className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
          </div>
        </div>



        <div className='flex justify-center my-5 gap-3 overflow-x-auto'>
          <span onClick={() => { handleType('All') }} className={`cursor-pointer bg-[#212121] w-[6rem] sm:w-[9rem] text-center px-3 sm:px-8 py-2 rounded-2xl  ${theme === 'dark' ? 'bg-[#1e1e1e] text-white border-transparent hover:bg-[#2b2b2b]' : 'bg-white text-black hover:bg-[#aba9a9] border-black'} border-2  `}>All</span>
          <span onClick={() => { handleType('movie') }} className={`cursor-pointer bg-[#212121] w-[6rem] sm:w-[9rem] text-center px-3 sm:px-8 py-2 rounded-2xl  ${theme === 'dark' ? 'bg-[#1e1e1e] text-white border-transparent hover:bg-[#2b2b2b]' : 'bg-white text-black hover:bg-[#aba9a9] border-black'} border-2  `}>Movies</span>
          <span onClick={() => { handleType('series') }} className={`cursor-pointer bg-[#212121] w-[6rem] sm:w-[9rem] text-center px-3 sm:px-8 py-2 rounded-2xl  ${theme === 'dark' ? 'bg-[#1e1e1e] text-white border-transparent hover:bg-[#2b2b2b]' : 'bg-white text-black hover:bg-[#aba9a9] border-black'} border-2  `}>Series</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 mx-24 my-8'>
          {
            (filtered.length > 0 ? filtered : Movie)?.length > 0 ? (
              (filtered.length > 0 ? filtered : Movie).map(movie => (
                <MovieCard
                  key={movie.imdbID}
                  Poster={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'}
                  Title={movie.Title}
                  Year={movie.Year}
                  Type={movie.Type}
                  theme={theme}
                />
              ))
            ) : (<p>No movies found</p>)
          }
        </div>

        <Footer isFooterFixed={(filtered.length === 0 && Movie.length === 0)} />

      </div>
    </>
  )
}

export default App
