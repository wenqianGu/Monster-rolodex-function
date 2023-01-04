import './App.css';
import {useEffect, useState} from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

function App() {

    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [title, setTitle] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    // filterMonsters depends on monsters, searchField changes.
    // 如果不设置filteredMonsters的state，页面上其他任何state改变（只要functional component render），都会重新 re-built filterMonsters

    console.log('render')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
        console.log('filterMonsters-useEffect')
    }, [ monsters,searchField])

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
    };

    const onTitleChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setTitle(searchFieldString)
    };
            // every time this function runs, this filtered monsters array is getting rebuilt,
            // even if the monster's array has not changed.
    // const filteredMonsters = monsters.filter((monster) => {
    //     return monster.name.toLocaleLowerCase().includes(searchField);
    // });

    return (
        <div className="App">
            <h1 className='app-title'> {title}</h1>
            <SearchBox
                className='monster-search-box'
                placeholder='search monsters'
                onChangeHandler={onSearchChange}
                />
                <br></br>
                <SearchBox
                className='title-search-box'
                placeholder='set title'
                onChangeHandler={onTitleChange}
                />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
