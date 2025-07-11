import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Box = ({ children }: Props) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        width: '550px',
        height: '520px',
        margin: 'auto',
        backgroundColor: '#fff',
        fontFamily: 'Nunito',
      }}
    >
      {children}
    </div>
  );
};

export default Box;
