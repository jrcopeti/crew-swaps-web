import image1 from "../assets/illustration/illustration-1.png";

function SignInImage() {
  return (
    <div className="hidden p-0 text-center text-base text-base-content/70 xs:text-lg md:p-12 lg:block xl:p-12">
      <img
        src={image1}
        alt="signin-image"
        data-testid="signin-image"
        className="h-[600px] w-[500px] object-cover object-center 2xl:h-[700px] 2xl:w-[600px] rounded-lg"
      />
    </div>
  );
}

export default SignInImage;
