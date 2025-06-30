import { useState } from "react";
import searchIcon from "./assets/searchicon.png"
import Styles from "./styles/searchBar.module.css";
function SearchBar({ setLocation }) {
    const [place, setPlace] = useState("Delhi");
    const key = "2b5d1cc5ae316906a5a28b81ba76d544";
    async function handleSearch() {

        try {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${key}`;

            const response = await fetch(url);
            const result = await response.json();
            setLocation({
                lat: result[0].lat,
                lon: result[0].lon
            });
        }
        catch (err) {
            alert(err.message);
        }

    }
    return (
        <>
            <div className={Styles.searchBox}>
                <input type="text" id={Styles.searchInput} value={place} onChange={(event) => setPlace(event.target.value)} />

                <img src={searchIcon} alt="" id={Styles.icon} onClick={handleSearch} />


            </div>
        </>
    )
}

export default SearchBar;