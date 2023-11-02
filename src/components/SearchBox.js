import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
                type="search"
                placeholder="Search for robots"
                value={searchfield} // Set the input value based on the searchfield prop
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
