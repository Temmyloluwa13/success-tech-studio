import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Github } from 'lucide-react';
import './Portfolio.css';

// Project image imports
import webProjectImg from '../assets/web_project.png';
import mobileProjectImg from '../assets/mobile_project.png';
import vibeProjectImg from '../assets/vibe_project.png';
import presentationProjectImg from '../assets/presentation_project.png';
import jumpbotImg from '../assets/jumpbot_mockup.png';
import jumpbotFullImg from '../assets/jumpbot_fullpage.png';
import nikeMockupImg from '../assets/nike_mockup.png';
import nikeFullImg from '../assets/nike_fullpage.png';
import bookAppImg from '../assets/book_app_mockup.png';
import webDesignImg from '../assets/webdesign_mockup.png';
import foodNinjaImg from '../assets/foodninja_mockup.png';
import sneakerShopImg from '../assets/sneaker_shop_mockup.png';
import travelBookingImg from '../assets/travel_booking_mockup.png';
import gotravelImg from '../assets/gotravel_mockup.png';
import travelerAppImg from '../assets/traveler_app_mockup.png';
import playnftThumbnailImg from '../assets/playnft_thumbnail.png';
import playnftFullImg from '../assets/playnft_fullpage.png';
import cryptoWalletImg from '../assets/crypto_wallet_mockup.png';
import fitnessAppImg from '../assets/fitness_app_mockup.png';
import socialAppImg from '../assets/social_app_mockup.png';
import healthcareAppImg from '../assets/healthcare_app_mockup.png';
import avatarAppImg from '../assets/avatar_app_mockup.png';
import cryptohubThumbnailImg from '../assets/cryptohub_thumbnail.png';
import cryptohubFullImg from '../assets/cryptohub_fullpage.png';
import flexitThumbnailImg from '../assets/flexit_thumbnail.png';
import flexitFullImg from '../assets/flexit_fullpage.png';
import evolveaiThumbnailImg from '../assets/evolveai_thumbnail.png';
import evolveaiFullImg from '../assets/evolveai_fullpage.png';
import skandinavianImg from '../assets/skandinavian_presentation.png';
import marketingPlanImg from '../assets/marketing_plan_presentation.png';
import companyProfileImg from '../assets/company_profile_presentation.png';
import architectureImg from '../assets/architecture_presentation.png';
import realEstateImg from '../assets/realestate_presentation.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  fullImage?: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'Mobile App', 'Vibe Coding', 'Presentation Design'];

  const projects: Project[] = [
    {
      id: 32,
      title: "Real Estate Pitch Deck",
      category: "Presentation Design",
      description: "A sleek, minimal real estate presentation showcasing luxury properties, design concepts, and investment plans.",
      fullDescription: "Designed a clean and sophisticated real estate pitch deck for a premium property agency. The presentation uses a minimalist blue and white layout with crisp architectural photography of modern buildings and luxury interiors. Key slides include: 'We Create A New Real Estate For VIP Clients', Real Estate Design Concept, The Founder, Our Mission, Luxury Property For Living Room, Every One Has Their Own Dream House, Smart Choice For Your Living, and The Plan — complete with metric highlights such as 80+ projects and 27K satisfied clients. An ideal deck for presenting premium property portfolios to high-net-worth investors.",
      image: realEstateImg,
      tools: ["PowerPoint", "Figma", "Photoshop", "Illustrator"]
    },
    {
      id: 31,
      title: "Architecture Pitch Deck",
      category: "Presentation Design",
      description: "A sleek monochrome architecture firm presentation with bold black-and-white photography and editorial slide layouts.",
      fullDescription: "Designed a premium architecture firm pitch deck with a striking monochrome aesthetic — deep charcoal blacks paired with clean off-white cream tones throughout. The presentation covers all critical firm-facing slides: an Introduction, Vision & Mission, Portfolio Showcase (with Residential, Commercial, and Institutional projects), Design Process steps, Our Team with headshots, Partner companies, Awards & Recognition, Quality Assurance & Compliance, Future Directions, and a Contact page. Every slide uses dramatic real architectural photography to communicate scale, innovation, and design mastery.",
      image: architectureImg,
      tools: ["PowerPoint", "Figma", "Photoshop", "Illustrator"]
    },
    {
      id: 30,
      title: "Company Profile Pitch Deck",
      category: "Presentation Design",
      description: "A clean corporate company profile presentation in bold red and white with professional photography and structured layouts.",
      fullDescription: "Designed a polished corporate company profile pitch deck for 'Liceria & Co.' built around a sharp red, white, and soft pink palette. The presentation spans all key business communication slides: a bold Company Profile cover, Mission & Vision, Our Team with professional headshots, Goals, The Process numbered workflow, Achievements, Our Service breakdown, Analysis insights, a Contact Us page, and a clean 'Thank You' closing slide. Real corporate photography is used throughout for maximum credibility and professionalism.",
      image: companyProfileImg,
      tools: ["PowerPoint", "Figma", "Photoshop", "Illustrator"]
    },
    {
      id: 29,
      title: "Marketing Plan Pitch Deck",
      category: "Presentation Design",
      description: "A vibrant gradient marketing plan presentation with bold orange-to-purple slides covering strategy, budget, and campaign goals.",
      fullDescription: "Designed a bold, high-energy corporate marketing plan pitch deck radiating a vivid orange-to-purple gradient identity. The deck covers all critical marketing pillars: an Overview with campaign goals, a full Branding slide, Budget breakdowns with donut-chart infographics, a Marketing Channels analysis, KPI / Key Performance Indicators section, a Marketing Mix comparison table, User/Buyer persona profiles, Campaign Goals, Schedule & Deadline timeline, and a stylish 'Thank You' closing slide. The warm gradient palette ensures maximum visual engagement across every slide.",
      image: marketingPlanImg,
      tools: ["PowerPoint", "Figma", "Illustrator", "Photoshop"]
    },
    {
      id: 28,
      title: "Skandinavian Home Pitch Deck",
      category: "Presentation Design",
      description: "A clean, warm Scandinavian interior design presentation with elegant beige tones and editorial slide layouts.",
      fullDescription: "Crafted 'Skandinavian Home', a sophisticated editorial-style pitch deck for a premium interior design studio. The presentation features a warm, neutral palette of creams, tans, and light grays paired with stunning real interior photography of modern wood-toned Scandinavian living spaces. Key slides include an Introduction, Color Tone swatches, Materials overview, Interiors gallery, Customization Options, Client Testimonials, Home Design breakdown, and a compelling Call to Action—all arranged cohesively in a clean, minimalist layout.",
      image: skandinavianImg,
      tools: ["PowerPoint", "Figma", "Photoshop", "Illustrator"]
    },
    {
      id: 27,
      title: "EvolveAI Pitch Deck",
      category: "Presentation Design",
      description: "A futuristic and highly professional corporate presentation design for an AI technology company.",
      fullDescription: "Designed 'EvolveAI', a premium PowerPoint pitch deck layout aimed at technology startups and AI agencies. The presentation features a striking dark theme offset by vibrant neon purple typography and energetic 3D robotic/VR elements. Layouts include cleanly structured 'Pricing Plan' tables, detailed 'Our Services' grids, and visually engaging 'Team' slides that maintain investor interest. Designed to convey cutting-edge innovation while retaining strong corporate structure.",
      image: evolveaiThumbnailImg,
      fullImage: evolveaiFullImg,
      tools: ["PowerPoint", "Figma", "Illustrator", "Photoshop", "3D Modeling"]
    },
    {
      id: 26,
      title: "Flex-IT Solutions Agency",
      category: "Web Development",
      description: "A premium dark-themed corporate website for an IT Services and Digital Solutions agency.",
      fullDescription: "Designed an engaging dark-mode web application for 'Flex-IT', an IT solutions and services provider. Built around a robust color palette of deep navy blues and energetic neon purples, this website highlights the company's offerings—from Web Development to Data Analysis—using sleek glowing UI cards. Features include dynamic 3D isometric tech worker illustrations scattered throughout the page to visually break up content blocks, creating a highly professional and modern corporate aesthetic.",
      image: flexitThumbnailImg,
      fullImage: flexitFullImg,
      tools: ["React", "CSS Modules", "Framer Motion", "Figma", "Three.js"]
    },
    {
      id: 25,
      title: "CryptoHub Trading Platform",
      category: "Web Development",
      description: "A high-end dark-mode cryptocurrency trading platform with real-time markets and a sleek modern dashboard.",
      fullDescription: "Designed and developed 'CryptoHub', a premium dark-mode cryptocurrency web application. Highlights include a striking neon lime green aesthetic contrasting against deep blacks, a real-time 'Top Crypto Now' tracking dashboard, a functional Bitcoin-to-Currency Calculator, and rich 3D golden Ethereum elements. Designed to provide traders with the fastest way to follow crypto markets safely. Fully responsive scaling across desktop and tablet formats.",
      image: cryptohubThumbnailImg,
      fullImage: cryptohubFullImg,
      tools: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Chart.js"]
    },
    {
      id: 24,
      title: "Qstomi — 3D Avatar Creator",
      category: "Mobile App",
      description: "A deep red and blue 3D avatar creator app allowing users to build and customize their digital identity.",
      fullDescription: "Designed 'Qstomi', a vibrant and immersive 3D avatar creation mobile app featuring a striking deep red background contrasting with rich blue interfaces. The app lets users easily craft personalized cartoon avatars through an intuitive 'Create Your Avatar' flow. It showcases rich floating 3D elements, dynamic character selections, and sleek modern UI cards for a premium, engaging user experience. Perfectly optimized for both iOS and Android platforms.",
      image: avatarAppImg,
      tools: ["React Native", "Expo", "Three.js", "Figma", "Redux"]
    },
    {
      id: 23,
      title: "CryptoVault — Wallet App",
      category: "Mobile App",
      description: "A premium teal & yellow crypto wallet app with real-time portfolio tracking, transfers, and withdrawals.",
      fullDescription: "Designed 'CryptoVault', a sleek and modern cryptocurrency wallet mobile application built around a vibrant teal and golden yellow color scheme. The dashboard greets users with their live total balance, prominent Transfer and Withdraw CTAs, and a dynamic portfolio performance chart. Floating glassmorphic cards display real-time crypto prices for Bitcoin, Ethereum, and alt-coins. The 3D isometric product presentation communicates trust and sophistication — ideal for DeFi and fintech audiences on both iOS and Android.",
      image: cryptoWalletImg,
      tools: ["React Native", "Expo", "Web3.js", "Figma", "Redux Toolkit"]
    },
    {
      id: 22,
      title: "FitPulse — Fitness Tracker",
      category: "Mobile App",
      description: "A dark-mode fitness tracking app with real-time heart rate, step counter, and personalized workout insights.",
      fullDescription: "Designed 'FitPulse', a premium dark-mode fitness and health tracking application with a rich purple-to-black gradient aesthetic. The home dashboard shows live metrics including calories burned (1,847 kcal), daily step count (12,450), and real-time heart rate (142 BPM) via animated progress rings and glow effects. A weekly activity chart helps users spot trends at a glance. The design uses bold typography and vibrant accent colors to keep users motivated throughout their fitness journey. Built for performance on iOS and Android.",
      image: fitnessAppImg,
      tools: ["React Native", "Expo", "HealthKit API", "Figma", "Reanimated 3"]
    },
    {
      id: 21,
      title: "Lumis — Social Photo App",
      category: "Mobile App",
      description: "A dark-mode social photo sharing app with story feeds, animated reactions, and a stunning card-based layout.",
      fullDescription: "Designed 'Lumis', a next-generation social photo sharing mobile application with an immersive dark-mode interface and a warm pink-to-orange gradient accent system. The feed presents posts in a scrollable card layout featuring high-quality photography, swipeable story circles at the top, and smooth animated like/comment/share interactions. The design language blends editorial photography aesthetics with sleek social UX patterns — creating a premium experience that stands out from mainstream social apps. Fully responsive for both iOS and Android.",
      image: socialAppImg,
      tools: ["React Native", "Expo", "Firebase", "Figma", "Reanimated 3"]
    },
    {
      id: 20,
      title: "MediCare — Telehealth App",
      category: "Mobile App",
      description: "A clean telemedicine app with doctor consultations, health vitals tracking, and seamless appointment booking.",
      fullDescription: "Designed 'MediCare', a comprehensive telemedicine and digital health mobile application built on a clean white and mint-green palette for maximum trust and clarity. The app features a doctor discovery and consultation screen with detailed physician profiles, a calendar-integrated appointment booking flow, and a personal health dashboard tracking blood pressure, oxygen saturation, and heart rate in real time. The minimal, clinical aesthetic builds patient confidence while keeping the UX intuitive and accessible. Compatible with iOS and Android.",
      image: healthcareAppImg,
      tools: ["React Native", "Expo", "Supabase", "Figma", "TypeScript"]
    },
    {
      id: 19,
      title: "PlayNFT Marketplace",
      category: "Web Development",
      description: "A stunning dark-themed NFT marketplace for discovering, collecting, and selling digital art.",
      fullDescription: "Designed a full-featured NFT marketplace platform 'PlayNFT' — the world's largest digital marketplace for crypto collections and non-fungible tokens. The site features a bold dark navy/purple aesthetic with a liquid 3D chrome sculpture as the hero visual, real-time auction countdowns, partner integrations (PayPal, Coinbase, Binance, Revolut), a 'Popular This Week' NFT card carousel, a Top Sellers leaderboard, an Explore Artworks category grid, and a community CTA. Fully responsive across desktop, tablet, and mobile.",
      image: playnftThumbnailImg,
      fullImage: playnftFullImg,
      tools: ["React", "Framer Motion", "Tailwind CSS", "Figma"]
    },
    {
      id: 18,
      title: "Traveler — Travel App",
      category: "Mobile App",
      description: "A clean blue travel companion app for booking hotels, cruises, cars and flights from one place.",
      fullDescription: "Designed 'Traveler', a comprehensive all-in-one travel mobile app with a deep navy and white color palette. The home screen welcomes users with a stunning landscape hero image, category tiles for Hotels, Cruises, Cars and Flights, and a membership CTA. The flights search screen features a sleek Roundtrip / One Way / Multi-city tab switcher, structured input fields for origin, destination, dates and travellers, and a bold search button — prioritizing ease of use and elegance across the full booking flow.",
      image: travelerAppImg,
      tools: ["React Native", "Expo", "Figma", "TypeScript"]
    },
    {
      id: 17,
      title: "GoTravel Flight Booking",
      category: "Mobile App",
      description: "A sleek purple-themed travel app for searching flights, comparing prices, and booking with a digital ticket.",
      fullDescription: "Designed a premium flight booking mobile app 'GoTravel' built around a clean purple gradient aesthetic. The app features a smooth 3-step user journey: a polished search screen with To/From/Date/Passengers fields, a flight results listing with real-time pricing for multiple time slots, and a full flight details page complete with passenger info, terminal gate, class type, and a scannable QR code boarding pass. The design prioritizes clarity and elegance throughout the booking flow.",
      image: gotravelImg,
      tools: ["React Native", "Expo", "Figma", "Redux Toolkit"]
    },
    {
      id: 16,
      title: "Travel Booking App",
      category: "Mobile App",
      description: "A full-featured travel app for booking flights and hotels with seat selection and smart search.",
      fullDescription: "Designed a comprehensive travel booking mobile application that lets users search and book flights, hotels, and more — all from one app. The UI flows from a welcoming login screen with vibrant travel imagery through a clean flight search form, a dynamic available flights listing with calendar selection, all the way to an interactive seat map with Business and Economy class sections. Features a bold blue and white color scheme with energetic orange/yellow CTAs.",
      image: travelBookingImg,
      tools: ["React Native", "Expo", "Figma", "Redux Toolkit"]
    },
    {
      id: 15,
      title: "Vapormax Sneaker Shop",
      category: "Mobile App",
      description: "A sleek e-commerce mobile app for sports footwear with an immersive 3D product experience and smooth cart flow.",
      fullDescription: "Designed a premium sneaker shopping mobile app featuring an immersive 3D product view where shoes float right off the screen. The product detail page uses a clean white layout with bold orange price tags and a minimal black CTA. The shopping cart page presents all items with images, adjustable quantities, a discount display, and a one-tap checkout button — creating a seamless end-to-end shopping experience.",
      image: sneakerShopImg,
      tools: ["React Native", "Expo", "Figma", "Three.js"]
    },
    {
      id: 14,
      title: "FoodNaija Delivery App",
      category: "Mobile App",
      description: "A fast and seamless mobile app design for discovering comfort food and healthy meals.",
      fullDescription: "Designed an intuitive, visually refreshing mobile application for 'FoodNaija'. Features include a beautifully smooth user onboarding process, specialized browsing (Vegan, Healthy Food, comfort foods), and custom interactive UI elements focusing on accessibility and seamless conversion. The color palette utilizes energetic greens with robust white space for a clean, modern aesthetic.",
      image: foodNinjaImg,
      tools: ["React Native", "Figma", "Redux Toolkit", "Tailwind CSS"]
    },
    {
      id: 13,
      title: "Web Design Studio",
      category: "Web Development",
      description: "A professional business website showcasing stunning web design services to drive engagement.",
      fullDescription: "Designed an engaging and creative corporate landing page for a web design agency. Features a striking dark purple aesthetic with bright contrasting accents, 3D interactive floating elements, and clear calls-to-action tailored to boost business engagement and lead conversion.",
      image: webDesignImg,
      tools: ["React", "Three.js", "Tailwind CSS", "Figma"]
    },
    {
      id: 12,
      title: "Digital Library Mobile App",
      category: "Mobile App",
      description: "A sleek, cross-platform mobile application for discovering and reading digital books.",
      fullDescription: "A full-featured mobile application featuring a vibrant purple theme. It includes user profiles, personalized reading recommendations, statistics dashboards, and a seamless digital book reading interface. Built for high performance on both iOS and Android.",
      image: bookAppImg,
      tools: ["React Native", "Expo", "Redux Toolkit", "Figma"]
    },
    {
      id: 11,
      title: "Nike Air Jordan Landing Page",
      category: "Web Development",
      description: "A premium, futuristic product landing page for Nike Air Jordans.",
      fullDescription: "Designed an interactive, dark-mode layout showcasing the Nike Air Jordans with modern styling. Features include glowing neon gradients, floating 3D-like product elements, and fully responsive vertical layouts for an engaging user experience.",
      image: nikeMockupImg,
      fullImage: nikeFullImg,
      tools: ["React", "Framer Motion", "CSS Variables", "Figma"]
    },
    {
      id: 10,
      title: "JumpBot Blockchain Platform",
      category: "Web Development",
      description: "Modern, dark-theme landing page for a blockchain service.",
      fullDescription: "Designed and developed a sleek, modern landing page for a blockchain platform called JumpBot. Features a striking dark-mode aesthetic with neon glowing effects, fully responsive layouts across devices, and a clean pricing section. Result: Visually stunning presentation that captures the futuristic essence of Web3.",
      image: jumpbotImg,
      fullImage: jumpbotFullImg,
      tools: ["React", "Tailwind CSS", "Framer Motion", "Figma"]
    },
    {
      id: 1,
      title: "SaaS Dashboard Platform",
      category: "Web Development",
      description: "Modern analytics dashboard for business tracking.",
      fullDescription: "Built a modern analytics dashboard for business tracking. Features include real-time data visualization, a clean UI, and blazing fast performance. Result: Improved user engagement and usability for enterprise clients.",
      image: webProjectImg,
      tools: ["React", "TypeScript", "Tailwind CSS", "Recharts"]
    },
    {
      id: 2,
      title: "E-commerce Store",
      category: "Web Development",
      description: "Full online store with payment integration.",
      fullDescription: "Designed and developed a complete e-commerce solution with seamless payment gateway integration, optimized product pages, and full mobile responsiveness. Result: Increased total sales and significantly reduced bounce rate.",
      image: webProjectImg,
      tools: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"]
    },
    {
      id: 3,
      title: "High-Converting Landing Page",
      category: "Web Development",
      description: "Marketing campaign page focused on conversion optimization.",
      fullDescription: "Built specifically for high-budget marketing campaigns. Every element from the copy placement to the micro-interactions was A/B tested for conversion optimization. Result: Higher lead generation and reduced CPA.",
      image: webProjectImg,
      tools: ["HTML5", "CSS3", "GSAP", "Framer Motion"]
    },
    {
      id: 4,
      title: "Task Management App",
      category: "Mobile App",
      description: "Clean UI with productivity features and real-time sync.",
      fullDescription: "A powerful task management application featuring a clean, distraction-free UI. It includes robust productivity features, real-time sync across devices, and instant push notifications to keep users on track.",
      image: mobileProjectImg,
      tools: ["React Native", "Firebase", "Redux", "Node.js"]
    },
    {
      id: 5,
      title: "Chat Application",
      category: "Mobile App",
      description: "Messaging system with modern UX and smooth interface.",
      fullDescription: "A full-fledged messaging system boasting a highly modern UX. Emphasizes a smooth, buttery responsive interface with end-to-end encryption, group chats, and media sharing capabilities.",
      image: mobileProjectImg,
      tools: ["Flutter", "Dart", "WebSockets", "Supabase"]
    },
    {
      id: 6,
      title: "AI Chatbot System",
      category: "Vibe Coding",
      description: "Automated chatbot for customer support.",
      fullDescription: "Built an intelligent, context-aware automated chatbot tailored for customer support teams. It handles complex queries, connects to company knowledge bases, and successfully reduced manual workload by 40%.",
      image: vibeProjectImg,
      tools: ["Python", "OpenAI", "LangChain", "FastAPI"]
    },
    {
      id: 7,
      title: "Automation Workflow Tool",
      category: "Vibe Coding",
      description: "Automated repetitive business tasks to improve efficiency.",
      fullDescription: "Leveraged AI and custom scripting to automate highly repetitive business tasks across multiple software platforms. Significantly improved operational efficiency and entirely eliminated manual data entry errors.",
      image: vibeProjectImg,
      tools: ["Node.js", "Puppeteer", "Make/Integromat", "GPT-4"]
    },
    {
      id: 8,
      title: "Investor Pitch Deck",
      category: "Presentation Design",
      description: "Designed for startup funding with clean storytelling.",
      fullDescription: "A high-stakes presentation deck designed exclusively for startup funding rounds. Used clean, persuasive storytelling and premium custom graphics to clearly articulate the business model and market opportunity.",
      image: presentationProjectImg,
      tools: ["Figma", "Keynote", "Illustrator"]
    },
    {
      id: 9,
      title: "Real Estate Presentation",
      category: "Presentation Design",
      description: "High-end visuals focused on selling luxury properties.",
      fullDescription: "A visually breathtaking presentation leveraging high-end architectural visuals. Designed to sell luxury properties by emphasizing location benefits, premium amenities, and investment potential through stunning layouts.",
      image: presentationProjectImg,
      tools: ["PowerPoint", "Photoshop", "After Effects"]
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <motion.div
          className="section-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card glass-card"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <span className="view-btn">View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category text-gradient-alt">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.description}</p>
                  <div className="portfolio-tools">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="tool-badge">{tool}</span>
                    ))}
                    {project.tools.length > 3 && <span className="tool-badge">+{project.tools.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content glass-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              {selectedProject.fullImage ? (
                <img src={selectedProject.fullImage} alt={selectedProject.title} className="modal-img-full" />
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              )}

              <div className="modal-body">
                <span className="modal-category text-gradient-alt">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-full-desc">{selectedProject.fullDescription}</p>

                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="portfolio-tools">
                    {selectedProject.tools.map(tool => (
                      <span key={tool} className="tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.liveUrl || '#'} 
                    target={selectedProject.liveUrl ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn btn-primary" 
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={(e) => {
                      if (!selectedProject.liveUrl) {
                        e.preventDefault();
                        alert("Live preview URL coming soon!");
                      }
                    }}
                  >
                    <ExternalLink size={18} style={{ marginRight: '8px' }} /> Live Preview
                  </a>
                  <a 
                    href={selectedProject.githubUrl || '#'} 
                    target={selectedProject.githubUrl ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn btn-outline" 
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={(e) => {
                      if (!selectedProject.githubUrl) {
                        e.preventDefault();
                        alert("Repository is currently private or unavailable.");
                      }
                    }}
                  >
                    <Github size={18} style={{ marginRight: '8px' }} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
