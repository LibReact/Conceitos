import React from "react";


// EXEMPLO 1
// function Form() {

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert('Você clicou em enviar');
//     }

//     return (
//         <>
//         <h2>Evento</h2>
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Enviar</button>
//         </form>
//         </>
//     )
// }

// export default Form;

// EXEMPLO 2
class Toggle extends React.Component {

    constructor (props) {
        super(props);
        this.state = { isToggleOn: true };

        // Aqui utilizamos o 'bind' para que o 'this' funcione dentro da nossa callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <>
            <h2>Evento Click</h2>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            </>
        )
    }
}

export default Toggle;

// EXEMPLO 3
// class LoggingButton extends React.Component {
//     // Essa sintaxe garante que o `this` seja vinculado ao handleClick. 
//     // Atenção: essa é uma sintaxe *experimental*.  
//     handleClick = () => {    
//         console.log('this is:', this);  
//     }

//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Clique Aqui
//         </button>
//       );
//     }
// }

// export default LoggingButton