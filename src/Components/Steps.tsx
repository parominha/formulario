import next from '../assets/images/next.svg';

type Step = {
    title: string;
    ordem: number;
}

type Props = {
    steps: Step[];
    stepAtual: number;
}

const Steps = ({ steps, stepAtual }: Props) => {
    return (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', margin: '30px 0px 15px 0px' }}>
            {steps.map((step, index) => {

                const status =
                    step.ordem < stepAtual
                        ? 'concluido'
                        : step.ordem === stepAtual
                            ? 'ativo'
                            : 'desabilitado';

                const bgColor =
                    status === 'concluido'
                        ? '#557D44'
                        : status === 'ativo'
                            ? '#383A68'
                            : '#ccc';

                const color =
                    status === 'concluido'
                        ? '#222222'
                        : status === 'ativo'
                            ? '#383A68'
                            : '#888';

                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ margin: 0, fontWeight: 700, color: color }}>
                            <span
                                style={{
                                    borderRadius: '50%',
                                    backgroundColor: bgColor,
                                    color: '#fff',
                                    padding: '4px 10px',
                                    marginRight: 6,
                                    opacity: status === 'desabilitado' ? 0.5 : 1,
                                    fontSize: '14px'
                                }}
                            >
                                {status === 'concluido' ? (
                                    <span style={{ fontSize: '11.5px', lineHeight: 1 }}>✔</span> 
                                ) : (
                                    step.ordem
                                )}
                            </span>
                            {step.title}
                        </p>
                        {index !== steps.length - 1 && (
                            <img src={next} alt="Next" style={{ margin: '0px 15px', width: '15px' }} />
                        )}
                    </div>
                )
            })}
        </div>
    );
};

export default Steps;
