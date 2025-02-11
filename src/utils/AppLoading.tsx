import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoaderWithOverlay from '../components/atoms/LoadingWithOverlay';

const AppLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, loadingMessage } = useSelector((state: RootState) => state.ui);

  return (
    <>
      {children}
      {loading && <LoaderWithOverlay variant="secondary" message={loadingMessage} />}
    </>
  );
};

export default AppLoadingProvider;
