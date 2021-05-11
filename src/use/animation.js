import { useState, useContext, useEffect } from 'react';
import {ThemeContext} from "../context/ThemeContext";

export function useAnimation () {
    const { type } = useContext(ThemeContext);
    const [ animation, setAnimation] = useState('')
    const [ timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        clearTimeout(timeoutId);
        setAnimation('');
        setTimeout(() => setAnimation('fade-in'), 500)
        setTimeoutId(
            setTimeout(() => setAnimation(''), 500)
        );
    // eslint-disable-next-line
    }, [type]);


    return {
        animation
    }
}