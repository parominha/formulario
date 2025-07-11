import next from '../assets/images/next.svg';

type Step = {
    title: string;
    ordem: number;
}

type Props = {
    steps: Step[];
}

const Steps = ({ steps }: Props) => {
    return (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', margin: '30px 0px 15px 0px' }}>
            {steps.map((step, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ margin: 0, fontWeight: 700 }}>
                        <span
                            style={{
                                borderRadius: '50%',
                                backgroundColor: '#262668',
                                color: '#ffffff',
                                padding: '3px 9px',
                                marginRight: 5,
                            }}
                        >
                            {step.ordem}
                        </span>
                        {step.title}
                    </p>
                    {index !== steps.length - 1 && (
                        <img src={next} alt="Next" style={{ marginLeft: 10, width: '20px' }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Steps;
