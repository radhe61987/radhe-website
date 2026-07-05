import React from 'react';
import salonData from '../salon-info.json';
import { 
  Phone, 
  Eye, 
  Smile, 
  User, 
  Sparkle, 
  Sparkles, 
  Flower, 
  Scissors, 
  Gem 
} from 'lucide-react';

const getServiceIcon = (id: string, className?: string) => {
  switch (id) {
    case 'eyebrow-threading':
      return <Eye className={className} />;
    case 'upper-lips':
      return <Smile className={className} />;
    case 'full-face':
      return <User className={className} />;
    case 'arms-wax':
    case 'legs-wax':
    case 'under-arms':
      return <Sparkle className={className} />;
    case 'henna-tattoo':
      return <Flower className={className} />;
    case 'hair-tinsel':
      return <Sparkles className={className} />;
    case 'facial':
      return <Gem className={className} />;
    default:
      return <Sparkle className={className} />;
  }
};

export default function PrintableFlyer() {
  const { salonInfo, services } = salonData;

  const bgClass = 'bg-[#FAF8F5] text-stone-900';
  const accentText = 'text-[#8C7355]';
  const borderColorClass = 'border-[#8C7355]';
  const badgeBg = 'bg-[#F4F1EA]';
  const dottedLeaderColor = 'border-stone-300';
  const softLabelColor = 'text-stone-500';

  const borderClasses = 'border-8 border-double';

  return (
    <div 
      id="printable-flyer" 
      className={`hidden print:block w-full max-w-[8.5in] h-[11in] mx-auto p-12 relative font-sans ${bgClass} ${borderClasses} ${borderColorClass}`}
    >
      {/* Decorative corners */}
      <div className={`absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 ${borderColorClass}`}></div>
      <div className={`absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 ${borderColorClass}`}></div>
      <div className={`absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 ${borderColorClass}`}></div>
      <div className={`absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 ${borderColorClass}`}></div>

      {/* Header Section */}
      <div className="text-center mb-8 pt-6 border-b pb-6 border-current/10" id="flyer-header">
        <div className="flex justify-center items-center gap-2.5 mb-2">
          <Sparkle className={`h-4 w-4 ${accentText} opacity-60`} />
          <Flower className={`h-6 w-6 ${accentText} opacity-80`} />
          <Sparkle className={`h-4 w-4 ${accentText} opacity-60`} />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-[0.05em] uppercase leading-none">
          {salonInfo.name}
        </h1>

        {/* Quick Contacts Panel */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-current/10 pt-5 text-[10px] uppercase tracking-[0.1em] font-semibold" id="flyer-quick-contacts">
          <div className="flex flex-col items-center justify-center border-r border-current/10">
            <span className={`${softLabelColor} text-[8px] tracking-[0.15em] mb-0.5`}>Call or Text</span>
            <span className="font-bold text-xs">{salonInfo.contactFormatted}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className={`${softLabelColor} text-[8px] tracking-[0.15em] mb-0.5`}>Serving Communities</span>
            <span className="font-semibold text-center">{salonInfo.servingAreas.slice(0, 4).join(' • ')}</span>
          </div>
        </div>
      </div>

      {/* Services Menu Main Section (Flat, No Categories, No Descriptions) */}
      <div className="space-y-4 px-6 my-auto pt-6" id="flyer-services-grid">
        <div className="flex items-center gap-2.5 border-b border-current/10 pb-1.5">
          <span className={`font-serif text-[11px] px-2 py-0.5 border uppercase tracking-[0.2em] font-bold ${badgeBg} ${borderColorClass}`}>MENU</span>
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Services & Treatments</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 pt-2">
          {services.map((srv) => (
            <div key={srv.id} className="flex justify-between items-center text-sm font-semibold" id={`flyer-srv-${srv.id}`}>
              <div className="flex items-center gap-3">
                <span className={`${accentText} opacity-85 flex-shrink-0`}>
                  {getServiceIcon(srv.id, "h-5 w-5")}
                </span>
                <span className="uppercase tracking-wider">{srv.name}</span>
              </div>
              <span className={`mx-3 flex-grow border-b border-dotted ${dottedLeaderColor}`}></span>
              <span className={`font-serif font-bold ${accentText}`}>${srv.price}{srv.hasPlus ? '+' : ''}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Safety and Standards Panel */}
      <div className={`mt-12 p-5 border text-center ${badgeBg} border-current/10`} id="flyer-safety-panel">
        <h3 className="text-[11px] uppercase tracking-[0.15em] font-bold mb-1.5">
          Hygienic & Sanitized Standards Guaranteed
        </h3>
        <p className={`text-[9.5px] max-w-xl mx-auto leading-normal ${softLabelColor}`}>
          100% sanitary cotton thread, organic skin-safe henna pastes, and single-use sanitized applicators. Your satisfaction, hygiene, and beauty comfort are our utmost priority.
        </p>
      </div>

      {/* Flyer footer / CTA */}
      <div className="absolute bottom-8 left-12 right-12 text-center border-t border-current/10 pt-5" id="flyer-footer">
        <p className="text-xs font-semibold uppercase tracking-[0.15em]">
          Call or Text to Schedule: <span className={`${accentText} font-bold text-sm`}>{salonInfo.contactFormatted}</span>
        </p>
        <p className={`text-[9px] uppercase tracking-[0.10em] mt-1.5 ${softLabelColor}`}>
          Serving: {salonInfo.servingAreas.join(' • ')} NoVa Communities
        </p>
      </div>
    </div>
  );
}
