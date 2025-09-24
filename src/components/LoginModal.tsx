import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { motion } from "motion/react";
import { useState } from "react";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({
  isOpen,
  onClose,
  onSwitchToSignup,
}: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock successful login
    console.log("Login attempted with:", { email, password });
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gray-800">
            Welcome Back
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Sign in to your account to continue your journey
          </DialogDescription>
        </DialogHeader>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 mt-6"
        >
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="login-email" className="text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                style={{ paddingLeft: "7px" }}
              >
                <Mail className="text-gray-400 w-5 h-5 " />
              </div>
              <Input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-0 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="login-password" className="text-gray-700">
              Password
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none "
                style={{ paddingLeft: "7px" }}
              >
                <Lock className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-10 pr-10 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                style={{ paddingRight: "1rem" }}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              className="text-sm text-[#c92121] hover:text-[#a01a1a] transition-colors"
            >
              Forgot your password?
            </motion.button>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-[#c92121] hover:bg-[#a01a1a] text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-r-transparent rounded-full"
                />
              ) : (
                "Sign In"
              )}
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <motion.button
                type="button"
                onClick={onSwitchToSignup}
                whileHover={{ scale: 1.05 }}
                className="text-[#c92121] hover:text-[#a01a1a] font-medium transition-colors"
              >
                Sign up here
              </motion.button>
            </p>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
