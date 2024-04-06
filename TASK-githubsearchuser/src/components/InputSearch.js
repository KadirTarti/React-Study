import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useUserContext } from './UserContext';

const SearchUser = () => {

    const {fetchUserData} = useUserContext();

    const [userInput, setUserInput] = useState('')
    
    const handleInput = (e) =>  {
        setUserInput(e.target.value)      
    }


    //{!userInput.trim()}  


    return (
        <div className="row">
            <div className="col-md-4 mx-auto bg-dark">
                <InputGroup className="mb-3 w-100">
                    <Form.Control
                        placeholder="Github's username"
                        aria-label="Github's username"
                        aria-describedby="basic-addon2"
                        onChange={handleInput}
                    />
                    <Button disabled={!userInput.trim()}  onClick={()=>fetchUserData(userInput)} variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}
export default SearchUser
