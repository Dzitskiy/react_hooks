import { useState } from "react";
import ThemeOfRamkaContext, { themes } from "./context";
import InnerPanel from './InnerPanel';

const ContextDemo = (props: any) => {

    const [theme, setTheme] = useState<any>(themes.blackNwhite);

    const createButton = (theme: any, text: any) => {
        return <button style={theme} onClick={() => setTheme(theme)}>
            {text}
        </button>;
    };

    return <div>
        {createButton(themes.blackNwhite, 'Тема 1')}
        {createButton(themes.chartreuse, 'Тема 2')}
        {createButton(themes.lightBlue, 'Тема 3')}


        {/*КОмпоненты внутри ThemeOfRamkaContext.Provider*/}
        {/* Будут иметь доступ к значению ThemeOfRamkaCo
        ntext
        значение по умолчанию - theme*/}
        <ThemeOfRamkaContext.Provider value={theme}>
            <InnerPanel />
            <InnerPanel />
        </ThemeOfRamkaContext.Provider>
        
    </div>;
};

export default ContextDemo;