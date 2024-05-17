import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode; // Добавляем тип React.ReactNode для свойства children
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
