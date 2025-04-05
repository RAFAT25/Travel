
import React, { useState } from "react";

const mockBookings = [
  { id: 1, name: "أحمد علي", trip: "صنعاء - عدن", seats: 2, status: "مؤكد" },
  { id: 2, name: "ليلى محمد", trip: "تعز - إب", seats: 1, status: "معلق" },
  { id: 3, name: "فهد ناصر", trip: "الحديدة - صنعاء", seats: 4, status: "ملغى" },
  { id: 4, name: "سارة خالد", trip: "عدن - صنعاء", seats: 1, status: "مؤكد" },
];

export default function Bookings() {
  const [filter, setFilter] = useState("الكل");

  const filteredBookings = filter === "الكل"
    ? mockBookings
    : mockBookings.filter(b => b.status === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">إدارة الحجوزات</h1>

      <div className="mb-4">
        <label className="mr-2 font-semibold">فلتر حسب الحالة:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="الكل">الكل</option>
          <option value="مؤكد">مؤكد</option>
          <option value="معلق">معلق</option>
          <option value="ملغى">ملغى</option>
        </select>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-right">
            <th className="p-2">#</th>
            <th className="p-2">الاسم</th>
            <th className="p-2">الرحلة</th>
            <th className="p-2">عدد المقاعد</th>
            <th className="p-2">الحالة</th>
            <th className="p-2">إجراء</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking, index) => (
            <tr key={booking.id} className="border-b text-right">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{booking.name}</td>
              <td className="p-2">{booking.trip}</td>
              <td className="p-2">{booking.seats}</td>
              <td className="p-2">{booking.status}</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  تفاصيل
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
