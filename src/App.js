import React, {useEffect, useState} from "react";

import './App.css';
import {carService} from "./services/car.service";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {
    const [allCars, setAllCars] = useState([]);
    const [allCarsInitial, setAllCarsInitial] = useState([]);
    const [form, setForm] = useState({id: 0, model: '0', price: 0, year: 0})

    useEffect(() => {
        carService.getAll()
            .then(value => {
                setAllCars(value);
                setAllCarsInitial(value);
            });
    }, []);

    const filter = (e) => {
        e.preventDefault();
        setAllCars(allCarsInitial.filter(value => {
            return (
                (+value.id === +form.id || form.id === 0 || form.id === '')
                && (value.model.toUpperCase().includes(form.model.toUpperCase()) || form.model === '0' || form.model === '')
                && (+value.price === +form.price || form.price === 0 || form.price === '' || form.price === '0')
                && (+value.year === +form.year || form.year === 0 || form.year === '')
            )
        }));
    }

    const create = () => {
        carService.create({
            model: form.model,
            price: +form.price,
            year: +form.year
        }).catch(error => console.log(error));
    }

    const delete_item = (id) => {
        console.log(id);
        if (id !== undefined) {
            carService.deleteById(id).catch(error => console.log(error))
        } else {
            carService.deleteById(form.id).catch(error => console.log(error))
        }
    }

    const update = () => {
        const car = {};
        if (form.model !== '' && form.model !== '0')
            car.model = form.model;
        if (form.price !== '' && form.model !== '0' && form.model !== 0)
            car.price = +form.price;
        if (form.year !== '' && form.year !== '0' && form.year !== 0)
            car.year = +form.year;
        carService.updateById(form.id, car).catch(error => console.log(error))
    }

    const formHandler = (e) => {
        let targetName = e.target.name;
        let targetValue = e.target.value;
        setForm({...form, [targetName]: targetValue});
        console.log(form);
    }

    return (
        <div className="App">
            <Form filter={filter} create={create} delete_item={delete_item} update={update} form={form} formHandler={formHandler}/>
            <Cars allCars={allCars} delete_item={delete_item}/>
        </div>
    );
}

export default App;
