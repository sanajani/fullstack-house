import Card from "./showInfo/Card";

const SingleUser = () => {
    const users = [
  {
    id: 1,
    name: "مسعود کاکر",
    email: "masoud@example.com",
    info: [
      { label: "نقش", value: "نماینده" },
      { label: "ملک‌ها", value: "12" },
      { label: "تاریخ", value: "2026/5/2" },
    ],
  },
  {
    id: 2,
    name: "احمد فهیم",
    email: "ahmad@example.com",
    info: [
      { label: "نقش", value: "کاربر" },
      { label: "ملک‌ها", value: "3" },
      { label: "تاریخ", value: "2026/3/18" },
    ],
  },
  {
    id: 3,
    name: "زهره محمدی",
    email: "zahra@example.com",
    info: [
      { label: "نقش", value: "مدیر" },
      { label: "ملک‌ها", value: "25" },
      { label: "تاریخ", value: "2025/11/10" },
    ],
  },
];

  return (
    <div className="shadow-2xl rounded-md my-2">
        {
          users.map((user, index) => {
             return <Card  key={user?.id} cardItem={user} />
          })  
        }
    </div>
  );
};

export default SingleUser;
