import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css"
import Results from "./Results"
import Photos from "./Photos"

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
  

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    
    
        function search() {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
            axios.get(apiUrl).then(handleResponse);

            let pexelsApiKey = "wBqFWH9gvkaAQCcAXM2MJG8h1niFCMx1Ls7NdqMVZN04rPhEU84zF9ok";
            let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

            let headers = { Authorization: `${pexelsApiKey}` };
            axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

        }
    
        function handleSubmit(event) {
            event.preventDefault();
            search();
            }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
        return (
            <div className="Search">
                <section>
             <h3>What are you looking for?</h3>
              <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="Hint">
            Suggested words: Sunset, yoga, plant
          </div>
          </section>
          <Results results={results} /> 
          <Photos photos={photos} />
          
          </div>
        )
    } else {
        load();
        return "Loading..."
    }



   
}