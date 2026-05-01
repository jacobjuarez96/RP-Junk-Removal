import "./App.css";
import { useState, useEffect, useCallback } from "react";

import logo from "./assets/RP-JUNK-REMOVAL-LOGO-1.svg";
import {
  Trash2,
  Trees,
  CloudRain,
  Hammer,
  Sparkles,
  CheckCircle
} from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import cleanup1 from "./assets/cleanup-1.png";
import cleanup2 from "./assets/cleanup-2.png";
import cleanup3 from "./assets/cleanup-3.png";
import cleanup4 from "./assets/cleanup-4.png";
import cleanup5 from "./assets/cleanup-5.jpg";
import cleanup6 from "./assets/cleanup-6.png";

const phone = "615-310-4988";

const services = [
  { title: "Junk Removal", icon: Trash2 },
  { title: "Tree Cleanup", icon: Trees },
  { title: "Storm Debris", icon: CloudRain },
  { title: "Light Demolition", icon: Hammer },
  { title: "General Cleanup", icon: Sparkles },
  { title: "No Job Too Small", icon: CheckCircle },
];

function App() {

  const galleryImages = [cleanup1, cleanup2, cleanup3, cleanup4, cleanup5, cleanup6];

const [activeImage, setActiveImage] = useState(0);
const [manualReset, setManualReset] = useState(0);

const nextImage = useCallback(() => {
  setActiveImage((prev) => (prev + 1) % galleryImages.length);
}, [galleryImages.length]);

const prevImage = () => {
  setActiveImage((prev) =>
    prev === 0 ? galleryImages.length - 1 : prev - 1
  );
};

const handleManualNext = () => {
  nextImage();
  setManualReset((prev) => prev + 1);
};

const handleManualPrev = () => {
  prevImage();
  setManualReset((prev) => prev + 1);
};

const handleDotClick = (index) => {
  setActiveImage(index);
  setManualReset((prev) => prev + 1);
};

useEffect(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 4000);

  return () => clearInterval(interval);
}, [nextImage, manualReset]);

  return (
    <main className="site">
      <nav className="nav">
        <img src={logo} alt="RP Junk Removal logo" className="navLogo" />
        <a href={`tel:${phone}`} className="navCall">Call {phone}</a>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Fast turnaround • Fair pricing • Free estimates</p>
          <h1>Junk removal, tree cleanup, storm debris & light demo.</h1>
          <p className="heroText">
            If it’s piled up, overgrown, or just needs gone, RP Junk Removal will
            take care of it with clean, reliable work.
          </p>

          <div className="heroActions">
            <a href={`tel:${phone}`} className="primaryBtn">Call Now</a>
            <a href={`sms:${phone}`} className="secondaryBtn">Text a Picture</a>
          </div>
        </div>

        <div className="heroCard">
          {/* <h2>Free Estimates</h2>
          <p>Send a picture or give us a call.</p>
          <strong>{phone}</strong>
          <div className="estimateBadges">
  <span>✓ Fast Turnaround</span>
  <span>✓ Fair Pricing</span>
</div> */}
 <div className="cleanupGallery">
          <button className="galleryArrow galleryArrowLeft" onClick={handleManualPrev}>
            <ChevronLeft size={32} />
          </button>

          <div className="galleryImageWrap">
            <img
              key={activeImage}
              src={galleryImages[activeImage]}
              className="galleryImage"
              alt="cleanup"
            />
            <span>Before / After</span>
          </div>

          <div className="galleryDots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeImage === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button className="galleryArrow galleryArrowRight" onClick={handleManualNext}>
            <ChevronRight size={32} />
          </button>
        </div>
        </div>
      </section>

      <section className="services">
        <p className="sectionLabel">What We Do</p>
        <h2>Cleanup services for your house, yard, or property.</h2>



        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="iconWrap">
                  <Icon size={28} strokeWidth={2.2} />
                </div>
                <h3>{service.title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split proofSection">
        <div>
          <p className="sectionLabel">Why RP Junk Removal</p>
          <h2>Clean, reliable work from start to finish.</h2>
          <p className="proofText">
            Real cleanup work, fast turnaround, and every property left looking better
            than we found it.
          </p>
        </div>

        <div className="cleanupGallery">
          <button className="galleryArrow galleryArrowLeft" onClick={handleManualPrev}>
            <ChevronLeft size={32} />
          </button>

          <div className="galleryImageWrap">
            <img
              key={activeImage}
              src={galleryImages[activeImage]}
              className="galleryImage"
              alt="cleanup"
            />
            <span>Before / After</span>
          </div>

          <div className="galleryDots">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${activeImage === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button className="galleryArrow galleryArrowRight" onClick={handleManualNext}>
            <ChevronRight size={32} />
          </button>
        </div>
      </section>

      <section className="cta">
        <h2>Got junk or tree work you’ve been putting off?</h2>
        <p>Call or text today for a free estimate.</p>
        <a href={`tel:${phone}`} className="primaryBtn">Call {phone}</a>
      </section>

      <footer>
        <img src={logo} alt="RP Junk Removal logo" />
        <p>Junk Removal • Tree Work • Storm Cleanup • Light Demo</p>
      </footer>
    </main>
  );
}

export default App;