"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { 
  Scissors, 
  Sparkles, 
  Flower2, 
  Hand, 
  Eye, 
  Palette, 
  User, 
  Heart, 
  Diamond, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

interface GalleryImage {
  src: string;
  caption: string;
}

interface Hours {
  day: string;
  time: string;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: Service[] = [
    { icon: <Scissors size={24} />, title: "Hair Styling", description: "Cuts, color, highlights, and styling by expert stylists.", price: "From $65" },
    { icon: <Hand size={24} />, title: "Nail Services", description: "Manicures, pedicures, gel, and nail art.", price: "From $35" },
    { icon: <Sparkles size={24} />, title: "Facial Treatments", description: "Rejuvenating facials and skincare treatments.", price: "From $85" },
    { icon: <Flower2 size={24} />, title: "Massage Therapy", description: "Relaxing full-body and targeted massages.", price: "From $95" },
    { icon: <Eye size={24} />, title: "Lash & Brow", description: "Extensions, tinting, and brow shaping.", price: "From $45" },
    { icon: <Palette size={24} />, title: "Makeup Artistry", description: "Bridal, event, and everyday makeup.", price: "From $75" },
    { icon: <User size={24} />, title: "Body Treatments", description: "Wraps, scrubs, and body contouring.", price: "From $120" },
    { icon: <Diamond size={24} />, title: "Bridal Packages", description: "Complete wedding day beauty services.", price: "From $450" }
  ];

  const team: TeamMember[] = [
    { name: "Sophia Laurent", role: "Creative Director", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop" },
    { name: "Emma Chen", role: "Senior Stylist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop" },
    { name: "Isabella Rose", role: "Nail Artist", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop" },
    { name: "Olivia Grace", role: "Esthetician", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop" }
  ];

  const testimonials: Testimonial[] = [
    {
      text: "Glow Studio transformed my hair completely! Sophia understood exactly what I wanted and exceeded my expectations. The atmosphere is so relaxing and luxurious.",
      author: "Amanda Peterson",
      role: "Loyal Client",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "I got my bridal makeup and hair done here and I felt like a princess! The team is incredibly talented and made me feel so beautiful on my special day.",
      author: "Rachel Kim",
      role: "Bride 2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      text: "The facials here are absolutely heavenly. My skin has never looked better! I come here every month for my self-care ritual and always leave glowing.",
      author: "Michelle Torres",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const galleryImages: GalleryImage[] = [
    { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop", caption: "Luxurious Interior" },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop", caption: "Hair Styling" },
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop", caption: "Nail Art" },
    { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop", caption: "Facial Treatment" },
    { src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=400&fit=crop", caption: "Makeup Station" }
  ];

  const hours: Hours[] = [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM" }
  ];

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#" className={styles.logo}>
            Glow<span className={styles.logoAccent}>.</span>
          </a>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
            <li><a href="#services" className={styles.navLink} onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#gallery" className={styles.navLink} onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#team" className={styles.navLink} onClick={() => setMenuOpen(false)}>Team</a></li>
            <li><a href="#booking" className={styles.navLink} onClick={() => setMenuOpen(false)}>Book Now</a></li>
            <li className={styles.mobileOnly}>
              <a href="#booking" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Book Appointment
              </a>
            </li>
          </ul>
          <div className={styles.navCta}>
            <span className={styles.navPhone}>(212) 555-GLOW</span>
            <a href="#booking" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              Book Appointment
            </a>
          </div>
          <button 
            className={`${styles.mobileMenuBtn} ${menuOpen ? styles.mobileMenuOpen : ""}`} 
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroDecor1}></div>
        <div className={styles.heroDecor2}></div>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>✨ Luxury Beauty Experience</span>
              <h1 className={styles.heroTitle}>
                Discover Your<br />
                <span className={styles.heroTitleAccent}>Inner Radiance</span>
              </h1>
              <p className={styles.heroDescription}>
                Indulge in premium beauty services in our serene sanctuary. From
                transformative hair styling to rejuvenating spa treatments, we&apos;re
                dedicated to making you feel beautiful inside and out.
              </p>
              <div className={styles.heroButtons}>
                <a href="#booking" className="btn btn-primary">Book Your Visit</a>
                <a href="#services" className="btn btn-secondary">Explore Services</a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=700&fit=crop"
                alt="Beauty treatment"
                className={styles.heroImageMain}
                width={600}
                height={700}
                unoptimized
              />
              <div className={styles.heroImageFloat}>
                <div className={styles.heroFloatEmoji}><Heart size={24} /></div>
                <div className={styles.heroFloatText}>
                  <strong>5,000+</strong>
                  Happy Clients
                </div>
              </div>
              <div className={styles.heroImageBadge}>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Luxurious Treatments</h2>
            <p className="section-description">
              From head to toe, our expert team offers a full range of beauty
              services tailored to your unique needs.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.servicePrice}>{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`section ${styles.about}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImages}>
              <Image
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400&h=350&fit=crop"
                alt="Salon interior"
                className={styles.aboutImage}
                width={400}
                height={350}
                unoptimized
              />
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=350&fit=crop"
                alt="Styling session"
                className={styles.aboutImage}
                width={400}
                height={350}
                unoptimized
              />
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.aboutLabel}>About Glow Studio</span>
              <h2 className={styles.aboutTitle}>Where Beauty Meets Serenity</h2>
              <p className={styles.aboutText}>
                Founded in 2014, Glow Studio has become Manhattan&apos;s premier destination
                for those seeking exceptional beauty services in an atmosphere of pure
                relaxation and luxury.
              </p>
              <p className={styles.aboutText}>
                Our philosophy centers on enhancing your natural beauty while providing
                an escape from the everyday. Every treatment is personalized, every
                product is premium, and every moment is designed for your well-being.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>10+</div>
                  <div className={styles.aboutStatLabel}>Years Experience</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>5K+</div>
                  <div className={styles.aboutStatLabel}>Happy Clients</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatNumber}>25+</div>
                  <div className={styles.aboutStatLabel}>Expert Stylists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`section ${styles.gallery}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Studio Gallery</h2>
            <p className="section-description">
              A glimpse into our beautiful space and the artistry of our team.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image src={image.src} alt={image.caption} className={styles.galleryImage} width={600} height={600} unoptimized />
                <div className={styles.galleryOverlay}>
                  <span className={styles.galleryCaption}>{image.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`section ${styles.team}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Meet The Artists</span>
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-description">
              Talented professionals passionate about bringing out your best.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrap}>
                  <Image src={member.image} alt={member.name} className={styles.teamImage} width={400} height={500} unoptimized />
                  <div className={styles.teamSocial}>
                    <a href="#" className={styles.teamSocialLink}><Instagram size={20} /></a>
                    <a href="#" className={styles.teamSocialLink}><Linkedin size={20} /></a>
                  </div>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonials}`}>
        <div className={styles.testimonialsDecor}></div>
        <div className="container">
          <div className={`section-header ${styles.testimonialsHeader}`}>
            <span className="section-label">Client Love</span>
            <h2 className="section-title">What They Say</h2>
            <p className="section-description">
              Real stories from our cherished clients about their Glow experience.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <span className={styles.testimonialQuote}>&ldquo;</span>
                <div className={styles.testimonialStars}>
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className={styles.authorAvatar}
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className={`section ${styles.booking}`}>
        <div className="container">
          <div className={styles.bookingGrid}>
            <div className={styles.bookingInfo}>
              <span className="section-label">Contact Us</span>
              <h2>Book Your Beauty Session</h2>
              <p>
                Ready to glow? Schedule your appointment today and let us pamper you.
              </p>
              <div className={styles.bookingContact}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><MapPin size={20} /></div>
                  <div className={styles.contactText}>
                    <h4>Visit Us</h4>
                    <p>456 Beauty Lane, SoHo, NY 10012</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Phone size={20} /></div>
                  <div className={styles.contactText}>
                    <h4>Call Us</h4>
                    <p>(212) 555-GLOW</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Mail size={20} /></div>
                  <div className={styles.contactText}>
                    <h4>Email Us</h4>
                    <p>hello@glowstudio.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form className={styles.bookingForm}>
              <h3 className={styles.formTitle}>Request an Appointment</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input type="text" className={styles.formInput} placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone</label>
                  <input type="tel" className={styles.formInput} placeholder="(555) 000-0000" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input type="email" className={styles.formInput} placeholder="your@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Service</label>
                  <select className={styles.formSelect}>
                    <option value="">Select a service</option>
                    <option value="hair">Hair Styling</option>
                    <option value="nails">Nail Services</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="massage">Massage Therapy</option>
                    <option value="makeup">Makeup</option>
                    <option value="bridal">Bridal Package</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Preferred Date</label>
                  <input type="date" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Preferred Time</label>
                  <select className={styles.formSelect}>
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.formLabel}>Special Requests</label>
                  <textarea
                    className={styles.formTextarea}
                    placeholder="Any preferences or notes..."
                  ></textarea>
                </div>
                <div className={styles.formSubmit}>
                  <button type="submit" className="btn btn-primary">Book Appointment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <a href="#" className={styles.logo}>
                Glow<span className={styles.logoAccent}>.</span>
              </a>
              <p>
                Your sanctuary for beauty and self-care. Experience luxury treatments
                in a serene environment designed for your relaxation.
              </p>
              <div className={styles.footerSocial}>
                <a href="#" className={styles.footerSocialLink}><Instagram size={20} /></a>
                <a href="#" className={styles.footerSocialLink}><Facebook size={20} /></a>
                <a href="#" className={styles.footerSocialLink}><Youtube size={20} /></a>
                <a href="#" className={styles.footerSocialLink}><Youtube size={20} /></a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Hair Styling</a></li>
                <li><a href="#">Nail Services</a></li>
                <li><a href="#">Facial Treatments</a></li>
                <li><a href="#">Massage</a></li>
                <li><a href="#">Bridal</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Opening Hours</h4>
              <div className={styles.footerHours}>
                {hours.map((item, index) => (
                  <div key={index} className={styles.footerHoursRow}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © 2026 Glow Studio. All rights reserved.
            </p>
            <div className={styles.footerLegal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
