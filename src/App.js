/* h7-2bNpeC4vfZRmLpGB158V4Gp9GTQIXUuo-tTxFZ7M */
/* aLYgCOC7JgBjfYw12BX8arjjeAfCXZnq4bbsJez-SNQ */
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from "./Nav"


function App() {
  return (
    <div className="App">

      <Nav/>
      <Banner/>
      <Row title="NETFLIX-ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>

      
    </div>
  );
}

export default App;
