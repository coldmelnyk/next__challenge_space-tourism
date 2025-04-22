interface Props {
  width?: string;
  height?: string;
  isHeaderLine: boolean;
}

const LineComp = ({ width, height, isHeaderLine }: Props) => {
  return (
    <>
      {isHeaderLine ? (
        <div className="header-line"></div>
      ) : (
        <div style={{ width, height }} className="line"></div>
      )}
    </>
  );
};

export default LineComp;
