'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../redux/authSlice';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';

export default function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useProtectedRoute();
  const { uid, displayName, email, photoURL } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!uid) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome, {displayName || 'User'}!</h1>
          
          <div className="space-y-4">
            {photoURL && (
              <div className="flex items-center space-x-4">
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
            )}
            
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold mb-4">User Information</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {displayName || 'Not set'}</p>
                <p><span className="font-medium">Email:</span> {email}</p>
                <p><span className="font-medium">UID:</span> {uid}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
