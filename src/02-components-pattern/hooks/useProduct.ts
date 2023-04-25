import { useState } from 'react';

export const useProduct = () => {
    const [counter, setCounter] = useState(1);

    const increaseBy = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 1));
    };

    return {
        counter,
        increaseBy
    };
};
