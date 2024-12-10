import {useState, useEffect} from 'react';
import GlobalPage from '../components/Global';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // eslint-disable-next-line react/react-in-jsx-scope
  return <GlobalPage />;
}
