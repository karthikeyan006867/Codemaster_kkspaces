import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">Welcome Back</h1>
          <p className="text-sm md:text-base text-gray-700">Sign in to continue learning</p>
        </div>
        <SignIn 
          fallbackRedirectUrl="/dashboard"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "bg-white shadow-2xl rounded-2xl border-2 border-gray-200",
              headerTitle: "text-gray-900 font-bold",
              headerSubtitle: "text-gray-600",
              socialButtonsBlockButton: "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
              formButtonPrimary: "bg-gradient-to-r from-primary-500 to-accent-500 hover:opacity-90 text-white font-semibold",
              formFieldLabel: "text-gray-700 font-medium",
              formFieldInput: "bg-white border-2 border-gray-300 text-gray-900 focus:border-primary-500",
              footerActionLink: "text-primary-500 hover:text-primary-600 font-semibold",
              identityPreviewText: "text-gray-700",
              formFieldInputShowPasswordButton: "text-gray-600 hover:text-gray-900",
              otpCodeFieldInput: "border-2 border-gray-300 text-gray-900",
            },
            layout: {
              socialButtonsPlacement: "bottom",
              socialButtonsVariant: "blockButton",
            }
          }}
        />
      </div>
    </div>
  );
}
