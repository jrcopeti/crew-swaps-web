function TrustedBadge() {
  return (
    <div className="ml-2 flex w-[300px] items-center justify-center gap-2 rounded-full bg-base-300 p-2 md:w-[340px] lg:w-[380px] xl:w-[420px]">
      <div className="badge badge-primary p-4 text-sm font-semibold md:text-base lg:text-lg xl:text-xl">
        Trusted
      </div>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        by the leading airlines crews ✨
      </p>
    </div>
  );
}

export default TrustedBadge;
