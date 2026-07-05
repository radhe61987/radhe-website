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

export default function DigitalFlyerCard() {
  const { salonInfo, services } = salonData;

  // Elegant color theme definitions
  const bgClass = 'bg-[#FAF8F5] text-stone-900';
  const accentText = 'text-[#8C7355]';
  const borderColorClass = 'border-[#8C7355]';
  const badgeBg = 'bg-[#F4F1EA]';
  const dottedLeaderColor = 'border-stone-300';
  const softLabelColor = 'text-stone-500';

  // Double border for classy beauty look
  const borderClasses = 'border-8 border-double';

  return (
    <div 
      className={`w-full max-w-[440px] rounded-sm shadow-2xl p-6 md:p-8 relative flex flex-col justify-between overflow-hidden bg-grain transition-all duration-300 ${bgClass} ${borderClasses} ${borderColorClass}`}
      id="digital-flyer-one-side"
      style={{ minHeight: '620px' }}
    >
      {/* Decorative corners */}
      <div className={`absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 ${borderColorClass}`}></div>
      <div className={`absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 ${borderColorClass}`}></div>
      <div className={`absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 ${borderColorClass}`}></div>
      <div className={`absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 ${borderColorClass}`}></div>

      {/* Main Container */}
      <div className="h-full flex flex-col justify-between relative z-10" id="flyer-main-content">
        
        {/* Elegant Minimal Header */}
        <div className="text-center pt-1" id="flyer-header-section">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Sparkle className={`h-3 w-3 ${accentText} opacity-60`} />
            <Flower className={`h-4 w-4 ${accentText} opacity-80`} />
            <Sparkle className={`h-3 w-3 ${accentText} opacity-60`} />
          </div>
          <h1 className="font-serif text-3.5xl font-extrabold tracking-[0.05em] uppercase leading-none">
            {salonInfo.name}
          </h1>
          <div className="h-[1px] w-24 bg-current mx-auto my-3 opacity-20"></div>
        </div>

        {/* Straight to the Point Services List (No categories, flat list, no descriptions) */}
        <div className="space-y-3 my-5" id="flyer-services-list">
          {services.map((srv) => (
            <div key={srv.id} className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wide">
              <div className="flex items-center gap-2.5">
                <span className={`${accentText} opacity-85 flex-shrink-0`}>
                  {getServiceIcon(srv.id, "h-4 w-4")}
                </span>
                <span>{srv.name}</span>
              </div>
              <span className={`flex-grow border-b border-dotted mx-2 ${dottedLeaderColor}`}></span>
              <span className={accentText}>${srv.price}{srv.hasPlus ? '+' : ''}</span>
            </div>
          ))}
        </div>

        {/* Seals & Action Blocks */}
        <div className="space-y-3.5 pt-4 border-t border-current/15">
          {/* Booking Contact Area */}
          <div className={`${badgeBg} p-3 rounded-xs border border-current/10 text-center space-y-1`} id="flyer-booking-block">
            <p className={`text-[8px] uppercase tracking-[0.15em] font-bold ${softLabelColor}`}>
              Serving NoVa: {salonInfo.servingAreas.join(' • ')}
            </p>
            <a 
              href={`tel:${salonInfo.contact}`} 
              className="inline-flex items-center gap-1.5 text-sm font-extrabold tracking-widest text-current hover:underline"
            >
              <Phone className="h-3.5 w-3.5 text-gold-600 animate-pulse" />
              <span>{salonInfo.contactFormatted}</span>
            </a>
            <p className="text-[8px] uppercase tracking-[0.1em] opacity-85">
              <span className={accentText}>Call/Text to Book</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
