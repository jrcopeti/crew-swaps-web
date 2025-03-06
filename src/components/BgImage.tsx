import { cn } from "../utils/cn";

function BgImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(`absolute -z-10 h-52 w-52 flex-col`, className)}
      data-testid="bg-image"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light blue line (bottom side of the triangle) */}
        <path
          d="M 0,100 L 100,50"
          style={{ stroke: "var(--color-secondary)", opacity: 0.9 }}
          strokeWidth="17"
          strokeLinecap="round"
          fill="none"
        />

        {/* Dark blue line (top side of the triangle) */}
        <path
          d="M 0,0 L 100,50"
          style={{ stroke: "var(--color-primary)", opacity: 0.9 }}
          strokeWidth="17"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default BgImage;
