export function LogoMark({ size = 28 }: { size?: number }) {
  return <svg className="brand-mark" width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <g transform="translate(32 32) rotate(30) scale(1.16) translate(-32 -32)">
      <rect x="11" y="21" width="11" height="28" rx="5.5" fill="currentColor" opacity=".55"/>
      <rect x="26.5" y="9" width="11" height="46" rx="5.5" fill="currentColor"/>
      <rect x="42" y="15" width="11" height="26" rx="5.5" fill="currentColor" opacity=".55"/>
    </g>
  </svg>;
}
