import { Bars } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';
const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      {isLoading && (
        <Bars
          height="80"
          width="80"
          color="#551A8B"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </LoaderContainer>
  );
};

export default Loader;
