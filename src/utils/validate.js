export const checkValidData = (name, email, password, isSignInForm) => {
    if (!email || email.trim().length === 0) return "Email is Required";
    if (!password || password.trim().length === 0) return "Password is Required";

    // 🚨 Full Name required only for Sign Up
    if (!isSignInForm) {
        if (!name || name.trim().length === 0) return "Enter Full Name";
    }
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if (!isEmailValid) return "Email is not Valid"
    if (!isPasswordValid) return "Password is not Valid"

    return null
}