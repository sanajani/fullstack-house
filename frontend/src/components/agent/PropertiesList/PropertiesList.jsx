import PropertyCard from "./PropertyCard";

const properties = [
  { id: 1, title: "آپارتمان لوکس", price: "$85,000", status: "فروشی", views: 234 },
  { id: 2, title: "خانه ویلایی", price: "$120,000", status: "فروشی", views: 156 },
];

const PropertiesList = () => {
  return (
    <section className="px-4 mt-4 space-y-3 pb-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
};

export default PropertiesList;