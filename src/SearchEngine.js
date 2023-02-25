import React, { useState } from "react";

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }
    return (
        <div className="Search">
           <form onSubmit={search}>
            <input type="search" autofocus={true} onChange={handleKeywordChange} />
           </form>
        </div>
    )
}