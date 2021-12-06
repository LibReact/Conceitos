# Conceitos
Principais conceitos seguindo a documentação do react


### Create React App 

<code>
    npx create-react-app name-app <br>
    cd my-app <br>
    npm start
</code>

#
#### OBS: Por trás, Babel e Webpack estão sendo utilizados, mas não é necessário saber nada sobre eles.
#
### Quando estiver pronto pra mandar pra produção, rode: <br>
<code>
    npm run build 
</code>

#
## Introdução ao JSX
### Por que JSX? 

O React não requer o uso do JSX. Porém, a maioria das pessoas acha prático como uma ajuda visual quando se está trabalhando com uma UI dentro do código em JavaScript. Ele permite ao React mostrar mensagens mais úteis de erro e aviso.

#
## Renderizando Elementos

OBS: Na prática, a maioria dos aplicativos React usam o 
<code>ReactDOM.render()</code> apenas uma única vez. Nas seções seguintes, aprenderemos como esse código pode ser encapsulado em componentes com estado.


# 
## Componentes e Props
Os componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.

OBS: Existem 2 tipos de components no react
- componentes de função
- componentes de classe es6

Os dois componentes acima são equivalentes do ponto de vista do React.
#
OBS: Props são Somente Leitura <br>
Independente se você declarar um componente como uma função ou uma classe, ele nunca deve modificar seus próprios props.<br><br> Considere essa função sum:

<code>
    function sum(a, b) { <br>
        return a + b; <br>
    }
</code>
<br>

#
Tais funções são chamadas <b>“puras”</b> porque elas não tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.

Em contraste, essa função é <b>impura</b> porque altera sua própria entrada:

<code>
    function withdraw(account, amount) {<br>
        account.total -= amount;<br>
    }
</code>
<br>

#

OBS: React é bastante flexível mas tem uma única regra estrita: <br>
Todos os componentes React tem que agir como funções puras em relação ao seus props.

#

## State e Ciclo de Vida
O state contém dados específicos ao componente que podem mudar com o tempo. O state é definido pelo usuário e deve ser um objeto JavaScript.

Existem três coisas que você deve saber sobre setState().
<ul>
<li>Não Modifique o State Diretamente </li>
<li>Atualizações de State Podem Ser Assíncronas </li>
<li>Atualizações de State São Mescladas  </li>
</ul>

#
Quando um componente é criado podemos adicionar métodos especiais referente ao ciclo de vida, são eles:

  - componentDidMount() 
    - é executado depois que a saída do componente é renderizada no DOM
    - Se você precisar interagir com o browser, faça isto no método componentDidMount(). Não faça no render().
  <br>
  <br>
  - componentWillUnmount()
    - Invocado imediatamente antes que um componente seja desmontado e destruído.
    - Qualquer limpeza necessária deve ser realizada neste método, como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada no componentDidMount().
    - Não se deve chamar setState() porque o componente nunca irá será renderizado novamente.


OBS: Ao utilizarmos class-components os métodos seguem essa ordem para serem executados:
    
    // 1º executado - Inicia o componente com um determinado estado.
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // 2º executado - Renderiza os elementos HTML
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    // 3º executado  - Invoca os métodos do ciclo de vida do componente 
    componentDidMount() {}
    componentWillUnmount() {}

<code> dúvidas?
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
</code>

#

## Eventos
Eventos em React são nomeados usando camelCase ao invés de letras minúsculas.

<code>Dúvidas? 
https://pt-br.reactjs.org/docs/handling-events.html
</code>

#
## IF Inline com o Operador Lógico  &&
Exemplo:<br>
<code>
    {x.length > 0 &&
        <h2>
            You have {x.length} unread messages.
        </h2>
    }
</code>
<br>
Isto funciona porque em JavaScript, true && expressão são sempre avaliadas como expressão, e false && expressão são sempre avaliadas como false.

Portanto, se a condição é <b>true</b>, o elemento logo depois do && irá aparecer no resultado.<br> Se o elemento é false, React irá ignora-lo.
#

### Evitando que um Componente seja Renderizado 
Em casos raros você pode desejar que um componente se esconda ainda que ele tenha sido renderizado por outro componente. Para fazer isso, retorne null ao invés do resultado renderizado.

<code>
    function WarningBanner(props) {<br>
        if (!props.warn) { <br>   
            return null; <br> 
        } <br>
        return ( <br>
            <div className="warning">
                Warning!
            </div>
        );<br>
    }<br>
</code>

<code>Dúvidas?
https://pt-br.reactjs.org/docs/conditional-rendering.html
</code>