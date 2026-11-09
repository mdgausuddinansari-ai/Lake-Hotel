/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  CheckCircle2,
  MapPin,
  Star,
  Wifi,
  Tv,
  Coffee,
  Shield,
  Clock,
  Navigation,
  HeartPulse,
  ChevronRight,
  X,
  Copy,
  Check,
  Bed,
  Maximize2,
  ArrowRight,
  Menu,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';

// Room type definitions
interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  originalPrice: number;
  image: string;
  capacity: string;
  bedType: string;
  size: string;
  idealFor: string;
  description: string;
  amenities: string[];
  features: string[];
}

const ROOM_DATA: RoomType[] = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    tagline: 'Quiet comfort with king-size luxury',
    pricePerNight: 2499,
    originalPrice: 3200,
    image: '/src/assets/images/hotel_hero_sanctuary.jpg',
    capacity: '2 Adults + 1 Child',
    bedType: '1 Luxury King Bed',
    size: '240 sq. ft.',
    idealFor: 'Couples, solo travelers & medical attendants',
    description: 'Impeccably designed bedroom offering plush king bedding, custom warm wood accents, individual climate control, and sound insulation for peaceful nights right in Dhakuria.',
    amenities: [
      'Split Air Conditioning',
      'High-Speed Optical Wi-Fi',
      '43" Smart LED TV with Cable',
      'Tea & Coffee Maker',
      'Private Bathroom with 24/7 Hot Water',
      'Complimentary Bottled Water',
      'Daily Sanitized Housekeeping',
      'Intercom & Concierge Service'
    ],
    features: ['Plush King Bed', 'Soundproof Windows', 'Modern Shower Cubicle', 'Work Station']
  },
  {
    id: 'executive-twin',
    name: 'Executive Twin Room',
    tagline: 'Dual beds ideal for medical companions & corporate travelers',
    pricePerNight: 2899,
    originalPrice: 3600,
    image: '/src/assets/images/executive_twin_room_1794217921289.jpg',
    capacity: '2 Adults',
    bedType: '2 Comfortable Single Beds',
    size: '260 sq. ft.',
    idealFor: 'Medical attendants, business colleagues & friends',
    description: 'Tailored for visitors needing flexible dual-bed arrangements. Features an ergonomic study desk, high-speed Wi-Fi, and tranquil ambience directly opposite AMRI Hospital.',
    amenities: [
      'Two Separate Single Beds',
      'Ergonomic Work Desk & Chair',
      'Split Air Conditioning',
      'High-Speed Optical Wi-Fi',
      '43" Smart LED TV',
      'Electric Kettle & Beverage Kit',
      'En-Suite Bathroom with Geyser',
      'Wardrobe with Luggage Space'
    ],
    features: ['Two Twin Beds', 'Ergonomic Desk', 'Opposite AMRI Gate', 'In-Room Dining']
  },
  {
    id: 'family-lake-suite',
    name: 'Family Lake Suite',
    tagline: 'Expansive premium suite with lounge & serene views',
    pricePerNight: 3999,
    originalPrice: 4800,
    image: '/src/assets/images/family_lake_suite_1794217921355.jpg',
    capacity: '3-4 Adults / Family',
    bedType: '1 King Bed + Velvet Lounge Sofa (Extra Bed available)',
    size: '420 sq. ft.',
    idealFor: 'Families, extended stays & patient recovery companions',
    description: 'The pinnacle of comfort at The Lake Hotel. Features an expansive open-plan layout with an intimate velvet seating lounge, mini-refrigerator, panoramic window, and ample space for luggage.',
    amenities: [
      'Spacious Seating Lounge Area',
      'Master King Bed + Extra Bed Option',
      'Mini Refrigerator',
      '50" Smart 4K LED TV',
      'Tea & Coffee Station',
      'Spacious Modern En-Suite with Toiletries',
      'Lake & City Greenery Glimpse',
      'Priority Concierge & Room Service'
    ],
    features: ['Separate Lounge Area', 'Mini Fridge', 'City/Lake Glimpse', 'Extra Bed Friendly']
  }
];

interface ReviewItem {
  id: string;
  guestName: string;
  origin: string;
  category: 'medical' | 'family' | 'business';
  rating: number;
  date: string;
  reviewTitle: string;
  comment: string;
  stayDetail: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    guestName: 'Sunil Kumar Agrawal',
    origin: 'Patna, Bihar',
    category: 'medical',
    rating: 5,
    date: 'Stayed October 2026',
    reviewTitle: 'Lifesaver for AMRI Hospital patient attendants',
    comment: 'Extremely convenient stay opposite AMRI Hospital Dhakuria. Clean sanitized rooms, courteous staff, and smooth check-in at 2 PM. Being able to walk across the street within 1 minute made our hospital visits effortless.',
    stayDetail: 'Executive Twin Room · 5 nights'
  },
  {
    id: 'rev-2',
    guestName: 'Ananya Roy',
    origin: 'Bengaluru',
    category: 'family',
    rating: 5,
    date: 'Stayed September 2026',
    reviewTitle: 'Peaceful ambience near Rabindra Sarobar & Gariahat',
    comment: 'Great location near Rabindra Sarobar Lake and Gariahat shopping market. Peaceful nights and very comfortable beds. Loved morning walks at the Dhakuria lakes before heading out for puja shopping.',
    stayDetail: 'Deluxe King Room · 3 nights'
  },
  {
    id: 'rev-3',
    guestName: 'Debabrata Sengupta',
    origin: 'Mumbai',
    category: 'business',
    rating: 4,
    date: 'Stayed November 2026',
    reviewTitle: 'Super cooperative front desk team & reliable Wi-Fi',
    comment: 'Super cooperative front desk team, prompt room service, and safe environment. Wi-Fi was fast enough for Zoom calls, and transport was always available right outside. Will definitely book again.',
    stayDetail: 'Deluxe King Room · 2 nights'
  },
  {
    id: 'rev-4',
    guestName: 'Pooja Gupta',
    origin: 'Siliguri',
    category: 'medical',
    rating: 5,
    date: 'Stayed August 2026',
    reviewTitle: 'Clean rooms with 24/7 hot water & warm hospitality',
    comment: 'We stayed for a medical consultation at AMRI. Staff helped with our luggage and provided hot drinking water on request. Very hygienic bathroom and comfortable bedding.',
    stayDetail: 'Family Lake Suite · 4 nights'
  }
];

export default function App() {
  const checkinInputId = useId();
  const checkoutInputId = useId();
  const roomTypeInputId = useId();
  const guestsInputId = useId();
  const formCheckinId = useId();
  const formCheckoutId = useId();
  const formGuestNameId = useId();
  const formPhoneId = useId();
  const formRoomTypeId = useId();
  const formNumGuestsId = useId();
  const formEmailId = useId();
  const formSpecialRequestId = useId();

  // Booking widget & form state
  const [selectedRoomId, setSelectedRoomId] = useState<string>('deluxe-king');
  const [checkinDate, setCheckinDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkoutDate, setCheckoutDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guestCount, setGuestCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('Medical visit to AMRI Hospital');

  // UI state
  const [activeModalRoom, setActiveModalRoom] = useState<RoomType | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'medical' | 'family' | 'business'>('all');
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [bookingSuccessModal, setBookingSuccessModal] = useState<boolean>(false);

  // Calculate nights
  const calculateNights = () => {
    if (!checkinDate || !checkoutDate) return 1;
    const start = new Date(checkinDate);
    const end = new Date(checkoutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const currentRoom = ROOM_DATA.find((r) => r.id === selectedRoomId) || ROOM_DATA[0];
  const estimatedTotal = nights * currentRoom.pricePerNight;

  // Handle WhatsApp Reservation URL generation
  const generateWhatsAppLink = () => {
    const phone = '913346053806';
    const message = `Hello The Lake Hotel, Kolkata!%0A%0AI would like to make a direct reservation inquiry:%0A%0A*Guest Name:* ${encodeURIComponent(guestName || 'Guest')}%0A*Contact Phone:* ${encodeURIComponent(guestPhone || 'Not provided')}%0A*Room Type:* ${encodeURIComponent(currentRoom.name)} (₹${currentRoom.pricePerNight}/night)%0A*Check-in:* ${checkinDate} (2:00 PM)%0A*Check-out:* ${checkoutDate} (11:00 AM)%0A*Stay Duration:* ${nights} Night(s)%0A*Guests:* ${guestCount}%0A*Estimated Tariff:* ₹${estimatedTotal.toLocaleString('en-IN')}%0A*Special Request:* ${encodeURIComponent(specialRequest)}%0A%0APlease confirm availability. Thank you!`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccessModal(true);
  };

  const copyFullAddress = () => {
    const address = "The Lake Hotel, 38 3A Gariahat Road, opposite AMRI Hospital, Dhakuria, South End Park, Keyatala, Kolkata, West Bengal 700029";
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const filteredReviews = reviewFilter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.category === reviewFilter);

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-100 flex flex-col font-sans pb-16 md:pb-0">
      
      {/* 1. TOP TRAVEL ALERT & UTILITY BAR */}
      <aside aria-label="Quick hotel status and contact" className="w-full bg-[#070e1f] border-b border-cyan-900/40 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-0.5">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Opposite AMRI Hospital Dhakuria, Kolkata 700029
            </span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-300">
              Check-in: <strong className="text-white">2:00 PM</strong> · Check-out: <strong className="text-white">11:00 AM</strong>
            </span>
            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              4.2 / 5.0 Rated on Google
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs">
            <a
              href="tel:03346053806"
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition-colors"
              title="Click to Call Reception"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>033 4605 3806</span>
            </a>
            <a
              href="https://wa.me/913346053806"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 2. STICKY LUXURY NAVIGATION BAR (Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-40 bg-[#0b1329]/95 backdrop-blur-md border-b border-cyan-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element wordmark */}
          <a href="#" className="flex flex-col group shrink-0">
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              The Lake Hotel
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 font-medium">
              South Kolkata · Boutique
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#rooms" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Rooms & Suites
            </a>
            <a href="#amenities" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Amenities
            </a>
            <a href="#medical-amri" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              AMRI Hospital Proximity
            </a>
            <a href="#reviews" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Guest Reviews
            </a>
            <a href="#location" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
              Location & Map
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#booking"
              className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 shadow-lg shadow-cyan-900/30 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Check Availability</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e1731] border-b border-cyan-900/50 px-6 py-5 space-y-4">
            <div className="flex flex-col gap-3 text-sm font-medium">
              <a
                href="#rooms"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-200 hover:text-cyan-400"
              >
                Rooms & Suites
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-200 hover:text-cyan-400"
              >
                Amenities & Services
              </a>
              <a
                href="#medical-amri"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-200 hover:text-cyan-400"
              >
                AMRI Hospital Location
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-200 hover:text-cyan-400"
              >
                Guest Reviews (4.2★)
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-200 hover:text-cyan-400"
              >
                Map & Directions
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="tel:03346053806"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-center text-sm font-medium text-cyan-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk: 033 4605 3806</span>
              </a>
              <a
                href="https://wa.me/913346053806"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-center text-sm font-medium text-white flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0b1329] pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed trust signal */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-400 font-medium tracking-wide">
                <span>Directly Opposite AMRI Hospital</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Rabindra Sarobar Lakes</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Gariahat Hub</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-amber-400 font-semibold">4.2★ Rated</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
                Your Peaceful Sanctuary in the Heart of South Kolkata
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Experience boutique comfort and pristine tranquility on Gariahat Road. Situated directly opposite <strong className="text-white">AMRI Hospital Dhakuria</strong> and a gentle stroll from the verdant <strong className="text-white">Rabindra Sarobar Lakes</strong>, we offer well-appointed air-conditioned rooms, warm Bengali hospitality, and round-the-clock front desk assistance.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/913346053806?text=Hello%20The%20Lake%20Hotel,%20I%20am%20inquiring%20about%20room%20availability%20and%20rates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-900" />
                  <span>Instant WhatsApp Booking</span>
                </a>

                <a
                  href="#rooms"
                  className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-colors flex items-center gap-2"
                >
                  <span>Explore Rooms & Rates</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:03346053806"
                  className="px-4 py-3.5 rounded-lg text-sm font-medium text-cyan-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>033 4605 3806</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">1 Min to AMRI</span>
                    <span className="text-slate-400">Directly across road</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">24/7 Front Desk</span>
                    <span className="text-slate-400">Smooth late check-ins</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Daily Sanitized</span>
                    <span className="text-slate-400">Fresh crisp linens</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src="/src/assets/images/hotel_hero_sanctuary.jpg"
                  alt="The Lake Hotel authentic guest room sanctuary in South Kolkata with warm wood paneling"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Seamless fallback to Google Maps photo CDN
                    e.currentTarget.src = "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QpZ1leM38AWAl67cb46aUtaU-v8riWaKYe6ryB5Wto1AlADrAqqo0011lKO_AaJ0P3md-pkhfuFe6GnB_MmRcgwSQJ_iKArBaXxhV7yCPQyZfE__aYPXp2-2ydHeXCsza7cOdt8G6gB5bZ=w1600";
                  }}
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/20 to-transparent" />
                
                {/* Floating Rating Badge & Verified Photo Marker */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-[#0b1329]/90 backdrop-blur-md border border-cyan-900/50 rounded-xl px-3.5 py-1.5 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-white text-xs">4.2</span>
                    </div>
                    <div className="h-3 w-px bg-slate-700" />
                    <span className="text-[11px] text-slate-300">280+ Google Reviews</span>
                  </div>

                  <span className="bg-amber-400/90 backdrop-blur-md text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                    Verified Guest Room
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b1329]/90 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-amber-400 font-medium">Actual Room Photography</p>
                    <p className="text-sm font-semibold text-white">The Lake Hotel · Opposite AMRI</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/The+Lake+Hotel/@22.5129801,88.3671715,3a,75y/data=!3m8!1e2!3m6!1sCIABIhCwHltsi5QTJMRXETFLzaqO!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QpZ1leM38AWAl67cb46aUtaU-v8riWaKYe6ryB5Wto1AlADrAqqo0011lKO_AaJ0P3md-pkhfuFe6GnB_MmRcgwSQJ_iKArBaXxhV7yCPQyZfE__aYPXp2-2ydHeXCsza7cOdt8G6gB5bZ%3Dw203-h152-k-no!7i4032!8i3024!4m17!1m3!2m2!1shotels+kolkata!6e3!3m12!1s0x3a027777f653aee3:0x3647fb0b388d2c28!5m2!4m1!1i2!8m2!3d22.5129657!4d88.3670036!10e5!14m1!1BCgIgAQ!15sCg5ob3RlbHMga29sa2F0YZIBBWhvdGVsqgFCEAEqCiIGaG90ZWxzKAAyHhABIhrWDpIlDbITE-kfYmRUHrIoUX79lyBxX5jEQTISEAIiDmhvdGVscyBrb2xrYXRh4AEA!16s%2Fg%2F11p5lx2s52?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-cyan-900/50 hover:bg-cyan-800 text-cyan-300 transition-colors"
                    title="View Original Google Maps Photo"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 4. FLOATING QUICK-BOOKING BAR */}
          <div className="mt-12 bg-[#0f1a36] border border-cyan-900/50 rounded-2xl p-4 sm:p-6 shadow-xl relative z-20">
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Instant Rate Estimator & Availability Check</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              
              {/* Check-in */}
              <div>
                <label htmlFor={checkinInputId} className="block text-xs font-medium text-slate-300 mb-1">
                  Check-in Date (From 2 PM)
                </label>
                <div className="relative">
                  <input
                    id={checkinInputId}
                    type="date"
                    value={checkinDate}
                    onChange={(e) => setCheckinDate(e.target.value)}
                    className="w-full bg-[#0b1329] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label htmlFor={checkoutInputId} className="block text-xs font-medium text-slate-300 mb-1">
                  Check-out Date (By 11 AM)
                </label>
                <div className="relative">
                  <input
                    id={checkoutInputId}
                    type="date"
                    value={checkoutDate}
                    onChange={(e) => setCheckoutDate(e.target.value)}
                    className="w-full bg-[#0b1329] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Room Choice */}
              <div>
                <label htmlFor={roomTypeInputId} className="block text-xs font-medium text-slate-300 mb-1">
                  Accommodation
                </label>
                <select
                  id={roomTypeInputId}
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#0b1329] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  {ROOM_DATA.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} (₹{room.pricePerNight}/nt)
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor={guestsInputId} className="block text-xs font-medium text-slate-300 mb-1">
                  Guests & Attendants
                </label>
                <select
                  id={guestsInputId}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-[#0b1329] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value={1}>1 Guest (Solo / Attendant)</option>
                  <option value={2}>2 Guests (Standard)</option>
                  <option value={3}>3 Guests (Triple Occupancy)</option>
                  <option value={4}>4 Guests (Family Suite)</option>
                </select>
              </div>

              {/* Check & Estimate CTA */}
              <div>
                <a
                  href="#booking"
                  className="w-full py-2.5 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/40"
                >
                  <span>Check ₹{estimatedTotal.toLocaleString('en-IN')} Rate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            <div className="mt-3 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60 pt-2.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {nights} night stay calculated · No hidden booking portal fee
              </span>
              <span className="text-cyan-400">
                Direct Booking Perks: Free Morning Tea · Flexible early check-in assistance
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. ROOM TYPES & TARIFF SHOWCASE */}
      <section id="rooms" className="py-20 bg-[#0f172a] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Boutique Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Curated Rooms Designed for Rest & Recovery
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Each accommodation is thoroughly sanitized, fully air-conditioned, and furnished with high-thread-count linens for maximum comfort in South Kolkata.
            </p>
          </div>

          {/* 3 Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOM_DATA.map((room) => {
              const isSelected = selectedRoomId === room.id;
              return (
                <div
                  key={room.id}
                  className={`rounded-2xl overflow-hidden bg-[#0b1329] border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-cyan-500 ring-2 ring-cyan-500/20 shadow-2xl shadow-cyan-950/50'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Room Photography Slot */}
                    <div className="relative h-56 overflow-hidden bg-slate-900">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-black/20" />

                      {/* Pricing Tag */}
                      <div className="absolute bottom-3 left-3 bg-[#0b1329]/95 backdrop-blur-md border border-slate-700 rounded-lg px-3 py-1.5">
                        <span className="text-xs text-slate-400 line-through mr-1.5">₹{room.originalPrice}</span>
                        <span className="text-lg font-bold text-amber-400">₹{room.pricePerNight}</span>
                        <span className="text-xs text-slate-300"> / night</span>
                      </div>

                      {/* Quick Inspect Button */}
                      <button
                        onClick={() => setActiveModalRoom(room)}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                        title="View Full Room Photos & Details"
                        aria-label={`View ${room.name} details`}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Room Meta */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {room.name}
                        </h3>
                        <p className="text-xs text-cyan-400 font-medium mt-0.5">{room.tagline}</p>
                      </div>

                      {/* Capacity & Bed specs unboxed */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 py-1 border-y border-slate-800">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-cyan-400" />
                          {room.capacity}
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-cyan-400" />
                          {room.bedType}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {room.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {room.amenities.slice(0, 4).map((amenity) => (
                          <div key={amenity} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => {
                        setSelectedRoomId(room.id);
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/40'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
                      }`}
                    >
                      <span>{isSelected ? 'Selected for Booking' : 'Reserve This Room'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setActiveModalRoom(room)}
                      className="w-full text-center text-xs text-cyan-400 hover:text-cyan-300 transition-colors py-1"
                    >
                      View All Amenities & Photos
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Booking Assurance Note */}
          <div className="mt-12 p-4 rounded-xl bg-[#0b1329] border border-cyan-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-white">Direct Hotel Booking Guarantee:</span> Best available rate guaranteed without middlemen or OTA convenience charges.
              </div>
            </div>
            <a
              href="tel:03346053806"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-medium shrink-0 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Front Desk: 033 4605 3806</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. HOTEL AMENITIES & GUEST PRIVILEGES */}
      <section id="amenities" className="py-20 bg-[#0b1329] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Guest Privileges
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Thoughtful Amenities for Seamless Hospitality
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Whether you are accompanying loved ones at AMRI Hospital or exploring the cultural riches of South Kolkata, our amenities ensure peace of mind.
            </p>
          </div>

          {/* 6-Grid Icon Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0e1731] border border-slate-800 hover:border-cyan-900/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">24/7 Front Desk & Concierge</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Smooth check-in anytime after 2:00 PM and friendly reception staff ready to assist with midnight check-ins, early wake-up calls, and luggage handling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1731] border border-slate-800 hover:border-cyan-900/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">High-Speed Optical Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dedicated high-bandwidth fiber internet in all guest rooms and common areas, perfect for corporate work, remote consulting, and video calls with family.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1731] border border-slate-800 hover:border-cyan-900/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Daily Sanitization & Linens</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hospital-grade room sanitization, spotless crisp bed sheets, freshly laundered bath towels, and pristine private bathrooms with 24/7 hot geyser water.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1731] border border-slate-800 hover:border-cyan-900/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">In-Room Dining & Breakfast</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Freshly prepared morning breakfast, aromatic tea, coffee, and comfort meal options delivered straight to your room with vegetarian and wholesome options.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1731] border border-cyan-900/60 bg-gradient-to-br from-[#0e1731] to-[#0c1f38] transition-colors relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400 mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Directly Opposite AMRI Hospital</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Only a 1-minute walk across Gariahat Road. An indispensable sanctuary for medical travelers, patients undergoing OPD consultations, and attendants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1731] border border-slate-800 hover:border-cyan-900/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">100% Power Backup & Security</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Uninterrupted electrical generator backup ensuring continuous air-conditioning, lighting, elevator service, and 24-hour monitored CCTV surveillance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. MEDICAL & AMRI HOSPITAL HIGHLIGHT CARD */}
      <section id="medical-amri" className="py-16 bg-[#0c162f] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 lg:p-12 bg-gradient-to-r from-[#071329] via-[#091b3b] to-[#071329] border border-cyan-900/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-semibold">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Prime Medical Sanctuary · AMRI Hospital Dhakuria</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Staying for Treatment or Hospital Attendant Care?
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We are situated literally opposite the gates of AMRI Hospital, Dhakuria. We understand that medical stays require extra empathy and flexibility. Our reception desk provides flexible early check-in assistance, quiet recovery environments, ground/elevator access, and immediate room-service hydration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>30-second walking crossing to AMRI Main Gate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Quiet residential lake air for sound patient sleep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Luggage assistance & flexible multi-week rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pharmacies and diagnostic centers adjacent</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/913346053806?text=Hello,%20I%20am%20visiting%20AMRI%20Hospital%20Dhakuria%20and%20require%20room%20accommodation%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Medical Stay WhatsApp Desk</span>
                </a>

                <a
                  href="tel:03346053806"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm text-center border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call 033 4605 3806 Directly</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. CURATED GUEST REVIEWS & GOOGLE RATINGS SHOWCASE */}
      <section id="reviews" className="py-20 bg-[#0f172a] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left Title & Overall Rating Widget */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Guest Impressions & Social Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Rated 4.2 / 5.0 by Over 280+ Guests
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Real feedback from patients, business executives, and visiting families who have experienced our personalized hospitality.
              </p>

              {/* Aggregated Rating Breakdown Box */}
              <div className="p-6 rounded-2xl bg-[#0b1329] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-extrabold text-amber-400">4.2</span>
                    <div className="flex text-amber-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <Star className="w-4 h-4 fill-amber-400/40 text-amber-400" />
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Google Reviews & Portals</span>
                </div>

                <div className="space-y-2 pt-2 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Location & Proximity to AMRI & Lakes</span>
                      <strong className="text-white">4.8 / 5.0</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full" style={{ width: '96%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Room Cleanliness & Sanitization</span>
                      <strong className="text-white">4.5 / 5.0</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Staff Attentiveness & Hospitality</span>
                      <strong className="text-white">4.2 / 5.0</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '84%' }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Filter Tabs and Review Cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Interactive Segmented Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0b1329] border border-slate-800 rounded-xl">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    reviewFilter === 'all'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Reviews ({REVIEWS_DATA.length})
                </button>
                <button
                  onClick={() => setReviewFilter('medical')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    reviewFilter === 'medical'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Medical Visitors
                </button>
                <button
                  onClick={() => setReviewFilter('family')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    reviewFilter === 'family'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Family & Leisure
                </button>
                <button
                  onClick={() => setReviewFilter('business')}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    reviewFilter === 'business'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Corporate Guests
                </button>
              </div>

              {/* Review Cards Grid */}
              <div className="grid grid-cols-1 gap-4">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-[#0b1329] border border-slate-800 hover:border-slate-700 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">{rev.date}</span>
                    </div>

                    <h4 className="font-semibold text-white text-sm">
                      "{rev.reviewTitle}"
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rev.comment}
                    </p>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-medium text-slate-200">
                        {rev.guestName} <span className="text-slate-500">· {rev.origin}</span>
                      </span>
                      <span className="text-cyan-400/90">{rev.stayDetail}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. TIMINGS & HOUSE POLICIES CARD */}
      <section className="py-16 bg-[#0b1329] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Essential Guest Guidelines
            </span>
            <h2 className="font-serif text-3xl font-bold text-white tracking-tight">
              Timings & House Policies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Check-in Time</span>
              </div>
              <p className="font-serif text-2xl font-bold text-white mb-1">From 2:00 PM</p>
              <p className="text-xs text-slate-300">
                24-hour reception assistance. Early check-in available on prior request subject to room availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Check-out Time</span>
              </div>
              <p className="font-serif text-2xl font-bold text-white mb-1">By 11:00 AM</p>
              <p className="text-xs text-slate-300">
                Express departure service. Luggage storage is complimentary at front desk if your transport is later in the day.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>Identification</span>
              </div>
              <p className="font-serif text-2xl font-bold text-white mb-1">Govt Photo ID</p>
              <p className="text-xs text-slate-300">
                Valid government-issued photo ID (Aadhaar, Passport, Driving License, Voter Card) required for all adult guests.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800">
              <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Payment & Assistance</span>
              </div>
              <p className="font-serif text-2xl font-bold text-white mb-1">Cash, UPI, Cards</p>
              <p className="text-xs text-slate-300">
                We accept Google Pay, PhonePe, Paytm, all major cards & cash. Invoices provided for medical claims.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. INTERACTIVE DIRECT RESERVATION & INQUIRY FORM */}
      <section id="booking" className="py-20 bg-[#0f1a36] border-t border-cyan-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Instant Direct Reservation Desk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Reserve Directly with Front Desk
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Lock in your room without OTA commissions. Fill out your details below and route your reservation directly to our reservation WhatsApp team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <form onSubmit={handleBookingSubmit} className="lg:col-span-8 bg-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Guest Name */}
                <div>
                  <label htmlFor={formGuestNameId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Primary Guest Full Name *
                  </label>
                  <input
                    id={formGuestNameId}
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor={formPhoneId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    id={formPhoneId}
                    type="tel"
                    required
                    placeholder="e.g. +91 98300 XXXXX"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor={formEmailId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id={formEmailId}
                    type="email"
                    placeholder="e.g. guest@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor={formRoomTypeId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Select Room Category
                  </label>
                  <select
                    id={formRoomTypeId}
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {ROOM_DATA.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — ₹{r.pricePerNight}/night
                      </option>
                    ))}
                  </select>
                </div>

                {/* Check-in */}
                <div>
                  <label htmlFor={formCheckinId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    id={formCheckinId}
                    type="date"
                    required
                    value={checkinDate}
                    onChange={(e) => setCheckinDate(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label htmlFor={formCheckoutId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    id={formCheckoutId}
                    type="date"
                    required
                    value={checkoutDate}
                    onChange={(e) => setCheckoutDate(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor={formNumGuestsId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    id={formNumGuestsId}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults (With extra bedding)</option>
                    <option value={4}>4 Adults / Family</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor={formSpecialRequestId} className="block text-xs font-medium text-slate-300 mb-1.5">
                    Purpose / Special Request
                  </label>
                  <select
                    id={formSpecialRequestId}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Medical visit to AMRI Hospital">Medical visit to AMRI Hospital</option>
                    <option value="Late night check-in after 9 PM">Late night check-in after 9 PM</option>
                    <option value="Early check-in morning requested">Early check-in morning requested</option>
                    <option value="Quiet low-floor / elevator accessible room">Quiet low-floor room</option>
                    <option value="Extra mattress / bed required">Extra mattress / bed required</option>
                    <option value="Corporate / Business stay">Corporate / Business stay</option>
                  </select>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Reserve & Route via WhatsApp</span>
                </button>

                <a
                  href="tel:03346053806"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call 033 4605 3806</span>
                </a>
              </div>

            </form>

            {/* Price Estimation Summary Card */}
            <div className="lg:col-span-4 bg-[#0b1329] border border-slate-800 rounded-3xl p-6 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Stay Summary</span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">{currentRoom.name}</h3>
                <p className="text-xs text-slate-400">{currentRoom.capacity}</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Duration</span>
                  <span className="font-semibold text-white">{nights} Night(s)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Nightly Rate</span>
                  <span className="font-semibold text-white">₹{currentRoom.pricePerNight.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Check-in</span>
                  <span className="text-white">{checkinDate} (2:00 PM)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Check-out</span>
                  <span className="text-white">{checkoutDate} (11:00 AM)</span>
                </div>
                
                <div className="pt-3 border-t border-slate-800/80 flex justify-between items-baseline">
                  <div>
                    <span className="block text-sm font-semibold text-white">Estimated Total</span>
                    <span className="text-[10px] text-emerald-400">Direct booking tariff · Incl. of taxes</span>
                  </div>
                  <span className="text-2xl font-extrabold text-amber-400">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Direct Booking Inclusions */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 space-y-2 text-xs text-cyan-200">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Complimentary Direct Perks</span>
                </div>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  <li>✓ Free Morning Tea & Electric Kettle</li>
                  <li>✓ Daily Bottled Mineral Water</li>
                  <li>✓ High-Speed Wi-Fi for all devices</li>
                  <li>✓ AMRI Hospital walking escort on request</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 11. LOCATION & VICINITY GUIDE (DHAKURIA / GARIAHAT HUB) */}
      <section id="location" className="py-20 bg-[#0b1329] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Location & Vicinity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Positioned in Prestigious South Kolkata
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Directly on Gariahat Road, opposite AMRI Hospital Dhakuria. Enjoy seamless access to Rabindra Sarobar Lake, metro links, and South Kolkata shopping hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 h-[460px] relative">
              <iframe
                title="The Lake Hotel Location on Google Maps - Opposite AMRI Hospital Dhakuria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7486450630653!2d88.3619572!3d22.5135759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d49f6920f1%3A0x6b77d6118d530868!2s38%2C%203A%2C%20Gariahat%20Rd%2C%20opposite%20to%20AMRI%20HOSPITAL%2C%20Dhakuria%2C%20South%20End%20Park%2C%20Keyatala%2C%20Kolkata%2C%20West%20Bengal%20700029!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Map Action Button */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0b1329]/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-white truncate">38 3A Gariahat Rd, Dhakuria, Kolkata 700029</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/zL5s9RLcigFAVH1Y9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Vicinity Landmark Badges & Proximities */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
                <h3 className="font-serif text-lg font-bold text-white flex items-center justify-between">
                  <span>Key Vicinity Landmarks</span>
                  <button
                    onClick={copyFullAddress}
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    title="Copy full address"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Copied' : 'Copy Address'}</span>
                  </button>
                </h3>

                <div className="space-y-3 text-xs pt-1">
                  
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1329] border border-rose-900/30">
                    <div className="p-1.5 rounded-lg bg-rose-950 text-rose-400 mt-0.5 shrink-0">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">AMRI Hospital Dhakuria</strong>
                      <span className="text-slate-400">Directly Opposite · 30 Seconds Walk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1329] border border-slate-800">
                    <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Rabindra Sarobar (Dhakuria Lakes)</strong>
                      <span className="text-slate-400">250 Meters · 3 Minutes Walk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1329] border border-slate-800">
                    <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5 shrink-0">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Dhakuria Railway Station</strong>
                      <span className="text-slate-400">450 Meters · 5 Minutes Walk</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1329] border border-slate-800">
                    <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Gariahat Market & Crossing</strong>
                      <span className="text-slate-400">900 Meters · 5 Minutes Drive</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1329] border border-slate-800">
                    <div className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 mt-0.5 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block text-sm">Dakshinapan Cultural Complex</strong>
                      <span className="text-slate-400">750 Meters · 4 Minutes Walk</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Direct Call & WhatsApp Contact Pill */}
              <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-white block">Need Help Finding Us?</span>
                  <span className="text-cyan-300">Front desk is on call 24 hours a day to guide your driver.</span>
                </div>
                <a
                  href="tel:03346053806"
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 033 4605 3806</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#070d1e] border-t border-slate-800/80 text-slate-400 text-xs py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="md:col-span-2 space-y-4">
              <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                The Lake Hotel
              </span>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                A peaceful boutique sanctuary in South Kolkata, situated directly opposite AMRI Hospital Dhakuria and minutes from Rabindra Sarobar Lake. Combining pristine comfort, modern amenities, and warm Bengali hospitality.
              </p>
              <div className="flex items-center gap-4 text-xs pt-1">
                <span className="text-amber-400 font-semibold">⭐ 4.2 / 5.0 Star Guest Rating</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-emerald-400">24/7 Concierge Support</span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold block">Quick Navigation</span>
              <ul className="space-y-2 text-xs">
                <li><a href="#rooms" className="hover:text-cyan-400 transition-colors">Deluxe King Room</a></li>
                <li><a href="#rooms" className="hover:text-cyan-400 transition-colors">Executive Twin Room</a></li>
                <li><a href="#rooms" className="hover:text-cyan-400 transition-colors">Family Lake Suite</a></li>
                <li><a href="#medical-amri" className="hover:text-cyan-400 transition-colors">AMRI Hospital Visitors</a></li>
                <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Guest Reviews</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold block">Hotel Contact & Address</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                38 3A Gariahat Road, opposite to AMRI Hospital, Dhakuria, South End Park, Keyatala, Kolkata, West Bengal 700029
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <div>
                  Phone: <a href="tel:03346053806" className="text-cyan-400 hover:underline">033 4605 3806</a>
                </div>
                <div>
                  WhatsApp: <a href="https://wa.me/913346053806" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 33 4605 3806</a>
                </div>
                <div>
                  Google Maps: <a href="https://maps.app.goo.gl/zL5s9RLcigFAVH1Y9" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Map & Directions</a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} The Lake Hotel, Kolkata. All rights reserved.</p>
            <p>Direct bookings receive best rate guarantee & priority check-in assistance.</p>
          </div>

        </div>
      </footer>

      {/* 13. MOBILE-FIRST STICKY BOTTOM RESERVATION BAR (Capped <= 15% viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#070e20]/95 backdrop-blur-md border-t border-cyan-900/60 p-3 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          <a
            href="tel:03346053806"
            className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call Reception</span>
          </a>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>

      {/* 14. ROOM DETAILS MODAL DIALOG */}
      {activeModalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0b1329] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            <button
              onClick={() => setActiveModalRoom(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full bg-slate-900">
              <img
                src={activeModalRoom.image}
                alt={activeModalRoom.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">{activeModalRoom.tagline}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">{activeModalRoom.name}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0f172a] border border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-1.5">₹{activeModalRoom.originalPrice}</span>
                  <span className="text-2xl font-bold text-amber-400">₹{activeModalRoom.pricePerNight}</span>
                  <span className="text-xs text-slate-300"> / night</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span>{activeModalRoom.capacity}</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>{activeModalRoom.size}</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>{activeModalRoom.bedType}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">Description</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalRoom.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-3">Room Amenities & Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalRoom.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedRoomId(activeModalRoom.id);
                    setActiveModalRoom(null);
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm transition-colors text-center"
                >
                  Select & Reserve This Room
                </button>

                <a
                  href={`https://wa.me/913346053806?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(activeModalRoom.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 15. BOOKING SUCCESS / CONFIRMATION MODAL */}
      {bookingSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0b1329] border border-cyan-800/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-center">
            
            <button
              onClick={() => setBookingSuccessModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-white">
                Booking Inquiry Prepared!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Thank you, <strong className="text-white">{guestName || 'Valued Guest'}</strong>. Your reservation request for <strong className="text-cyan-400">{currentRoom.name}</strong> ({nights} nights) is ready to send to our front desk.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between text-slate-300">
                <span>Check-in:</span>
                <strong className="text-white">{checkinDate} (2:00 PM)</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Check-out:</span>
                <strong className="text-white">{checkoutDate} (11:00 AM)</strong>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Guests:</span>
                <strong className="text-white">{guestCount} Guest(s)</strong>
              </div>
              <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800">
                <span>Estimated Direct Rate:</span>
                <strong className="text-amber-400 text-sm">₹{estimatedTotal.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBookingSuccessModal(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Open WhatsApp to Confirm Now</span>
              </a>

              <a
                href="tel:03346053806"
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Or Call 033 4605 3806 Directly</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
