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
import { Checkbox } from "./ui/checkbox";
import { motion } from "motion/react";
import { useState } from "react";
import { User, Lock, Eye, EyeOff, Mail, Phone } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export function SignupModal({
  isOpen,
  onClose,
  onSwitchToLogin,
}: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      // update password match using the next state values
      const pw = String(next.password);
      const cpw = String(next.confirmPassword);
      setPasswordMatch(pw === cpw || cpw === "");
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock successful signup
    console.log("Signup attempted with:", formData);
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gray-800">
            Join TransportBooking
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Create your account and start your journey with us
          </DialogDescription>
        </DialogHeader>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4 mt-6"
        >
          {/* Full Name Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-name" className="text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                style={{ paddingLeft: "7px" }}
              >
                <User className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="signup-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-10 h-10 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-email" className="text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                style={{ paddingLeft: "7px" }}
              >
                <Mail className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-10 h-10 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-phone" className="text-gray-700">
              Phone Number
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                style={{ paddingLeft: "7px" }}
              >
                <Phone className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="signup-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-10 h-10 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-password" className="text-gray-700">
              Password
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                style={{ paddingLeft: "7px" }}
              >
                <Lock className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                style={{ paddingLeft: "2rem" }}
                className="pl-10 pr-10 h-10 border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20 transition-colors"
                required
                aria-invalid={!passwordMatch}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ paddingRight: "1rem" }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 z-10"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-confirm-password" className="text-gray-700">
              Confirm Password
            </Label>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                style={{ paddingLeft: "7px" }}
              >
                <Lock className="text-gray-400 w-5 h-5" />
              </div>
              <Input
                id="signup-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                style={{ paddingLeft: "2rem" }}
                className={`pl-10 pr-10 h-10 transition-colors ${
                  passwordMatch
                    ? "border-gray-300 focus:border-[#c92121] focus:ring-[#c92121] focus:ring-opacity-20"
                    : "border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-opacity-20"
                }`}
                required
                aria-invalid={!passwordMatch}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ paddingRight: "1rem" }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 z-10"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-sm text-red-500">Passwords do not match</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                handleInputChange("agreeToTerms", !!checked)
              }
              className="mt-1 border-gray-300 data-[state=checked]:bg-[#c92121] data-[state=checked]:border-[#c92121]"
            />
            <Label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-relaxed"
            >
              I agree to the{" "}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                className="text-[#c92121] hover:text-[#a01a1a] transition-colors"
              >
                Terms of Service
              </motion.button>{" "}
              and{" "}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                className="text-[#c92121] hover:text-[#a01a1a] transition-colors"
              >
                Privacy Policy
              </motion.button>
            </Label>
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-2"
          >
            <Button
              type="submit"
              className="w-full bg-[#c92121] hover:bg-[#a01a1a] text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading || !formData.agreeToTerms}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-r-transparent rounded-full"
                  aria-hidden="true"
                />
              ) : (
                "Create Account"
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

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <motion.button
                type="button"
                onClick={onSwitchToLogin}
                whileHover={{ scale: 1.05 }}
                className="text-[#c92121] hover:text-[#a01a1a] font-medium transition-colors"
              >
                Sign in here
              </motion.button>
            </p>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
