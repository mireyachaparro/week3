"use strict";
const main = () => {
    const handleSubmit = (ev) => {
        ev.preventDefault(); //para que el valor ingresado no apaezca y desaparezca cuando le damos a submit
        const elementInput = document.querySelector('[name = "user-name"]');
        //aserciones de tipo. le asignamos un tipo a la fuerza. le garantizamos que es un input, para ponerle la propiedad value
        const value = elementInput.value;
        const elementOutput = document.querySelector('output');
        elementOutput.value = `Hola ${value}`; //? nos protege de los nulls, si es null no da errores, simplemente no se ejecuta
    };
    const elementUserForm = document.querySelector('.user-form');
    elementUserForm === null || elementUserForm === void 0 ? void 0 : elementUserForm.addEventListener('submit', handleSubmit);
};
console.log('loaded index');
document.addEventListener('DOMContentLoaded', main);
