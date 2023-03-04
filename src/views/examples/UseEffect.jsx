import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactorial(n) {
    if (n < 0) return 0
    if (n === 0) return 1
    return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);
    const [parOuImpar, setParOuImpar] = useState('Impar')

    useEffect(() => {
        setFactorial(calcFactorial(+number))
    }, [number]);

    useEffect(() => {
        setParOuImpar(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number]);


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>                
                    <span className="text red">{ factorial }</span>                
                </div>
                <input 
                type="number" 
                className="input"
                value={ number }
                onChange={(e) => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{ parOuImpar }</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
