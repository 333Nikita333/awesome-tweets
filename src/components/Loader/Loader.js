import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
      <Oval
        height={150}
        width={150}
        color='rgb(71, 28, 169)'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='rgb(75, 42, 153)'
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
  );
};

export default Loader;
