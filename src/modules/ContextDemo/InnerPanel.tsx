import WithProvider from "./WithProvider";

const InnerPanel = () => {

    const styleProp = {
        padding: '20px',
        border: '1px solid black'
    };

    const onClick=(val)=>{
        alert(JSON.stringify(val));
    };


    return <div style={styleProp}>
        <p>Я вот тут небольшой текст, и вообще я с контекстом тут не работаю</p>
        <WithProvider cl={onClick}/>
    </div>;

};

export default InnerPanel;