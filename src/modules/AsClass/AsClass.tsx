import { Component } from "react";
interface  Props{
    name:string;
}
class AsClass extends Component<Props>{

    render(){
        return <div>
            Привет, я класс {this.props.name}
        </div>;
    }
}