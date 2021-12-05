import React from "react";


class Clock extends React.Component {

    // OBS: Componentes de classes devem sempre chamar o construtor com props.
    // O construtor server para iniciar o estado do meu componente.
    
    // 1º executado
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    

    /* 
        Podemos declarar métodos especiais no componente de classe para executar 
        algum código quando um componente é montado e desmontado:
        OBS: Esses são chamados de "métodos de ciclo de vida"
    */

    /*
        O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM. 
        Este é um bom lugar para configurar um temporizador:
    */
    
    // método de montagem é executado depois que a saída do componente é renderizada no DOM
    // Se você precisar interagir com o browser, faça isto no método componentDidMount(). Não faça no render().
    
    // 3º executado
    componentDidMount() {
        this.timerID = setInterval(
            () =>this.tick(),
            1000 // A cada segundo execute o método tick()
        );
    }
    
   

    /* Se o componente Clock for removido do DOM, o React chama o método do ciclo de vida componentWillUnmount()
       para que o temporizador seja interrompido.
    */

    // é invocado imediatamente antes que um componente seja desmontado e destruído. 
    // método de desmontagem 
    componentWillUnmount() {
        clearInterval(this.timerID); // Limpamos o temporizador 
    }




    // método tick - será executado a cada segundo no componente Clock
    tick() {
        this.setState({
            date: new Date()
        }); // Seta atualizações para o estado local do componente.
    }



    // O método render() é o único método obrigatório em um class-component.
    // Quando chamado, ele examina this.props e this.state e retorna um dos seguintes tipos: Elementos React, Arrays e fragmentos, Portals, String e números, Booleanos ou null
    
    // 2º executado
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;


// Exemplo utilizando função
// function Clock(props) {
    
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );

// }

// export default Clock;