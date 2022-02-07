import {joiResolver} from "@hookform/resolvers/joi";
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import {Buttons} from "./Buttons/Buttons";
import {Inputs} from "../Inputs/Inputs";
import {defaultValidation} from "../../validators";
import './Form.css';

const Form = () => {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: joiResolver(defaultValidation), mode: "onTouched"});
    const {car_ed, valid_err} = useSelector(state => state['carReducer']);

    useEffect(() => {
        if (car_ed !== null) {
            setValue('id', car_ed.id);
            setValue('model', car_ed.model);
            setValue('price', car_ed.price);
            setValue('year', car_ed.year);
        }
    }, [car_ed]);

    return (
        <div className={'form'}>
            <form>
                <Inputs register={register} errors={errors}/>
                <Buttons handleSubmit={handleSubmit}/>
                {(errors ||valid_err) &&
                <div className={'errors'}>
                    {errors.id && <div>{errors.id.message}</div>}
                    {errors.model && <div>{errors.model.message}</div>}
                    {errors.price && <div>{errors.price.message}</div>}
                    {errors.year && <div>{errors.year.message}</div>}
                    {valid_err && <div>{valid_err}</div>}
                </div>}
            </form>
        </div>
    );
};

export {Form};