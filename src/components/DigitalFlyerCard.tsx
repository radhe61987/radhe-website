import React from 'react';
import salonData from '../salon-info.json';
import { Sparkles, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

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
          <div className="flex justify-center items-center gap-1.5 mb-1">
            <Sparkles className={`h-3.5 w-3.5 ${accentText}`} />
            <span className={`text-[8.5px] uppercase tracking-[0.25em] font-bold ${softLabelColor}`}>
              Professional Aesthetics
            </span>
            <Sparkles className={`h-3.5 w-3.5 ${accentText}`} />
          </div>
          
          <h1 className="font-serif text-3.5xl font-extrabold tracking-[0.05em] uppercase leading-none mt-1">
            {salonInfo.name}
          </h1>
          <p className="font-serif italic text-[11px] mt-1.5 opacity-90 text-stone-700">
            {salonInfo.subtitle}
          </p>
          <div className="h-[1px] w-24 bg-current mx-auto my-3 opacity-20"></div>
        </div>

        {/* Straight to the Point Services List (No categories, flat list, no descriptions) */}
        <div className="space-y-2.5 my-5" id="flyer-services-list">
          {services.map((srv, idx) => (
            <div key={srv.id} className="flex justify-between items-baseline text-[11.5px] font-bold uppercase tracking-wide">
              <div className="flex items-center gap-2">
                <span className={`text-[8.5px] font-serif font-bold ${accentText} opacity-75`}>
                  {(idx + 1).toString().padStart(2, '0')}
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
          {/* Quick Info badging */}
          <div className="flex justify-between items-center text-[9px] uppercase tracking-wider font-bold px-1" id="flyer-quick-info">
            <div className="flex items-center gap-1">
              <CheckCircle className={`h-3.5 w-3.5 ${accentText}`} />
              <span>Hygienic standard</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className={`h-3.5 w-3.5 ${accentText}`} />
              <span>Organic materials</span>
            </div>
          </div>

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
              {salonInfo.hours} <span className={accentText}>• Call/Text to Book</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
