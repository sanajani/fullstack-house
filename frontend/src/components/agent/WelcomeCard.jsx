const WelcomeCard = ({ name }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 m-4 p-4 rounded-xl text-white">
      <h2 className="text-lg font-bold">خوش آمدید، {name}! 👋</h2>
      <p className="text-blue-100 text-sm mt-1">به پنل مدیریت خود خوش آمدید</p>
    </div>
  );
};

export default WelcomeCard;