import Card from "./showInfo/Card";

const SingleProperty = () => {
const properties = [
  {
    id: 1,
    name: "آپارتمان لوکس در شهر نو",        // title
    email: "مسعود کاکر",                    // agentName
    info: [
      { label: "قیمت", value: "250,000$" },
      { label: "نوع معامله", value: "فروش" },   // sell
      { label: "تاریخ ثبت", value: "2026/05/02" },
    ],
  },
  {
    id: 2,
    name: "خانه ویلایی در کارته سه",
    email: "احمد فهیم",
    info: [
      { label: "قیمت", value: "1,200$ / ماه" },
      { label: "نوع معامله", value: "اجاره" },  // rent
      { label: "تاریخ ثبت", value: "2026/03/18" },
    ],
  },
  {
    id: 3,
    name: "زمین تجاری در مزار شریف",
    email: "زهره محمدی",
    info: [
      { label: "قیمت", value: "90,000$" },
      { label: "نوع معامله", value: "فروش" },
      { label: "تاریخ ثبت", value: "2025/11/10" },
    ],
  },
];
  return (
    <div className="bg-white">
        {
            properties.map((property) => {
              return <Card key={property.id} cardItem={property} />
            })
        }
    </div>
  )
}

export default SingleProperty;
