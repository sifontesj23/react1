//import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Greeting from './components/Greeting';
//import Text from './components/Text';
import Title from './components/Title';
import Card from './components/Card'

function App() {
  return (
    <div className="App">

      
      <Title Text='Pagina inicial' />
      <Title Text='Sobre Nos'/>
      <Title Text='contatos'/>
      <Button label={"enviar"}/>
      <Button label={"cancelar"}/>
      <Button label={"Voltar"}/>
      <Card>
        <h1>Card de Bem vido</h1>  
        <p>Este é o contuido de um card de boas vindas</p>
      </Card>
      <Greeting name={"Jesus"}/>
      <Greeting name={"Alberto"}/>
      <Greeting name={"Sifontes"}/>


         
      
        
       
    </div>
  )
}

export default App;
