import React, { useState, useEffect } from 'react'

function SomeComponent () {
    const [input, setValue] = useState('') 
    const [name, setName] = useState('Barney Stinson')
    const [users, setUsers] = useState([])

    function handleInput(event) {
        setValue(event.target.value)
    }

    function updateName (event){
        event.preventDefault()
        setName(input)
        setValue('')
    }

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(response => {
            console.log('response', response)
            return response.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            username: user.login.username,
            email: user.email,
            image: user.picture.thumbnail
        }))}).then(data => setUsers(data))
    }, [])


    return (
        <div>
            <p>Hello {name}</p>
            <input type="text" onChange={handleInput}/>
            <button onClick={updateName} value={input}>Save</button>
            <ol>
                {users.map(user => (
                    <li>
                        <img src={user.image} alt=""/>
                        <p>
                            {user.name}
                        </p>
                        <p>
                            {user.username}
                        </p>
                        <p>
                            {user.email}
                        </p>
                    </li>
                ))}

            </ol>
        </div>
    )
}

export default SomeComponent