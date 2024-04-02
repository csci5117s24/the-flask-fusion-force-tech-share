import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

export default function MyForm() {
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
        console.log("Data: \n", formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        let submitMessage = "You submit the form! Data: \n";
        alert(`${ submitMessage }: ${ formData }`);
        // Reset form data
        setFormData({
            email: '',
            password: '',
            checked: false
        });
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Enter Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name Here" />
                    <Form.Text className="text-muted">
                        Insert any disclaimer text here!
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br></br>
            <Form>
                <fieldset disabled>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name Here" />
                        <Form.Text className="text-muted">
                            Insert any disclaimer text here!
                    </Form.Text>
                    </Form.Group>
                </fieldset>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


            <br></br>
            <Form className="custom-form" onSubmit={handleSubmit}>
                <h1 id="FormTitle">My Form</h1>
                <Form.Label htmlFor="emailInput">Email</Form.Label>
                <InputGroup>
                    <Form.Control placeholder="Email" name="email" id="emailInput" type="email" value={formData.email} onChange={handleChange} required />
                    <InputGroup.Text>Don't forget @example.com!</InputGroup.Text>
                </InputGroup>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Check me out" onChange={handleChange} />
                </Form.Group>
                <Button variant="success" type="submit" className="custom-button">
                    Submit
                </Button>
                <Alert variant="success" controlId="submitAlert" style={{display:'None'}}>
                    <Alert.Heading>You submit the form. Yippie!</Alert.Heading>
                </Alert>
            </Form>
        </div>
    );
}
