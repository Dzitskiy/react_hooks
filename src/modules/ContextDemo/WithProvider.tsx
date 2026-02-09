import { useContext } from "react"
import ThemeOfRamkaContext from "./context";
interface Props {
    cl: (v: any) => void;

}
const WithProvider = (props: Props) => {

    const prov = useContext(ThemeOfRamkaContext);
    
    console.log(prov);
    const outer = {
        width: '100%',
        padding: '10px',
        border: `2px solid ${prov.color}`,
        background: prov.background
    };
    return <div style={outer}>
        <p style={{ color: prov.color }}>
            Я текст для проверки
        </p>
        {/* <ThemeOfRamkaContext.Consumer>
            {currentTheme => JSON.stringify(currentTheme)}
        </ThemeOfRamkaContext.Consumer> */}
        <button onClick={() => props.cl(prov)}>Текст</button>
    </div>;
};

export default WithProvider;