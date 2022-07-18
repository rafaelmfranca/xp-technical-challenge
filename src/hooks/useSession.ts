import { useEffect, useState } from 'react';

export default function useSession() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setEmail(JSON.parse(session));
    }
  }, []);

  return { email };
}
