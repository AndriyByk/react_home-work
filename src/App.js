import {useReducer} from "react";

import './App.css';
import {ResetButton} from "./components/Buttons";
import {CatForm, DogForm} from "./components/Forms";
import {CatList, DogList} from "./components/Lists";

const reducer = (state, action) => {

    switch (action.type) {
        case 'cat':
            return {
                ...state,
                arrayOfCats: [...state.arrayOfCats.filter(cat => cat.id !== action.payload.id), action.payload]
            }
        case 'dog':
            return {
                ...state,
                arrayOfDogs: [...state.arrayOfDogs.filter(dog => action.payload.id !== dog.id), action.payload]
            }
        case 'deleteCat':
            return {...state, arrayOfCats: [...state.arrayOfCats.filter(cat => cat.id !== action.payload.id)]}
        case 'deleteDog':
            return {...state, arrayOfDogs: [...state.arrayOfDogs.filter(dog => dog.id !== action.payload.id)]}
        case 'deleteAll':
            return {...state, arrayOfCats: [], arrayOfDogs: []}
        default:
            return {...state};
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {arrayOfCats: [], arrayOfDogs: []}, undefined);

    return (
        <div className="App">
            <div className={'forms'}>
                <CatForm dispatch={dispatch}/>
                <DogForm dispatch={dispatch}/>
            </div>
            <div className={'lists'}>
                <div className={'lists-wrapper'}>
                    <CatList dispatch={dispatch} state={state}/>
                    <DogList dispatch={dispatch} state={state}/>
                </div>
                <div>
                    <ResetButton dispatch={dispatch}/>
                </div>
            </div>

        </div>
    );
}

export default App;
