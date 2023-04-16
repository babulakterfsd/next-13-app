import Link from 'next/link';
import AuthLayout from './layouts/authLayout';

export default function NotFound() {
  return (
    <AuthLayout>
      <div className="min-h-screen justify-center items-center text-red-500">
        <h2 className="text-2xl">Page Not Found !</h2>
        <Link href="/">
          <button
            type="button"
            className="bg-indigo-500 text-white p-2 rounded-md my-4"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </AuthLayout>
  );
}
