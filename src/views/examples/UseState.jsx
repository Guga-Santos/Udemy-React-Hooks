import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{ count }</span>
                <div>
                    <button 
                    className="btn"
                    type='button'
                    onClick={() => setCount(count -1)}
                    disabled={ count < 1}
                    >-1</button>
                    <button 
                    className="btn"
                    type='button'
                    onClick={() => setCount(count +1)}
                    >+1</button>
                    <button 
                    className="btn"
                    type='button'
                    onClick={() => setCount(current => current + 100)}
                    >+100</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <input 
            type="text" 
            className="input"
            placeholder='Digite algo aqui...'
            value={ name }
            onChange={(e) => setName(e.target.value)} />
            <span className="text">{ name }</span>
        </div>
    )
}

export default UseState
