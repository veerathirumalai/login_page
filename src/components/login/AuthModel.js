import { useState } from 'react';

export function useAuthModel() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const updateFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleSignUp = (status) => setIsSignUp(status);
    const togglePasswordFocus = (status) => setIsPasswordFocused(status);

    return {
        isSignUp,
        isPasswordFocused,
        mousePos,
        setMousePos,
        formData,
        updateFormData,
        toggleSignUp,
        togglePasswordFocus
    };
}