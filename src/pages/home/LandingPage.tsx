import { Link } from "react-router";

// Components
import Feature from "../../components/Feature";
import FooterLandingPage from "../../components/FooterLandingPage";
import TrustedBadge from "../../components/TrustedBadge";
import BgImage from "../../components/BgImage";
import Navbar from "../../components/Navbar";

function LandingPage() {
  return (
    <div className="relative mx-auto flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar type="landing" />
      {/* Left Image */}
      <BgImage className="absolute left-0 top-0 -translate-x-1/3 transform md:-translate-x-1/4" />
      {/* Right Image */}
      <BgImage className="bottom-0 right-0 top-0 translate-x-1/3 translate-y-[275%] rotate-180 transform 3xs:translate-y-[272%] 2xs:translate-y-[270%] xs:translate-y-[222%] md:translate-x-1/4 md:translate-y-[235%] lg:translate-y-[247%]" />
      <div
        data-testid="landing-page"
        className="flex max-w-screen-2xl flex-col items-center justify-center gap-4 p-12 xs:mt-2 xs:p-8 md:gap-6 md:p-12 lg:gap-8 xl:p-20"
      >
        <h1 className="text-center text-4xl font-semibold capitalize leading-[3.5rem] md:text-5xl md:leading-[4rem] lg:text-6xl lg:leading-[4.5rem] 2xl:text-7xl 2xl:leading-[5rem]">
          Swap shifts with your team members fast and easy
        </h1>
        <p className="text-center text-lg text-base-content/80 md:text-2xl lg:text-3xl 2xl:text-4xl">
          Whenever you need to swap shifts, we've got you covered. Just sign in
          and start swapping.
        </p>
        <div className="flex items-center gap-6 xl:gap-14">
          <Feature name="Easy" />
          <Feature name="Fast" />
          <Feature name="Secure" />
        </div>
        <TrustedBadge />
        <div className="mt-2 flex items-center gap-4">
          <Link
            to="/signup"
            className="btn btn-primary text-lg xl:btn-lg lg:text-xl"
          >
            Get Started
          </Link>
          <Link
            to="/how-to-use"
            className="btn btn-outline btn-primary text-lg xl:btn-lg lg:text-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
