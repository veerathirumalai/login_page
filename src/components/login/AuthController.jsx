import React, { useEffect } from 'react';
import { useAuthModel } from './AuthModel';
import AuthView from './AuthView';

export default function AuthController() {
    const model = useAuthModel(); // Initialize Model

    // Controller Logic: Mouse tracking for the mascot's eyes
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            model.setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [model.setMousePos]);

    // Controller Logic: Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(model.isSignUp ? "Registering hero:" : "Logging in hero:", model.formData);
        // Add backend API connection here
    };

    // Pass data and actions to the View
    return (
        <AuthView
            model={model}
            handleSubmit={handleSubmit}
        />
    );
}