import { Student } from "@/types/Student";

type Props = {
  students: Student[];
};

export const StudentTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-600 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600 bg-gray-800 ">
          <th className="p-3">Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map(item => (
          <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray">
            <td className="p-3 flex item-center">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full mr-3"/>
              <div>
                <div className="font-bold">{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td className="p-3">
              {item.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!item.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td className="p-3">{item.grade1}</td>
            <td className="p-3">{item.grade2}</td>
            <td className="p-3 font-bold">{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1): '--'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
