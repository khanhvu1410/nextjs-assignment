export default function AdminLayout({ children }) {
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
          <div className="user-menu">
            <span>Admin User</span>
          </div>
        </header>

        <div className="admin-content">{children}</div>
      </main>
    </div>
  );
}
