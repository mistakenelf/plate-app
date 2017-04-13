import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

const Loader = () => {
  return (
    <div className="loader" style={style.container}>
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={style.refresh}
      />
      <style jsx>
        {`
          .loader {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
