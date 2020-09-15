import { useState, useEffect, useRef } from 'react';

function useFormInput(name, validateFn, message) {
    const init = useRef(true);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (init.current) {
            init.current = false;
            return;
        }

        const valid = validateFn(value);
        if (valid && error) {
            setError(false);
        } else if (!valid && !error) {
            setError(true);
        }
        // eslint-disable-next-line
    }, [value]);

    return {
        name,
        error,
        helperText: error ? message : null,
        value,
        onChange: (e) => setValue(e.target.value),
        ref,
    };
}

export default useFormInput;
