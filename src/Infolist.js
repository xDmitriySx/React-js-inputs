import React from 'react'

const Infolist = ({ info }) => {
    const infoItems = info.map(item => {
        return(
            <div key={item.id}>
                <div> Name: { item.name } </div>
                <div> Age: { item.age } </div>
                <div> Belt: { item.belt } </div>
            </div>
        )
    })

    return(
        <div>
            { infoItems }
        </div>
    )
}

export default Infolist