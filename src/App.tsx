import Input from "./Components/Input";
import Steps from "./Components/Steps";
import Box from "./Components/Box";
import Button from "./Components/Button";

const steps = [
  { title: 'Contato', ordem: 1 },
  { title: 'Empresa', ordem: 2 },
  { title: 'Projeto', ordem: 3 }
];

function App() {
  return (
    <div style={{
      fontFamily: 'Nunito',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Box>

        <div style={{
          padding: '20px',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Steps steps={steps} />
        </div>

        <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <Input label="Nome" placeholder="Digite seu nome" required={true}/>
          <Input label="Telefone" placeholder="(xx) xxxxx-xxxx" />
          <Input label="E-mail" placeholder="exemplo@email.com" required={true} type="email"/>
        </div>

        <div style={{
          paddingRight: '40px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <Button texto="Continuar" />
        </div>

      </Box>
    </div>
  );
}

export default App;
