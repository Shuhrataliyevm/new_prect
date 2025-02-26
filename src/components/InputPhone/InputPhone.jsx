import { useState, useMemo, memo, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// eslint-disable-next-line react/display-name
const MyPhoneInput = memo(() => {
    const [phone, setPhone] = useState('');

    const phoneMask = useMemo(() => ({ uz: '(..) ...-..-..' }), []);
    const handleChange = useCallback((value) => {
        setPhone(value);
    }, []);

    return (
        <div className='input-phone'>
            <p id='phone'>Телефон</p>
            <PhoneInput
                country={'uz'}
                value={phone}
                onChange={handleChange}
                masks={phoneMask}
            />
        </div>
    );
});

export default MyPhoneInput;
