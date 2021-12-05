import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Commet from './components/Comment';
import Clock from './components/Clock';



// Especificando Elementos Filhos com JSX 
// Se uma tag está vazia, você pode fechá-la imediatamente com />, como XML:
// ex:
// const avatar = <img src={user.avatarUrl} />;

// Tags JSX podem conter elementos filhos:
// ex:
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );





const user = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/20023147?v=4',
  firstName: 'Bruno',
  lastName: 'Lima',
  text: 'lorem ipsum dolor set amment',
  date: '1994-11-21'
}








// COMPONENTES

// Ex: Componentes de função
function Wellcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Ex: Comopnentes de classe ES6
// class Wellcome extends React.Component {
  
//   render() {
//       return <h1>Hello, {this.props.name}</h1>;
//   }
// }
const el = <Wellcome name="Vamos aprender react JS" />;

ReactDOM.render(
  el,
  document.getElementById('root')
);









// Na prática, a maioria dos aplicativos React usam o ReactDOM.render() apenas uma única vez.
ReactDOM.render(
  <React.StrictMode>
    {/* {element} */}
    {/* <App />     */}
    <Clock />
    <Commet author={user} text={user.text} date={user.date} />
  </React.StrictMode>,
  document.getElementById('root')
);