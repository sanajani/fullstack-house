const LoadingBigImagesSVG = () => (
  <svg
    width="600"
    height="400"
    viewBox="0 0 300 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="300" height="200" fill="#EFF6FF" />

    <g transform="translate(150, 80)">
      <circle
        cx="0"
        cy="0"
        r="20"
        stroke="#3B82F6"
        strokeWidth="4"
        fill="none"
        strokeDasharray="30 30"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to="360"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    <text
      x="150"
      y="130"
      fontFamily="Arial, sans-serif"
      fontSize="16"
      textAnchor="middle"
      fill="#3B82F6"
    >
      چند لحظه صبر کنید
    </text>

    <text
      x="150"
      y="155"
      fontFamily="Arial, sans-serif"
      fontSize="12"
      textAnchor="middle"
      fill="#6B7280"
    >
      خطا در اتصال
    </text>
  </svg>
);

export default LoadingBigImagesSVG;