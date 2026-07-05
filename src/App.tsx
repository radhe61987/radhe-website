import React from 'react';
import DigitalFlyerCard from './components/DigitalFlyerCard';
import PrintableFlyer from './components/PrintableFlyer';
import salonData from './salon-info.json';
import { Phone, Printer, Heart, Sparkle, Download, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const { salonInfo } = salonData;
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPng = async () => {
    const node = document.getElementById('digital-flyer-one-side');
    if (!node) return;

    try {
      setIsDownloading(true);
      const { toPng } = await import('html-to-image');
      const dataUrl = await toPng(node, {
        backgroundColor: '#FAF8F5',
        style: {
          transform: 'scale(1)',
          borderRadius: '0px',
        },
        pixelRatio: 3, // Ultra-sharp high resolution
      });

      const link = document.createElement('a');
      link.download = `${salonInfo.name.toLowerCase().replace(/\s+/g, '-')}-digital-flyer.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate flyer image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F5F2EC] bg-grain text-stone-800 font-sans flex flex-col justify-between relative selection:bg-gold-200 selection:text-gold-900 overflow-x-hidden p-4 md:p-8" 
      id="salon-app-root"
    >
      {/* Soft aesthetic radial gradients for background styling */}
      <div className="absolute top-10 -left-16 w-32 h-32 bg-[#E9E3D8] rounded-full blur-2xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-20 -right-20 w-44 h-44 bg-[#E4DCCE] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      {/* Top Brand Strip - Hidden during print */}
      <header className="max-w-xl mx-auto w-full pt-1 pb-4 flex justify-between items-center border-b border-stone-200/60 relative z-10 print:hidden" id="flyer-page-header">
        <div className="flex items-center gap-1.5" id="header-logo">
          <Sparkle className="h-4 w-4 text-[#8C7355] animate-pulse" />
          <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-850">
            {salonInfo.name} Professional Flyer
          </h2>
        </div>
        <button 
          onClick={handlePrint}
          className="text-[#8C7355] hover:text-stone-900 transition-colors flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] font-bold cursor-pointer"
          id="header-print-action"
        >
          <Printer className="h-3.5 w-3.5" />
          <span>Print / PDF</span>
        </button>
      </header>

      {/* Main Container - The Flyer itself is the Website */}
      <main className="flex-grow flex flex-col justify-center items-center py-6 md:py-8 relative z-10 print:hidden" id="flyer-main-content">
        <div className="w-full flex flex-col items-center gap-5" id="flyer-holder">
          
          {/* Subtle design helper */}
          <div className="text-center" id="flyer-intro">
            <span className="text-[8.5px] uppercase tracking-[0.3em] text-[#8C7355] font-extrabold bg-[#F0EAE1] px-3.5 py-1 rounded-sm border border-[#E1D8CB]">
              OFFICIAL SERVICE FLYER
            </span>
          </div>

          {/* The centered flyer component */}
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            className="w-full max-w-[420px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            id="digital-flyer-interactive-view"
          >
            <DigitalFlyerCard />
          </motion.div>

          {/* Call to Action Bar below the flyer */}
          <div className="flex flex-col gap-3 mt-3 w-full max-w-[420px]" id="flyer-quick-actions">
            <a 
              href={`tel:${salonInfo.contact}`}
              className="w-full bg-[#8C7355] text-white py-3 px-4 rounded-sm text-xs uppercase tracking-[0.15em] font-extrabold text-center hover:bg-[#725D43] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              id="cta-call"
            >
              <Phone className="h-4 w-4 animate-pulse text-[#FAF8F5]" />
              <span>Call / Text to Book ({salonInfo.contactFormatted})</span>
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleDownloadPng}
                disabled={isDownloading}
                className="bg-white border border-stone-300 text-stone-700 py-3 px-2 rounded-sm text-[10px] sm:text-xs uppercase tracking-widest font-bold text-center hover:bg-stone-50 hover:text-stone-900 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                id="cta-download-png"
              >
                {isDownloading ? (
                  <Loader2 className="h-4 w-4 animate-spin text-[#8C7355]" />
                ) : (
                  <Download className="h-4 w-4 text-[#8C7355]" />
                )}
                <span>{isDownloading ? 'Saving...' : 'Download PNG'}</span>
              </button>
              
              <button 
                onClick={handlePrint}
                className="bg-white border border-stone-300 text-stone-700 py-3 px-2 rounded-sm text-[10px] sm:text-xs uppercase tracking-widest font-bold text-center hover:bg-stone-50 hover:text-stone-900 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                id="cta-print"
              >
                <Printer className="h-4 w-4 text-[#8C7355]" />
                <span>Print / PDF</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Strip - Hidden during print */}
      <footer className="max-w-xl mx-auto w-full mt-4 pt-4 border-t border-stone-200/60 text-center text-[9px] uppercase tracking-[0.2em] text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10 print:hidden" id="flyer-page-footer">
        <p>© {new Date().getFullYear()} {salonInfo.name}. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <span>Precision Beauty Services</span>
          <Heart className="h-3 w-3 text-[#8C7355] fill-[#8C7355]" />
          <span>NoVa, Virginia</span>
        </div>
      </footer>

      {/* Hidden high fidelity printable single-sheet flyer strictly designed for real physical paper */}
      <PrintableFlyer />

    </div>
  );
}
