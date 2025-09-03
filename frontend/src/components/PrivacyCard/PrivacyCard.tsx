import { useLanguage } from "../../contexts/LanguageContext";


interface PrivacyCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  bullets?: (string | { section: string; items: string[] })[];
}
 export const PrivacyCard = ({ icon, title, subtitle,bullets  }: PrivacyCardProps): JSX.Element => {
  
      const {isRTL} = useLanguage();
  return (
     <div className="flex flex-col items-start gap-4 p-4 sm:p-8 bg-white rounded-2xl shadow-lg">
  
      <div className='flex items-center gap-3 sm:gap-4'>
           <div className="w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#22ae4b] rounded-lg flex items-center justify-center">{icon}</div>
       <h2 className="font-bold  text-xl sm:text-2xl mb-2 hover:text-[#22ae4b] transition-colors">{title}</h2>
       
      </div>
       <p className="text-gray-600 text-base">{subtitle}</p>
     {bullets && (
        <ul className={`list-disc ${isRTL ? "pr-2 lg:pr-6" : "pl-2 lg:pl-6"} space-y-2 text-gray-700`}>
          {bullets.map((item, idx) =>
            typeof item === "string" ? (
              <li key={idx}>{item}</li>
            ) : (
              <li key={idx} className="list-none">
                <strong className="block mb-1">{item.section}:</strong>
                <ul className={`list-disc mt-1 space-y-1 ${isRTL ? "pr-6" : "pl-6"}`}>
                  {item.items.map((subItem, subIdx) => (
                    <li key={subIdx}>{subItem}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  )
}
