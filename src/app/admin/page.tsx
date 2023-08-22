import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <div className="container">
          <div className="m-3">
            <small>You Are Logged In As Admin!</small>
            <a className="btn btn-danger d-block" href="/api/auth/signout">Sign Out</a>
          </div>
        </div>
      ): (
        <div className="mt-5 text-center">Access Denied!</div>
      )}
    </>
  );
}