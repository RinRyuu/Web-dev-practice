import { useEffect , useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com/?apikey=60138';


// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const[serchTerm, setserchTerm] = useState('');


    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search || []);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[]);

    return (
        <div className='app'>
            <h1>Move and chill</h1>

            <div className='search'>
                <input placeholder="Search For movies"
                value={serchTerm}
                onChange={(e)=>setserchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="serch"
                onClick={()=> searchMovies(serchTerm)}
                />
            </div>
            
            {movies ? (
            movies.length>0
                ?(
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />))}
                </div>
                ):(
                    <div className='container'>
                        <h1>NO movies Found</h1>
                    </div>
                )
                ):(
                    <p>loading...</p>
                )}
        </div>            
    );
}

export default App;
