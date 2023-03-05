import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css"

import Results from "./Results"

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
  

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    
    
        function search() {
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
            axios.get(apiUrl).then(handleResponse);
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
          
          </div>
        )
    } else {
        load();
        return "Loading..."
    }



   
}