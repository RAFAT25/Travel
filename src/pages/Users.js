
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "أحمد سالم", email: "ahmed@example.com", role: "مشرف", status: "نشط" },
    { id: 2, name: "منى علي", email: "mona@example.com", role: "عميل", status: "موقوف" },
    { id: 3, name: "فهد ناصر", email: "fahad@example.com", role: "عميل", status: "نشط" },
  ]);

  // لاحقاً يمكنك استبدال هذا الجزء بربط API مثل:
  // useEffect(() => {
  //   fetch("http://yourserver.com/api/users.php")
  //     .then(res => res.json())
  //     .then(data => setUsers(data));
  // }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">إدارة المستخدمين</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-right">
            <th className="p-2">#</th>
            <th className="p-2">الاسم</th>
            <th className="p-2">البريد الإلكتروني</th>
            <th className="p-2">الدور</th>
            <th className="p-2">الحالة</th>
            <th className="p-2">إجراء</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-b text-right">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  تعديل
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
