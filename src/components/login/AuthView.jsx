import React from 'react';
import './AuthPage.css'; // Keep your Ben-10 CSS file here

export default function AuthView({ model, handleSubmit }) {
    const {
        isSignUp,
        isPasswordFocused,
        mousePos,
        updateFormData,
        toggleSignUp,
        togglePasswordFocus
    } = model;

    const pupilStyle = {
        transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`
    };

    return (
        <div className="auth-body">
            {/* The Action Hero Mascot */}
            <div className={`hero-mascot ${isPasswordFocused ? 'covering-eyes' : ''}`}>
                <div className="hair"></div>
                <div className="head">
                    <div className="hero-ear left-ear"></div>
                    <div className="hero-ear right-ear"></div>

                    <div className="hero-eye left-eye">
                        <div className="eyelid"></div>
                        <div className="hero-pupil" style={isPasswordFocused ? {} : pupilStyle}>
                            <div className="glint"></div>
                        </div>
                    </div>

                    <div className="hero-eye right-eye">
                        <div className="eyelid"></div>
                        <div className="hero-pupil" style={isPasswordFocused ? {} : pupilStyle}>
                            <div className="glint"></div>
                        </div>
                    </div>

                    <div className="hero-nose"></div>
                    <div className="hero-mouth"><div className="teeth"></div></div>
                </div>

                <div className="hero-arm left-arm"><div className="hero-hand"></div></div>
                <div className="hero-arm right-arm">
                    <div className="alien-watch"><div className="watch-dial"></div></div>
                    <div className="hero-hand"></div>
                </div>
            </div>

            <div className={`auth-container ${isSignUp ? 'right-panel-active' : ''}`}>

                {/* Sign Up Form */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Hero Academy</h1>
                        <span className="subtitle">Activate your powers</span>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Codename" required onChange={updateFormData} />
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Comms Email" required onChange={updateFormData} />
                        </div>
                        <div className="input-group">
                            <input
                                type="password" name="password" placeholder="Secret Passcode" required
                                onChange={updateFormData}
                                onFocus={() => togglePasswordFocus(true)}
                                onBlur={() => togglePasswordFocus(false)}
                            />
                        </div>
                        <button type="submit" className="action-btn">Transform</button>
                        <p className="mobile-switch" onClick={() => toggleSignUp(false)}>Already a hero? Log In</p>
                    </form>
                </div>

                {/* Sign In Form */}
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Welcome Back!</h1>
                        <span className="subtitle">Ready for action?</span>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Comms Email" required onChange={updateFormData} />
                        </div>
                        <div className="input-group">
                            <input
                                type="password" name="password" placeholder="Secret Passcode" required
                                onChange={updateFormData}
                                onFocus={() => togglePasswordFocus(true)}
                                onBlur={() => togglePasswordFocus(false)}
                            />
                        </div>
                        <a href="#" className="forgot-pass">Forgot your passcode?</a>
                        <button type="submit" className="action-btn">Access</button>
                        <p className="mobile-switch" onClick={() => toggleSignUp(true)}>Need access? Sign Up</p>
                    </form>
                </div>

                {/* Overlays */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2>Status: Active</h2>
                            <p>Already have your credentials? Access the database here.</p>
                            <button className="ghost-btn" onClick={() => toggleSignUp(false)}>Log In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2>New Recruit?</h2>
                            <p>Enter your details and join the fight to save the galaxy.</p>
                            <button className="ghost-btn" onClick={() => toggleSignUp(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}