import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



function formatName(user) {
  return user.firstName + '' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }

  return <h1>Hello, Stranger.</h1>
}

const user = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/20023147?v=4',
  firstName: 'Bruno',
  lastName: 'Lima'
}

const element = (
  <div>
    <img src={user.avatarUrl} alt="avatar" />
    {getGreeting(user)}
  </div>
)

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





ReactDOM.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
