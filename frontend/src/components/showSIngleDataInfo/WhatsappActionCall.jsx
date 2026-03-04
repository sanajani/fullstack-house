import { FaWhatsapp } from "react-icons/fa";

const WhatsappActionCall = ({phoneNumber1, propertyData}) => {

     if (!phoneNumber1) return <p>شماره نماینده موجود نبود</p>;
    // phoneNumber1 = '0799801435'

  // Clean phone number
  const cleanNumber = phoneNumber1.replace(/\D/g, '');
  const withCountyCode = `93${cleanNumber.slice(1)}`
  
  // Property-aware message in Dari
  const message = encodeURIComponent(
    `السلام علیکم! \n\n` +
    `ما در مورد ملک شما در ${propertyData?.location?.city || 'کابل'} پرسجو داریم:\n` +
    `🏠 ${propertyData?.title || ''}\n` +
    `💰 ${propertyData?.price?.amount?.toLocaleString()} افغانۍ\n` +
    `آیا هنوز موجود است؟`
  );
  
  const whatsappLink = `https://wa.me/${withCountyCode}?text=${message}`;

  return (
   <a
          href={whatsappLink}
          target='_blank'
          rel="noopener noreferrer"
        //   onClick={handleClick}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-200 active:scale-95 animate-bounce"
        >
          <FaWhatsapp size={20} />
          <span>تماس با نماینده</span>
        </a>  )
}

export default WhatsappActionCall