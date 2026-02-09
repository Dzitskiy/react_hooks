import { useState } from "react";
import { Button } from "react-bootstrap";




export function Home() {
    const [clickCounter, setClickCounter] = useState<number>(0);

    const [fancy, setFancy] = useState<string>('fancy');
    const incr = () => {

        setClickCounter(prev => {
            return prev + 33;
        });
        setFancy(fancy + "1");
    };

    console.log('RERENDER');

    
    return <Button
        variant={'outline-primary'}
        onClick={incr}>
        Кнопка нажата {clickCounter} раз ({fancy})</Button>;
}