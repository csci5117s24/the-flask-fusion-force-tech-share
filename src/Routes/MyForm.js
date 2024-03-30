import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function MyForm(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        checked: false
    });
        
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You submit the form");
        return <Navigate replace to="/" />;
    };

    
    return (
        <Form className="custom-form" onSubmit={handleSubmit}> 
            <h1 id="FormTitle">My Form</h1>
            <Form.Label htmlFor="emailInput">Email</Form.Label>
            <InputGroup>
                <Form.Control placeholder="Email" name="email" id="emailInput" type="email" value={formData.email} onChange={handleChange} required/>
                <InputGroup.Text>Don't forget @example.com!</InputGroup.Text>
            </InputGroup>


            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" name="password" type="password" value={formData.password} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit" className="custom-button">
                Submit
            </Button>
        </Form>
    );
}
