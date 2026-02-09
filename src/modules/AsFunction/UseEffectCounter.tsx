import { useEffect, useState } from "react";

const UseEffectCounter = () => {
    const [iter, setIter] = useState<number>(0);
    const [money, setMoneny] = useState<number>(0);
    const [count, setCountValue] = useState<number>(0);


    // 1. i = НОВОЕ_ЗНАЧЕНИЕ
    // 2. Перерисуй эту компоненту
    useEffect(() => {
        console.log('%cЯ работаю после каждого рендера', 'background: #222; color: #bada55');

    });

    function onDestroy(){
        console.log('%cЯ УДАЛИЛСЯ', 'background: #222; color: #bada55');
    }

    useEffect(() => {
        console.log('%cЯ сработал один раз', 'background: red; color: white');
     

        return onDestroy;

    }, []);


    /*

        useEffect(функция_которая_срабатывает_при_отрисовке,
              <(необяз. Массив объектов, изменения которых влекут вызов функции)>
              );


                useEffect(функция_срабатывает_один_раз,
              []
              );

               useEffect(функция_срабатывает_каждую_перерисовку);

            useEffect(функция_срабатывает_когда_меняется_А_или_Б, [а,б]);

    */

    useEffect(() => {
        console.log('%c Я срабатываю когда меняется iter ИЛИ money', 'background: purple; color: white !important');
    }, [iter, money]);

    useEffect(() => {
        console.log('Я срабатываю когда меняется только money');
    }, [money]);

    useEffect(() => {
        console.log('Я срабатываю когда меняется только count');
    }, [count]);


    const incrI = () => setIter(iter + 1);
    const incrJ = () => setMoneny(prev => prev + 2);
    const incrC = () => setCountValue(count + 1);

    return <div>
        <button onClick={incrI}>Я меняю Iter = {iter}</button>
        <button onClick={incrJ}>Я меняю money = {money}</button>
        <button onClick={incrC}>Я меняю Count = {count}</button>
    </div>;

};

export default UseEffectCounter;