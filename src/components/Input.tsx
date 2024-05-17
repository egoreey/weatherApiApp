import React from 'react';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Введите название города"
        />
    );
};

export default Input;
