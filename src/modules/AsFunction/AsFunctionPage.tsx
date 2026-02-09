import UseEffectCounter from "./UseEffectCounter";
import { FunCounter } from "./ClassCounter";
import UseStateCounter from "./fancy_folder/UseStateCounter";
import { useState } from "react";

const AsFunctionPage = (props: any) => {

    const [close, setClose] = useState<boolean>(false);
   
    const [ccc, setCcc] = useState<number>(1000);
    return <div>
        <button onClick={() => setClose(!close)}>
            Закрыть
        </button>

        <button onClick={() => setCcc(ccc + 1)}>
            Клик {ccc}
        </button>
        <span>{close.toString()}</span>
        <br />
        {(!close) ? <UseEffectCounter /> : <span>НИЧЕГО НЕТ</span>}
        {/* <UseStateCounter /> */}
    </div>;
};
export default AsFunctionPage;