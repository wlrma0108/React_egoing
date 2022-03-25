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
function Article(){
  return<article>


  </article>
}
function App() {
  const topics =[
   {id:1,title:'html',body:'html is ...'},
   {id:2,title:'css',body:'css is ...'},
   {id:3,title:'js',body:'javascript is ...'}


  ]
  return (
    
    <div className="App">
      <Header></Header>
      <Nav topics={topics}> </Nav>
      <Article title="welcome" body="hello,Web"></Article>
    </div>
  );
}

export default App;
