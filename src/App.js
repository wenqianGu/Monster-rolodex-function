import './App.css';
import {useEffect, useState} from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

function App() {

    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [monsters, setMonsters] = useState([]);

    console.log('render')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, []);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
    };

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
        <div className="App">
            <h1 className='app-title'> Monster Rolodex</h1>
            <SearchBox
                className='monster-search-box'
                placeholder='search monsters'
                onChangeHandler={onSearchChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
