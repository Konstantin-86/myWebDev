import { BallTriangle } from "react-loader-spinner";

import "../../styles/components/preload/preload.scss";

const Preload = () => {
  return (
    <>
      <div className="preload__wrap">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#b49463"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};
export default Preload;
