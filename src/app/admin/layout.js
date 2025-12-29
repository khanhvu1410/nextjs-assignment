'use client';

import { AUTH_URL } from '@/constant/url';
import { useLogout } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    router.push(AUTH_URL.LOGIN);
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin</h2>
        </div>
        <ul className="sidebar-nav">
          <li>
            <a href="/admin/contacts" className="active">
              <i className="fa fa-address-book"></i>
              <span>Contacts</span>
            </a>
          </li>
        </ul>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Contacts Management</h1>
          <div
            className="user-menu logout"
            onClick={() => {
              handleLogout();
            }}
          >
            <i className="fa fa-sign-out "></i>
            Logout
          </div>
        </header>

        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
