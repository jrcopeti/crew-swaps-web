import image3 from "../assets/illustration/illustration-3.png";

function SignUpImage() {
  return (
    <div className="hidden p-0 text-center text-base text-base-content/70 xs:text-lg md:p-12 lg:block xl:p-12 ">
      <img
        src={image3}
        alt="signup-image"
        data-testid="signup-image"
        className="h-[600px] w-[500px] object-cover object-center 2xl:h-[700px] 2xl:w-[600px] rounded-lg"
      />
    </div>
  );
}

export default SignUpImage;
