import { createContext } from "react";




export const themes = {
    blackNwhite: {
        color: 'black',
        background: 'white'
    },
    lightBlue: {
        color: 'lightblue',
        background: 'antiquewhite'
    },
    chartreuse: {
        background: 'chartreuse',
        color: 'red',
    }

};



// Контекст, который хранит выбранную тему для рамки
const ThemeOfRamkaContext = createContext(themes.blackNwhite);

export default ThemeOfRamkaContext;
