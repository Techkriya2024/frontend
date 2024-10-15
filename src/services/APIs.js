// const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "https://backend-tech.onrender.com/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendOtp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/resetPasswordToken",
  RESETPASSWORD_API: BASE_URL + "/auth/resetPassword",
}
