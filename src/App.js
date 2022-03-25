import logo from './logo.svg';
import './App.css';
function Header(){
 return <header>
    <h1><a href="/">WEB</a></h1>
 </header>
}
function Nav(){
  return<nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/1">css</a></li>
      <li><a href="/read/1">js</a></li>

    </ol>

  </nav>
}
function Articla(){
  return<article>


  </article>
}
function App() {
  return (
    <div className="App">
      <Header>
      <Nav>
       
      </Nav>
      <article>
          
        </article>
      </Header>
    </div>
  );
}

export default App;
