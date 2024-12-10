// export default HomePage;

import {useState, useEffect} from 'react';
import HomePage from '../components/Home/index';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // eslint-disable-next-line react/react-in-jsx-scope
  return <HomePage />;
}
