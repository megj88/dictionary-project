import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

function handleResponse(response) {
    console.log(response.data[0])
}

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }


    return (
        <div className="Search">
           <form onSubmit={search}>
            <input type="search" autofocus={true} onChange={handleKeywordChange} />
           </form>
        </div>
    )
}