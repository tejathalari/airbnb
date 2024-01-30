const User = use('App/Models/User');
const Hash = use('Hash');

class AuthController {
    async signup({ request, response, auth }) {
        try {
            const userData = request.only(['username', 'email', 'password', 'confirmPassword']);
            
            // Check if passwords match
            if (userData.password !== userData.confirmPassword) {
                return response.status(400).json({ message: 'Passwords do not match' });
            }
            
            // Remove confirmPassword from userData before creating the user
            delete userData.confirmPassword;
            
            // Create the user
            const user = await User.create(userData);
            
            return response.status(201).json({ message: 'Signup successful', user });
            
        } catch (error) {
            console.error('Error during signup:', error);
            return response.status(401).json({ message: 'Signup failed', error: error.message });
        }
    }
    
    async login({ request, auth, response }) {
        try {
            const { email, password } = request.only(['email', 'password']);

            const token = await auth.attempt(email, password)

            // Return user and token after successful login
            const user = await User.findBy('email', email, token);
            
            return response.json({ message: 'Login successful', user, token });
        } catch (error) {
            return response.status(401).json({ message: error.message });
        }
    }
}

module.exports = AuthController;