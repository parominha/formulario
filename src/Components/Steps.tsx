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

                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ margin: 0, fontWeight: 700 }}>
                            <span
                                style={{
                                    borderRadius: '50%',
                                    backgroundColor: bgColor,
                                    color: '#ffffff',
                                    padding: '3px 9px',
                                    marginRight: 5,
                                    opacity: status === 'desabilitado' ? 0.5 : 1,
                                }}
                            >
                                {step.ordem}
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
