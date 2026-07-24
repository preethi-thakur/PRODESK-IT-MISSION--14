'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { loading } = useAuth();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (loading) return;

    router.replace(isAuthenticated ? '/dashboard' : '/login');
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return null;
}