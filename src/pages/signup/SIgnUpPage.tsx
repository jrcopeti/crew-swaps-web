import { useState } from "react";
import { Link } from "react-router";

//Components
import BgImage from "../../components/BgImage";
import Logo from "../../components/Logo";
import SignUpImage from "../../components/SignUpImage";

//Assets
import { Eye, EyeOff, Mail } from "lucide-react";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div
      data-testid="signup"
      className="max-h-1/2 relative mx-auto flex min-h-screen flex-col items-center overflow-hidden lg:grid lg:grid-cols-2"
    >
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}
        <BgImage className="2xs:translate-y-[260%] bottom-0 right-0 top-0 translate-x-1/3 translate-y-[260%] rotate-180 transform xs:translate-y-[290%] md:translate-x-1/4 md:translate-y-[235%] lg:translate-y-[247%]" />
      <div className="2xs:mt-4 3xs:mt-4 mx-auto mt-4 flex max-w-screen-lg flex-col items-center justify-center gap-2 p-12 xs:mt-12 xs:gap-4 xs:p-8 md:gap-6 md:p-12 lg:mt-0 lg:gap-8 xl:p-20">
        <div className="flex flex-col items-center gap-2">
          <Logo className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
          <h1 className="text-center text-2xl font-semibold capitalize leading-[3.5rem] xs:text-4xl md:text-5xl md:leading-[4rem] lg:text-[2.7rem] lg:leading-[3.5rem] xl:text-[2.8rem] xl:leading-[3.8rem] 2xl:text-[3.5rem] 2xl:leading-[4.5rem]">
            Create your account
          </h1>
          <p className="text-center text-base font-medium text-base-content/70 xs:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl">
            Please enter your details to get started
          </p>
        </div>
        <div className="flex w-[90%] flex-col gap-3 xs:gap-6">
          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input
              type="text"
              className="grow placeholder:text-neutral"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Mail className="text-neutral" />
          </label>

          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input
              type="text"
              className="grow placeholder:text-neutral"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>

          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input
              type="text"
              className="grow placeholder:text-neutral"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>

          <label className="input input-bordered input-primary flex items-center gap-2 border-neutral">
            <input
              type={showPassword ? "text" : "password"}
              className="grow"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              data-testid="toggle-password"
              className="cursor-pointer text-neutral"
              onClick={handleShowPassword}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </span>
          </label>
          <div className="flex flex-col flex-nowrap items-center justify-center gap-0 xs:flex-row xs:gap-2">
            <p className="text-xs text-base-content/70">
              By registering you agree to our
            </p>
            <Link
              to="/"
              className="link-hover link text-sm font-semibold tracking-wide text-neutral underline-offset-1"
            >
              Terms of Service
            </Link>
          </div>
          <Link to="/" className="btn btn-primary text-lg xl:btn-lg lg:text-xl">
            Sign up
          </Link>
          <div className="flex flex-col flex-nowrap items-center justify-center xs:flex-row xs:gap-2">
            <p className="text-base text-base-content/70 xs:text-lg lg:text-xl">
              Have an account?
            </p>
            <Link
              to="/signin"
              className="link-hover link text-lg font-semibold tracking-wide text-primary xs:text-xl lg:text-2xl"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <SignUpImage />
    </div>
  );
}

export default SignUpPage;
