
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would make an API call to your authentication service
      if (email && password) {
        // Mock successful login
        const mockUser = {
          id: '1',
          name: email.split('@')[0], // Use part of the email as the name for demo
          email: email,
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        
        return true;
      }
      
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password",
      });
      
      return false;
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "An unexpected error occurred",
      });
      
      return false;
    }
  };

  // Mock register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would make an API call to your authentication service
      if (name && email && password) {
        // Mock successful registration
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        toast({
          title: "Registration Successful",
          description: "Your account has been created!",
        });
        
        return true;
      }
      
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please fill in all required fields",
      });
      
      return false;
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "An unexpected error occurred",
      });
      
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
