const ErrorIcon = () => (
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#FEF2F2"/>

    <g transform="translate(150, 70)">
      <circle cx="0" cy="0" r="25" fill="#FCA5A5" opacity="0.3"/>
      <line x1="-12" y1="-12" x2="12" y2="12" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
      <line x1="12" y1="-12" x2="-12" y2="12" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
    </g>

    <text x="150" y="130" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#DC2626" fontWeight="bold">
      موفق ب گرفتن عکس نشدیم
    </text>

    <text x="150" y="155" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#9CA3AF">
      لطفا دیرتر کوشش کنید
    </text>

    <rect x="110" y="165" width="80" height="25" rx="12" fill="#DC2626" opacity="0.1" cursor="pointer"/>
    <text x="150" y="183" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#DC2626" fontWeight="bold" cursor="pointer">
      ⟳ دوباره کوشش کنید
    </text>
  </svg>
);

export default ErrorIcon;