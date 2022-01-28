import React, {useEffect, useState} from "react";

import './App.css';
import {carService} from "./services/car.service";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useForm} from "react-hook-form";

function App() {
    const [allCars, setAllCars] = useState([]);
    const [allCarsInitial, setAllCarsInitial] = useState([]);
    const [trigger, setTrigger] = useState({});

    useEffect(() => {
        carService.getAll()
            .then(value => {
                setAllCars(value);
                setAllCarsInitial(value);
            });
    }, [trigger]);

    const {
        register,
        handleSubmit
    } = useForm();

    const filter = (data) => {
        console.log(data);
        setAllCars(allCarsInitial.filter(value => {
            return (
                (+value.id === +data.id || data.id === '')
                && (value.model.toUpperCase().includes(data.model.toUpperCase()) || data.model === '0' || data.model === '')
                && (+value.price === +data.price || data.price === '')
                && (+value.year === +data.year || data.year === '')
            )
        }));
    }

    const create = (data) => {
        carService.create({model: data.model, price: data.price, year: data.year
        }).then(value => setTrigger(value)).catch(error => console.log(error.response.data));
    }

    const delete_item = (data) => {
        carService.deleteById(data.id).then(value => setTrigger(value)).catch(error => console.log(error.response.data));
    }

    const update = (data) => {
        const car = {};
        if (data.model !== '')
            car.model = data.model;
        if (data.price !== '')
            car.price = +data.price;
        if (data.year !== '')
            car.year = +data.year;
        carService.updateById(data.id, car).then(value => setTrigger(value)).catch(error => console.log(error.response.data));
    }

    return (
        <div className="App">
            <Form filter={filter} register={register} handleSubmit={handleSubmit} create={create} update={update} delete_item={delete_item}/>
            <Cars allCars={allCars}/>
        </div>
    );
}

export default App;