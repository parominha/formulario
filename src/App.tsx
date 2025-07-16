import Input from "./Components/Input";
import Steps from "./Components/Steps";
import Box from "./Components/Box";
import Button from "./Components/Button";
import './App.css'
import { useState } from "react";
import TextArea from "./Components/Textarea";

const steps = [
  { title: 'Contato', ordem: 1 },
  { title: 'Empresa', ordem: 2 },
  { title: 'Projeto', ordem: 3 }
];

function App() {

  // Estado de step
  const [stepAtual, setStepAtual] = useState(1);

  // Estado de inputs
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [numeroFuncionarios, setNumeroFuncionarios] = useState('');
  const [sobre, setSobre] = useState('');

  return (
    <div className="container">
      <Box>

        <div className='steps'>
          <Steps steps={steps} stepAtual={stepAtual} />
        </div>

        {stepAtual === 1 && (
          <div className='input'>
            <Input label="Nome" placeholder="Como prefere ser chamado" value={nome} onChange={(e) => setNome(e.target.value)} required={true} />
            <Input label="Telefone" placeholder="(xx) xxxxx-xxxx" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <Input label="E-mail" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required={true} type="email" />
          </div>
        )}
        {stepAtual === 2 && (
          <div className='input'>
            <Input label="Nome da empresa" placeholder="Informe o nome da empresa" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} required={true} />
            <Input label="Nº de funcionários" placeholder="Informe o número de funcionários" value={numeroFuncionarios} onChange={(e) => setNumeroFuncionarios(e.target.value)} type="number" />
            <TextArea label="Sobre seu negócio" placeholder="Fale um pouco sobre seus produtos e serviços" value={sobre} onChange={(e) => setSobre(e.target.value)} />
          </div>
        )}
        {stepAtual === 3 && (
          <div className='input'>
            <Input label="Nome" placeholder="Digite seu nome" value={nome} required={true} />
            <Input label="Telefone" placeholder="(xx) xxxxx-xxxx" value={telefone} />
            <Input label="E-mail" placeholder="exemplo@email.com" value={email} required={true} type="email" />
          </div>
        )}

        <div className='button' style={{ justifyContent: stepAtual > 1 ? 'space-between' : 'flex-end' }}>
          {stepAtual > 1 && (
            <Button texto="Voltar" bgColor={false} onClick={() => setStepAtual(prev => Math.max(prev - 1, 1))} />
          )}
          <Button texto="Continuar" bgColor={true} onClick={() => setStepAtual(prev => Math.min(prev + 1, steps.length))} />
        </div>

      </Box>
    </div>
  );
}

export default App;
