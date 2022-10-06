export const WalletIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >

<path fill-rule="evenodd" clip-rule="evenodd"  fill="#200E32"/>
      <path fill-rule="evenodd" clip-rule="evenodd" 
      d="M7.67012 1.99991H16.3401C19.7301 1.99991 22.0001 4.37991 22.0001 7.91991V16.0909C22.0001 19.6199 19.7301 21.9999 16.3401 21.9999H7.67012C4.28012 21.9999 2.00012 19.6199 2.00012 16.0909V7.91991C2.00012 4.37991 4.28012 1.99991 7.67012 1.99991ZM11.4301 14.9899L16.1801 10.2399C16.5201 9.89991 16.5201 9.34991 16.1801 8.99991C15.8401 8.65991 15.2801 8.65991 14.9401 8.99991L10.8101 13.1299L9.06012 11.3799C8.72012 11.0399 8.16012 11.0399 7.82012 11.3799C7.48012 11.7199 7.48012 12.2699 7.82012 12.6199L10.2001 14.9899C10.3701 15.1599 10.5901 15.2399 10.8101 15.2399C11.0401 15.2399 11.2601 15.1599 11.4301 14.9899Z"
      fill={fill}
      // strokeWidth={1.5}
      // strokeLinecap="round"
      // strokeLinejoin="round"
      />
    </svg>
  );
};
