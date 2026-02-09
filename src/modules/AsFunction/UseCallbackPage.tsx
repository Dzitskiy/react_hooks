import { memo, useCallback, useMemo, useRef, useState } from "react";

import { Autocomplete, Button, Card, CardActions, CardContent, Grid, TextField, Typography }
    from "@mui/material";
import { FormLabel } from "react-bootstrap";
type T = { text: string, now: Date };




const UseCallbackPage = () => {

    const [items, setItems] = useState<Array<T>>([]);
    const [text1, setText1] = useState<string>('');
    const [text2, setText2] = useState<string>('');

    const textRef1 = useRef<HTMLInputElement>(null);

    const textRef2 = useRef<HTMLInputElement>(null);

    const addItem = () => {
        setItems([...items, { text: '', now: new Date() }])
    };

    const handleText1 = () => {
        const t = textRef1!.current?.getElementsByTagName('input')[0].value + '';

        setText1(t);
    };
        const handleText2 = () => {
        const t = textRef2!.current?.getElementsByTagName('input')[0].value + '';

        setText2(t);
    };



    console.log('пересовываюсь')
    // При помощи useCallback
    // мы сохраняем (мемоизируем) функцию
    // чтобы она не создавалась при перерисовке UseCallbackPage
    // и не перерисовывала List
    const onItemClick = useCallback(() => {
        alert('Функция была создана ' + text1);
    }, [text1]);

    return <Grid
        container={true}
        spacing={10}
        direction="row"
        justifyContent="center"
        alignItems="center">


        <Grid  xs={12}>
            <Card variant="outlined" sx={{ width: '80%' }}>
                <CardContent>
                    <FormLabel>Потестируем пропсы </FormLabel>
                    <br />
                    <TextField ref={textRef1} variant="outlined" placeholder="Введите текст" />
                    <Button onClick={handleText1}>Сохранить текст который не идет в пропс</Button>

                      <br />
                       <TextField ref={textRef2} variant="outlined" placeholder="Введите текст" />
                    <Button onClick={handleText2}>Сохранить текст который идет в пропс</Button>

                </CardContent>
            </Card>
        </Grid>

        <Grid item={true}>
            <Button onClick={addItem} variant="contained">Добавить новый элемент</Button>


            <div>{items.map((v, i) => <ChildPanel
                key={i}
                onClick={onItemClick}
                text={text2}

            />)}</div>;

        </Grid>
    </Grid>;
};


interface ChildProps {
    text:string;
    onClick?: () => void;
}

const childStyle = {
    padding: '10px',
    margin: '10px',
    border: '1px solid black',
}






// Компонент в котором есть кнопка с изменяемым значением
const ChildPanel =memo( (props: ChildProps) => {


    const [count, setCount] = useState<number>(0)

    // При помощи useMemo - в случае перерисовки компоненты
    // сохранит свой цвет
    const randomColour1 = useMemo(()=> '#' + (Math.random() * 0xFFFFFF << 0).toString(16), []);
    const randomColour2 =useMemo(()=> '#' + (Math.random() * 0xFFFFFF << 0).toString(16), [props.text]);
    const incr = () => setCount(count + 1);


    return <div style={childStyle}>

        <Button style={{ background: randomColour1, color: 'white' }} onClick={incr}>Я инкримент</Button>
        <br />
        <span style={{ background: randomColour2 }}>Я просто текст {count}</span>
        <br />


        <Button 
        onClick={()=>props.onClick?.()}
            variant="contained">
            А я просто кнопка с коллбэком
        </Button>
        <span>Я создан {new Date().toLocaleString()}</span>
    </div>
});

export default UseCallbackPage;