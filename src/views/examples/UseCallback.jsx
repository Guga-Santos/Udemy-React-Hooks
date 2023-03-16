import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallBackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback((delta) => {
        setCount(curr => curr + delta);
    }, [setCount])

    // Pra que esteja, de fato, cacheada é necessário adicionar o React.memo no componente que está recebendo a função.

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{ count }</span>

                <UseCallBackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
