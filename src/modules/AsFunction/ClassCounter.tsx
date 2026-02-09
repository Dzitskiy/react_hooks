import {Component, useState} from "react";


interface Props {

}

interface State {
    count: number;
}

export class ClassCounter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {count: 0};
        this.incr = this.incr.bind(this);
    }

    incr() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <button onClick={this.incr}>
            Я обычный counter {this.state.count}
        </button>;
    }
}


export function FunCounter() {
    const [count, setCount] = useState<number>(0);

    const incr = () => setCount(count + 1);

    return <button onClick={incr}>
        Я обычный counter на функция {count}
    </button>;
};