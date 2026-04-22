import React, { useState, useEffect } from "react";
import gsap from "gsap";

function NavbarMenu() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (MobileMenuOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.height = "";
      document.body.style.overflowY = "auto";
    };
  }, [MobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        gsap.to(".navbar", { y: "-100%", duration: 0.6, ease: "power2.out" });
        gsap.to(".whatsapp-general", { x: "100%", duration: 0.6, ease: "power2.out" });
      } else {
        gsap.to(".navbar", { y: "0%", duration: 0.6, ease: "power2.out" });
        gsap.to(".whatsapp-general", { x: "0%", duration: 0.6, ease: "power2.out" });
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/equipo", label: "Equipo" },
    { href: "/instalaciones", label: "Instalaciones" },
    { href: "/contacto", label: "Contacto" },
    { href: "/fqa", label: "FQA" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`navbar select-none hidden lg:flex fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-primary_light/50"
            : "bg-white border-b border-primary_light/40"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-8">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <svg
              className="h-10 w-auto"
              viewBox="0 0 816 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 43.1536H122.942V72.7446L51.226 157.819H122.942V191.725H0V157.819L69.9084 72.7446H0V43.1536Z" fill="#6BB2AB" />
              <path d="M285.66 191.725L340.502 43.1536H373.648L424.272 171.998H418.245C408.603 161.518 385.702 153.504 382.688 140.557C384.697 133.365 383.773 116.022 364.006 104.185C364.006 99.2533 364.006 89.3896 355.569 88.7731C352.555 94.7324 344.962 107.021 338.694 108.5C330.86 110.35 326.641 118.364 326.641 123.912C326.641 129.461 323.025 135.009 321.82 136.242C320.614 137.475 318.807 146.722 332.065 151.654C335.078 152.065 341.466 152.64 342.913 151.654C344.721 150.421 327.846 172.614 333.873 191.725H285.66Z" fill="#6BB2AB" />
              <path d="M224.792 82.6083C223.185 77.471 222.381 66.9497 232.024 65.9634C228.649 76.8134 225.796 81.5809 224.792 82.6083Z" fill="#6BB2AB" />
              <path d="M248.898 74.5941C246.688 74.1831 241.907 74.8407 240.461 80.7589C244.679 77.06 246.487 77.6765 248.898 74.5941Z" fill="#6BB2AB" />
              <path d="M208.52 0L201.288 30.2075H227.805L240.461 0H208.52Z" fill="#6BB2AB" />
              <path d="M577.95 45.003H681.607V77.06H615.315V104.185H665.938V130.694H615.315V158.435H681.607V191.725H577.95V45.003Z" fill="#E67658" />
              <path d="M702.7 45.003L816 43.1536V77.06H778.033V191.725H740.668V77.06H702.7V45.003Z" fill="#E67658" />
              <path d="M418.245 45.003H461.034L489.359 136.242L520.697 45.003H559.267L505.028 191.725H474.292L446.269 118.364L418.245 45.003Z" fill="#E67658" />
              <path d="M230.818 63.4974C215.953 66.1688 182.606 78.1697 168.142 104.802C150.062 138.092 172.963 176.313 189.838 191.725C206.712 207.137 120.532 167.066 142.227 94.3214C159.584 36.1257 210.931 38.8382 238.653 45.003C273.607 56.0997 318.807 113.432 262.157 175.697C250.304 169.943 226.841 154.86 227.805 140.557C233.108 131.187 236.041 136.653 236.845 140.557C240.461 141.379 248.416 142.53 251.309 140.557C254.925 138.092 260.951 135.626 262.157 130.694C263.121 126.748 252.112 114.254 246.487 108.5V91.239L241.666 85.0742C244.278 81.7863 250.224 75.5804 253.117 77.06C256.733 78.9094 251.309 65.9634 232.024 74.5941L236.845 63.4974H230.818Z" fill="#6BB2AB" />
            </svg>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-base font-medium text-secondary_dark hover:text-primary_brand transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary_brand group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
            <a
              href="/agendamiento"
              className="ml-2 px-5 py-2 bg-secondary_brand text-white text-sm font-semibold rounded-full hover:bg-secondary_brand/90 transition-all duration-200 hover:shadow-md"
            >
              Agendar cita
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div
        className={`select-none lg:hidden sticky top-0 z-50 h-16 flex items-center justify-between px-4 transition-all duration-300 ${
          MobileMenuOpen ? "hidden" : "flex"
        } bg-white border-b border-primary_light/50`}
      >
        <a href="/">
          <svg className="h-8 w-auto" viewBox="0 0 816 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 43.1536H122.942V72.7446L51.226 157.819H122.942V191.725H0V157.819L69.9084 72.7446H0V43.1536Z" fill="#6BB2AB" />
            <path d="M285.66 191.725L340.502 43.1536H373.648L424.272 171.998H418.245C408.603 161.518 385.702 153.504 382.688 140.557C384.697 133.365 383.773 116.022 364.006 104.185C364.006 99.2533 364.006 89.3896 355.569 88.7731C352.555 94.7324 344.962 107.021 338.694 108.5C330.86 110.35 326.641 118.364 326.641 123.912C326.641 129.461 323.025 135.009 321.82 136.242C320.614 137.475 318.807 146.722 332.065 151.654C335.078 152.065 341.466 152.64 342.913 151.654C344.721 150.421 327.846 172.614 333.873 191.725H285.66Z" fill="#6BB2AB" />
            <path d="M224.792 82.6083C223.185 77.471 222.381 66.9497 232.024 65.9634C228.649 76.8134 225.796 81.5809 224.792 82.6083Z" fill="#6BB2AB" />
            <path d="M248.898 74.5941C246.688 74.1831 241.907 74.8407 240.461 80.7589C244.679 77.06 246.487 77.6765 248.898 74.5941Z" fill="#6BB2AB" />
            <path d="M208.52 0L201.288 30.2075H227.805L240.461 0H208.52Z" fill="#6BB2AB" />
            <path d="M577.95 45.003H681.607V77.06H615.315V104.185H665.938V130.694H615.315V158.435H681.607V191.725H577.95V45.003Z" fill="#E67658" />
            <path d="M702.7 45.003L816 43.1536V77.06H778.033V191.725H740.668V77.06H702.7V45.003Z" fill="#E67658" />
            <path d="M418.245 45.003H461.034L489.359 136.242L520.697 45.003H559.267L505.028 191.725H474.292L446.269 118.364L418.245 45.003Z" fill="#E67658" />
            <path d="M230.818 63.4974C215.953 66.1688 182.606 78.1697 168.142 104.802C150.062 138.092 172.963 176.313 189.838 191.725C206.712 207.137 120.532 167.066 142.227 94.3214C159.584 36.1257 210.931 38.8382 238.653 45.003C273.607 56.0997 318.807 113.432 262.157 175.697C250.304 169.943 226.841 154.86 227.805 140.557C233.108 131.187 236.041 136.653 236.845 140.557C240.461 141.379 248.416 142.53 251.309 140.557C254.925 138.092 260.951 135.626 262.157 130.694C263.121 126.748 252.112 114.254 246.487 108.5V91.239L241.666 85.0742C244.278 81.7863 250.224 75.5804 253.117 77.06C256.733 78.9094 251.309 65.9634 232.024 74.5941L236.845 63.4974H230.818Z" fill="#6BB2AB" />
          </svg>
        </a>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg text-secondary_dark hover:bg-primary_light transition-colors duration-200"
          aria-label="Abrir menú"
        >
          <span className="icon-[eva--menu-fill] text-2xl"></span>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col lg:hidden transition-all duration-300 ${
          MobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-primary_light">
          <a href="/" onClick={toggleMenu}>
            <svg className="h-8 w-auto" viewBox="0 0 816 195" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 43.1536H122.942V72.7446L51.226 157.819H122.942V191.725H0V157.819L69.9084 72.7446H0V43.1536Z" fill="#6BB2AB" />
              <path d="M285.66 191.725L340.502 43.1536H373.648L424.272 171.998H418.245C408.603 161.518 385.702 153.504 382.688 140.557C384.697 133.365 383.773 116.022 364.006 104.185C364.006 99.2533 364.006 89.3896 355.569 88.7731C352.555 94.7324 344.962 107.021 338.694 108.5C330.86 110.35 326.641 118.364 326.641 123.912C326.641 129.461 323.025 135.009 321.82 136.242C320.614 137.475 318.807 146.722 332.065 151.654C335.078 152.065 341.466 152.64 342.913 151.654C344.721 150.421 327.846 172.614 333.873 191.725H285.66Z" fill="#6BB2AB" />
              <path d="M224.792 82.6083C223.185 77.471 222.381 66.9497 232.024 65.9634C228.649 76.8134 225.796 81.5809 224.792 82.6083Z" fill="#6BB2AB" />
              <path d="M248.898 74.5941C246.688 74.1831 241.907 74.8407 240.461 80.7589C244.679 77.06 246.487 77.6765 248.898 74.5941Z" fill="#6BB2AB" />
              <path d="M208.52 0L201.288 30.2075H227.805L240.461 0H208.52Z" fill="#6BB2AB" />
              <path d="M577.95 45.003H681.607V77.06H615.315V104.185H665.938V130.694H615.315V158.435H681.607V191.725H577.95V45.003Z" fill="#E67658" />
              <path d="M702.7 45.003L816 43.1536V77.06H778.033V191.725H740.668V77.06H702.7V45.003Z" fill="#E67658" />
              <path d="M418.245 45.003H461.034L489.359 136.242L520.697 45.003H559.267L505.028 191.725H474.292L446.269 118.364L418.245 45.003Z" fill="#E67658" />
              <path d="M230.818 63.4974C215.953 66.1688 182.606 78.1697 168.142 104.802C150.062 138.092 172.963 176.313 189.838 191.725C206.712 207.137 120.532 167.066 142.227 94.3214C159.584 36.1257 210.931 38.8382 238.653 45.003C273.607 56.0997 318.807 113.432 262.157 175.697C250.304 169.943 226.841 154.86 227.805 140.557C233.108 131.187 236.041 136.653 236.845 140.557C240.461 141.379 248.416 142.53 251.309 140.557C254.925 138.092 260.951 135.626 262.157 130.694C263.121 126.748 252.112 114.254 246.487 108.5V91.239L241.666 85.0742C244.278 81.7863 250.224 75.5804 253.117 77.06C256.733 78.9094 251.309 65.9634 232.024 74.5941L236.845 63.4974H230.818Z" fill="#6BB2AB" />
            </svg>
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-secondary_dark hover:bg-primary_light transition-colors duration-200"
            aria-label="Cerrar menú"
          >
            <span className="icon-[line-md--close] text-2xl"></span>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="py-4 text-2xl font-medium text-secondary_dark hover:text-primary_brand border-b border-primary_light/60 transition-colors duration-200 flex items-center justify-between group"
            >
              {link.label}
              <span className="icon-[ph--arrow-right] text-lg text-primary_light group-hover:text-primary_brand transition-colors duration-200"></span>
            </a>
          ))}
          <a
            href="/agendamiento"
            onClick={toggleMenu}
            className="mt-6 py-4 text-center text-lg font-semibold bg-secondary_brand text-white rounded-2xl hover:bg-secondary_brand/90 transition-all duration-200"
          >
            Agendar cita
          </a>
        </nav>

        {/* Contact Info */}
        <div className="px-8 py-6 border-t border-primary_light space-y-3">
          <div className="flex items-center gap-3 text-sm text-secondary_dark">
            <span className="icon-[ph--map-pin-area-duotone] text-xl text-secondary_brand flex-shrink-0"></span>
            <span>Carrera 113 #77-30, Villas De Granada, Bogotá</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-secondary_dark">
            <span className="icon-[ph--phone-transfer-duotone] text-xl text-secondary_brand flex-shrink-0"></span>
            <a href="tel:6016756195" className="font-medium">(601) 6756195</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-secondary_dark">
            <span className="icon-[iconamoon--email-duotone] text-xl text-secondary_brand flex-shrink-0"></span>
            <a href="mailto:zoavet@hotmail.com" className="font-medium">zoavet@hotmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMenu;
