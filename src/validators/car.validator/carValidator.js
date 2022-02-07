import Joi from "joi";

const regModel = new RegExp('^[[a-zA-ZА-яіІїЇґҐ]+$');

const defaultValidation = Joi.object({

        id: Joi.number().allow('').messages({
            'number.base': 'Id повинен бути числом'
        }),
        model: Joi.string().allow('').regex(regModel).max(20).required().messages({
            'string.empty': 'Заповніть поле model!',
            'string.pattern.base': 'Назва моделі повинна включати літери англійської чи української абетки',
            'string.max': 'Кількість символів не повинна перевищувати 20'
        }),
        price: Joi.number().positive().allow('').max(1000000).required().messages({
            'number.base': 'Вартість повинна бути числом',
            'number.positive': 'Вартість не може бути від`ємною чи нулем',
            'number.max': 'Така дорога машина нам не по кишені..'
        }),
        year: Joi.number().positive().allow('').min(1990).max(new Date().getFullYear()).required().messages({
            'number.base': 'Рік виготовлення повинен бути числом',
            'number.positive': 'Ми ще не в антиреальності.. Ну не буває від`ємного року',
            'number.min': 'Навіщо тобі така стара машина?? Дайош машину після 1990-го!',
            'number.max': 'Машина з майбутнього? Круто, але ніт!'
        })
    }
);

export {defaultValidation}