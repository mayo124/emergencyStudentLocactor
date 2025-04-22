
import { User, Phone, Mail } from "lucide-react";

const students = {
  "2014BE04306": {
    name: "Mihir Dhankani",
    class: "2014BE04306",
    photo: "/lovable-uploads/41e3c68f-f9eb-4abb-8e87-e9ae496df74b.png",
    details: [
      { label: "Student ID", value: "2014BE04306" },
    ],
    contacts: [
      {
        label: "Parent (Mom)",
        name: "Mom",
        phone: "9930514109",
        email: "",
        icon: <User className="text-primary-500" size={18} />,
      },
      {
        label: "Parent (Dad)",
        name: "Dad",
        phone: "9920802789",
        email: "",
        icon: <User className="text-primary-300" size={18} />,
      },
      {
        label: "Teacher",
        name: "Class Teacher",
        phone: "9920886789",
        email: "",
        icon: <User className="text-primary-500" size={18} />,
      },
    ],
  },
  "2012BE83422": {
    name: "Shoham Pokle",
    class: "2012BE83422",
    photo: "/lovable-uploads/41e3c68f-f9eb-4abb-8e87-e9ae496df74b.png",
    details: [
      { label: "Student ID", value: "2012BE83422" },
    ],
    contacts: [
      {
        label: "Parent (Mom)",
        name: "Mom",
        phone: "9930514109",
        email: "",
        icon: <User className="text-primary-500" size={18} />,
      },
      {
        label: "Parent (Dad)",
        name: "Dad",
        phone: "9920802789",
        email: "",
        icon: <User className="text-primary-300" size={18} />,
      },
      {
        label: "Teacher",
        name: "Class Teacher",
        phone: "9920886789",
        email: "",
        icon: <User className="text-primary-500" size={18} />,
      },
    ],
  }
};

const StudentContactCard = ({ studentId = "2014BE04306" }) => {
  const student = students[studentId];
  
  return (
    <div className="w-full bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl shadow p-5 flex flex-col items-center border border-primary-200">
      <img
        src={student.photo}
        alt={student.name}
        className="w-24 h-24 rounded-full border-4 border-primary-200 shadow mb-2 object-cover"
      />
      <div className="mb-2">
        <div className="font-extrabold text-lg text-primary-900 flex items-center gap-2 justify-center">
          {student.name}
        </div>
        <div className="text-sm text-primary-600">{student.class}</div>
        <div className="text-xs text-primary-500 mt-1 text-center">
          {student.details.map((item, i) => (
            <span key={item.label}>
              {item.label}: {item.value}
              {i !== student.details.length - 1 && <span className="mx-1">·</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        {student.contacts.map((c, i) => (
          <div
            key={i}
            className="flex items-center bg-background rounded-lg shadow-sm p-2 border border-primary-100"
          >
            {c.icon}
            <div className="ml-2 flex-1">
              <div className="text-xs font-semibold text-primary-700">{c.label}</div>
              <div className="text-sm font-medium text-primary-900">{c.name}</div>
              <div className="flex gap-3 mt-1 text-primary-600 items-center">
                {c.phone && (
                  <a href={`tel:${c.phone}`} className="flex items-center hover:text-primary-800">
                    <Phone size={14} className="mr-1" />
                    <span className="underline">{c.phone}</span>
                  </a>
                )}
                {c.email && (
                  <a href={`mailto:${c.email}`} className="flex items-center hover:text-primary-800">
                    <Mail size={14} className="mr-1" />
                    <span className="underline">{c.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentContactCard;
