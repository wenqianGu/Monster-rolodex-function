# pure function

* Pure function should return exact same thing no matter how many times it gets called
  when it is given the same arguments.
* A function is considered pure when everything that dictates
  what is return is completely isolated from what gets passed into it.
  This is very important because this function return should solely be dependent on the props being passed in.
* No side effect

```js
// this function 
const pureFunc = (a, b) => {
    return a + b;
}
```

# impure function

* A pure function if it is to modify or rely on something outside its scope and
  beyond the parameters being passed into it -> Then that is a impure function.

```js
let c = 3;
const funcA = (a, b) => {
    return a + b + c;
}

// call function A
funcA(2, 4) // 9

// C may change without function a knowing. 
c = 5;
funcA(2, 4) // 11

```  

## side effect

* A side effect is when a function creates some kind of effect outside its scope.

```js
let c = 3;
const funcB = (a, b) => {
    c = a + b;
    return a * b;
}

funcB(2, 4) // always return 8; 

// however, 
```

## hooks

```jsx
// class component - trying to store entire objects
this.state = {
    monsters: [],
    searchField: '',
}

// each hook only hooks into one value
const [] = useState() // [value, setValue]
```

# render in function component (hooks)

* Inside the class component, whenever there were mounting and update cycles, render would get run
  and update cycles runs whenever props changed or whenever state updated.
    * The only thing that ran through was whatever code was inside the render method.

```jsx
class App extends componment() {
    constructor() {
        super();

        this.state = {
            monster: [],
            searchField: '',
        }
    }

    componmentDidMount() {
        // fetch data, set state (monsters)
    }

    // methods
    onSearchChange = () => {

    }

    render() {
        // deconstructing 
        // filterMonsters
        return (
            <div></div>
        )
    }
}
```

* With functional components, we don't have a render methods
  * whenever React has determined that a functional component needs to render or re-render,
  it will just run the entire function top to bottom. 
    * props changed.
    * state changed.
* useState 
  * render when the actual value (searchField) has been changed. Not the time when setState has been called. 
  * the initialized value of searchField is 'a', and when we input a in the search box, the component will not render 
  coz the value of searchField is not changed.
```jsx
import {useState} from "react";

function App() {
  //
  const [searchField, setSearchField] = useState('a'); // check whether the value changed or not? 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };
  retrun(
          <div></div>
  )
}
```
## Side effect
* Side effects can be generated from functional components using the use effect hook.
* A side effect is some behavior that we trigger from out functions 
   that affect something that exits outside the scope of the function. 
* dependencies
  * state values (searchField or monsters)
  * props values (passed in as props to our functional component)
* empty dependencies
  * call the function when the first render. 


```jsx
// first arguments -> a callback function. 
// second is going to be an array of dependencies.  
// the dependencies -> whenever any of the values inside of this dependency array change is 
// when I's going to run this callback function. 

useEffect(()=>{},[]) 
```
