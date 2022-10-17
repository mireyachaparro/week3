const main = () => {
    const handleSubmit = (ev: Event) => {
        ev.preventDefault(); //para que el valor ingresado no apaezca y desaparezca cuando le damos a submit
        const elementInput: HTMLFormElement = document.querySelector(
            '[name = "user-name"]'
        );
        //aserciones de tipo. le asignamos un tipo a la fuerza. le garantizamos que es un input, para ponerle la propiedad value
        const value = (elementInput as HTMLInputElement).value;
        const elementOutput = document.querySelector('output');
        (elementOutput as HTMLInputElement).value = `Hola ${value}`; //? nos protege de los nulls, si es null no da errores, simplemente no se ejecuta
    };
    const elementUserForm = document.querySelector('.user-form');
    elementUserForm?.addEventListener('submit', handleSubmit);
};

console.log('loaded index');
document.addEventListener('DOMContentLoaded', main);
