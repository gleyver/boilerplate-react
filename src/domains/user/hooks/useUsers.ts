import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

type User = {
  id: number;
  name: string;
  email: string;
};

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return { users, loading };
} 