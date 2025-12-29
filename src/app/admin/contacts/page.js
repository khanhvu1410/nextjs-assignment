import { CONTACTS_LIMIT } from '@/constant/pagination-limit';
import { getContacts } from '@/api-service/contacts';
import Pagination from '@/components/shared/Pagination';
import { cookies } from 'next/headers';

export default async function ContactsPage({ searchParams }) {
  const page = (await searchParams).page;
  const limit = CONTACTS_LIMIT;

  const accessToken = (await cookies()).get('session')?.value;
  const contacts = await getContacts({ page, limit, accessToken });

  return (
    <div className="admin-table-container">
      <div className="admin-table-header">
        <h2>Contacts</h2>
        <div className="admin-actions">
          <button className="btn-admin success">
            <i className="fa fa-plus"></i> Add Contact
          </button>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.data.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>
                {contact.message.length <= 50
                  ? contact.message
                  : `${contact.message?.substring(0, 50)}...`}
              </td>
              <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
              <td className="admin-actions">
                <button
                  className="btn-admin secondary"
                  style={{ marginRight: '0.5rem' }}
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button className="btn-admin danger">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {contacts?.pagination.totalPages > 1 && (
        <Pagination
          currentPage={contacts?.pagination.currentPage}
          totalPages={contacts?.pagination.totalPages}
          baseUrl="/admin/contacts"
          forAdmin={true}
        />
      )}
    </div>
  );
}
