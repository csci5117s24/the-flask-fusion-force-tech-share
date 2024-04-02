import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function SimpleButton() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];
    return (
        <div>
            <>
                <Button variant="primary">Primary Example</Button>{' '}
                <Button variant="secondary">Secondary Example</Button>{' '}
                <Button variant="warning">Warning</Button><br/>
            </><br/>

            <>
                <Button variant="outline-primary">Primary Example</Button>{' '}
                <Button variant="outline-secondary">Secondary Example</Button>{' '}
                <Button variant="outline-warning">Warning</Button><br />
            </>

            <>
                <br />
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </>
        </div>
    )
}