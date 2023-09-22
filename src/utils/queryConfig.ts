import { ReactQueryConfig } from 'react-query';

const defaultQueryConfig: ReactQueryConfig = {
  queries: {
    retry: 0,
    refetchOnWindowFocus: false,
  },
};

export default defaultQueryConfig;
