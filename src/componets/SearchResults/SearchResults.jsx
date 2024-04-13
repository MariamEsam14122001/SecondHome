import React from "react";
import Items from "../Items/Items";

const SearchResults = ({ results }) => {
    return (
        <div className="search-results">
            <Items accommodations={results} />
        </div>
    );
};

export default SearchResults;