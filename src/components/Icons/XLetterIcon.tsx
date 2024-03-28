export default function XLetterIcon({
  width = 16,
}: {
  width?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      viewBox="0 0 16 16"
      width={width}
      fill="#fff"
      style={{ minWidth: width }}
    >
      <path d="m0 0h16v16h-16z" fill="#FA4873" />
      <path d="m13.707 3.707-1.414-1.414-4.293 4.293-4.293-4.293-1.414 1.414 4.293 4.293-4.293 4.293 1.414 1.414 4.293-4.293 4.293 4.293 1.414-1.414-4.293-4.293z" />
    </svg>
  );
}
