import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    cars_res: [],
    status: null,
    error: null,
    car_ed: null,
    valid_err: ''
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return carService.getAll(); // звідси попадає в action.payload (extra reducers)
        } catch (e) {
            return rejectWithValue(e.message); // звідси теж
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {rejectWithValue, dispatch}) => {
        try {
            if (data.id === "" || data.model === "" || data.price === "" || data.year === "")
                return "Помилка. Жодне поле окрім ID не може бути пустим. Будь ласка, заповніть.";
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const removeCar = createAsyncThunk(
    'carSlice/removeCar',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const editCar = createAsyncThunk(
    'carSlice/editCar',
    async ({data}, {rejectWithValue, dispatch}) => {
        try {
            if (data.id === "")
                return "Помилка. Заповніть спершу ID";
            await carService.updateById(data.id, data);
            dispatch(updateCar({data}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
            state.cars_res.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
            state.cars_res = state.cars_res.filter(car => car.id !== action.payload.id);
        },
        updateCar: (state, action) => {
            const carNew = action.payload.data;
            state.cars.map(car => {
                if (car.id === +carNew.id) {
                    if (carNew.model !== '') {
                        car.model = carNew.model;
                    }
                    if (carNew.price !== '') {
                        car.price = carNew.price;
                    }
                    if (carNew.year !== '') {
                        car.year = carNew.year;
                    }
                }
                return car;
            });
            state.cars_res.map(car => {
                if (car.id === +carNew.id) {
                    if (carNew.model !== '')
                        car.model = carNew.model;
                    if (carNew.price !== '')
                        car.price = carNew.price;
                    if (carNew.year !== '')
                        car.year = carNew.year;
                }
                return car;
            });
        },
        filterCar: (state, action) => {
            state.valid_err = '';
            const carF = action.payload.data;
            state.cars = state.cars_res.filter(car => {
                return (
                    (+car.id === +carF.id || carF.id === '')
                    && (car.model.toUpperCase().includes(carF.model.toUpperCase()) || carF.model === '')
                    && (+car.price === +carF.price || carF.price === '')
                    && (+car.year === +carF.year || carF.year === '')
                )
            });
        },
        mediateCarForEd: (state, action) => {
            state.car_ed = action.payload.car;
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending';
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
            state.cars_res = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        },
//____________________________________________________
        [removeCar.pending]: (state) => {
            state.status = 'pending';
        },
        [removeCar.fulfilled]: (state) => {
            state.status = 'fulfilled';
        },
        [removeCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        },
//____________________________________________________

        [createCar.pending]: (state) => {
            state.status = 'pending';
        },
        [createCar.fulfilled]: (state, action) => {
            state.valid_err = action.payload;
            state.status = 'fulfilled';
        },
        [createCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        },
//____________________________________________________

        [editCar.pending]: (state) => {
            state.status = 'pending';
        },
        [editCar.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.valid_err = action.payload;
        },
        [editCar.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        },
    }
});

export const {addCar, deleteCar, updateCar, filterCar, mediateCarForEd} = carSlice.actions;

const carReducer = carSlice.reducer;
export {carReducer};
