// Authentication API functions with dummy data for testing
// Replace these with actual API calls when backend is ready

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ForgotPasswordData {
  email: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
  token?: string;
}

// Dummy users data for testing
const DUMMY_USERS = [
  {
    id: 1,
    name: 'محمد الخضيري',
    email: 'mohammed@khudairi.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'فاطمة الخضيري',
    email: 'fatima@khudairi.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'عبدالله الخضيري',
    email: 'abdullah@khudairi.com',
    password: '123456'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function loginUser(data: LoginData): Promise<AuthResponse> {
  console.log('Login attempt:', data);
  
  // Simulate API delay
  await delay(1500);
  
  // Find user in dummy data
  const user = DUMMY_USERS.find(u => u.email === data.email && u.password === data.password);
  
  if (user) {
    // Simulate successful login
    const response: AuthResponse = {
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      },
      token: 'dummy_jwt_token_' + user.id
    };
    
    console.log('Login successful:', response);
    return response;
  } else {
    // Simulate failed login
    throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
  }
}

export async function signupUser(data: SignupData): Promise<AuthResponse> {
  console.log('Signup attempt:', data);
  
  // Simulate API delay
  await delay(2000);
  
  // Check if email already exists
  const existingUser = DUMMY_USERS.find(u => u.email === data.email);
  
  if (existingUser) {
    throw new Error('البريد الإلكتروني مستخدم بالفعل');
  }
  
  // Simulate successful signup
  const newUser = {
    id: DUMMY_USERS.length + 1,
    name: data.name,
    email: data.email,
    password: data.password
  };
  
  // Add to dummy users (in real app, this would be saved to database)
  DUMMY_USERS.push(newUser);
  
  const response: AuthResponse = {
    success: true,
    message: 'تم إنشاء الحساب بنجاح',
    data: {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    }
  };
  
  console.log('Signup successful:', response);
  return response;
}

export async function forgotPassword(data: ForgotPasswordData): Promise<AuthResponse> {
  console.log('Forgot password attempt:', data);
  
  // Simulate API delay
  await delay(1500);
  
  // Check if email exists in dummy data
  const user = DUMMY_USERS.find(u => u.email === data.email);
  
  if (!user) {
    throw new Error('البريد الإلكتروني غير مسجل في النظام');
  }
  
  // Simulate successful password reset email
  const response: AuthResponse = {
    success: true,
    message: 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني',
    data: {
      email: data.email,
      resetToken: 'dummy_reset_token_' + user.id
    }
  };
  
  console.log('Password reset email sent:', response);
  return response;
}

// Additional utility functions for when you implement the backend

export async function resetPassword(token: string, newPassword: string): Promise<AuthResponse> {
  console.log('Reset password attempt:', { token, newPassword });
  
  await delay(1500);
  
  // In real implementation, verify token and update password
  return {
    success: true,
    message: 'تم تغيير كلمة المرور بنجاح'
  };
}

export async function verifyToken(token: string): Promise<AuthResponse> {
  console.log('Token verification:', token);
  
  await delay(500);
  
  // In real implementation, verify JWT token
  if (token.startsWith('dummy_jwt_token_')) {
    const userId = token.split('_').pop();
    const user = DUMMY_USERS.find(u => u.id.toString() === userId);
    
    if (user) {
      return {
        success: true,
        message: 'Token صالح',
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        }
      };
    }
  }
  
  throw new Error('Token غير صالح');
}

// Export dummy users for testing purposes
export { DUMMY_USERS };