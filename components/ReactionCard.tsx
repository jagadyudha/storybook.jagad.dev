interface ReactionCardProps {
  count: number;
  isActive: boolean;
}

const ReactionCard = ({ count, isActive }: ReactionCardProps) => {
  return (
    <div
      role="button"
      className={`${
        isActive ? "bg-[#202022]" : "bg-background_100"
      } general-ring-state flex flex-1 flex-col items-center rounded-lg py-4 transition-all duration-1000 max-w-xs`}
    >
      <svg
        className="h-10 w-10"
        id="Layer_1"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{".st16{fill:#fff}"}</style>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="SVGID_1_"
          x1={32}
          x2={32}
          y1={7}
          y2={71.582}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#0AC5B3",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#0AC5B3",
            }}
          />
        </linearGradient>
        <path
          d="M42.7 2.9H21.3c-3.8 0-7.3 2-9.2 5.3L1.4 26.7C-.5 30-.5 34 1.4 37.3l10.7 18.5c1.9 3.3 5.4 5.3 9.2 5.3h21.4c3.8 0 7.3-2 9.2-5.3l10.7-18.5c1.9-3.3 1.9-7.3 0-10.6L51.9 8.2c-1.9-3.3-5.4-5.3-9.2-5.3z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
        />
        <path
          d="m62.6 26.7-4.6-8C56.6 38.4 40.1 54 20 54c-3.3 0-6.5-.4-9.6-1.2l1.8 3c1.9 3.3 5.4 5.3 9.2 5.3h21.4c3.8 0 7.3-2 9.2-5.3l10.7-18.5c1.8-3.3 1.8-7.3-.1-10.6z"
          style={{
            opacity: 0.1,
            fill: "#333",
          }}
        />
        <ellipse
          cx={24.5}
          cy={8.3}
          rx={7.5}
          ry={3.3}
          style={{
            opacity: 0.15,
            fill: "#fff",
          }}
        />
        <path
          className="st16"
          d="M19.3 48.9H17c-2.2 0-4-1.8-4-4V34.5c0-2.2 1.8-4 4-4h2.3c2.2 0 4 1.8 4 4V45c0 2.1-1.8 3.9-4 3.9zM51 35.8c0-.8-.3-1.4-.8-1.9-.6-.6-.7-1.4-.2-2.1.3-.4.4-.9.4-1.5 0-1.5-1.3-2.8-2.8-2.8h-7.9c-1 0-1.8-.9-1.7-1.9.2-1.3.3-3.2.1-5.1-.4-3.5-2.8-5.1-4.1-5.4-.6-.2-1.1.1-1.4.4-.3.3-.5.7-.5 1.1v4.8c0 .3-.1.5-.2.7-.8 1.6-4.1 7.9-4.7 8.8-.1.2-.3.4-.5.6-.9.9-1.4 2.2-1.4 3.4V45c0 .5.2.9.5 1.2 1.7 1.6 3.5 1.5 3.5 1.5h14.9c1.5-.1 2.7-1.3 2.7-2.7v-.1c0-.7.4-1.2 1-1.5.9-.5 1.5-1.4 1.5-2.5 0-.4-.1-.7-.2-1.1-.3-.7-.1-1.4.5-1.8.8-.4 1.3-1.2 1.3-2.2z"
        />
      </svg>
      <span className="mt-2 text-xl font-semibold">{count}</span>
      <span className="text-sm">LIKE</span>
    </div>
  );
};

export default ReactionCard;
