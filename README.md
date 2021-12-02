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