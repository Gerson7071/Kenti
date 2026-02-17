import { useEffect, useState } from 'react';

const useAddress = () => {
  const [address, setAddress] = useState(() => {
    // Get the address from localStorage
    const savedAddress = localStorage.getItem('address');
    return savedAddress ? JSON.parse(savedAddress) : null;
  });

  useEffect(() => {
    // Update localStorage whenever the address changes
    if (address) {
      localStorage.setItem('address', JSON.stringify(address));
    } else {
      localStorage.removeItem('address');
    }
  }, [address]);

  return [address, setAddress];
};

export default useAddress;