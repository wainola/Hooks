import React, { useState, useEffect } from 'react'

export const OtherComponent = () => {
    const [fields, setFields] = useState({ name: undefined, lastname: undefined })
    const [foo, setFoo] = useState([])

    function handleChange(evt){
        console.log(evt.target.value)
        setFields({
            ...fields,
            [evt.target.name]: evt.target.value
        })
    }

    function mouseMove(evt){
        console.log('mouse moving!!')
    }

    useEffect(() => {
    })

    console.log('currentState', fields)
    console.log('currentFoo', foo)
    return (
        <div>
            <form>
                <input type="text" name='name' onChange={handleChange}/>
                <input type="text" name='lastname' onChange={handleChange}/>
            </form>
        </div>
    )
}