import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import PrimaryButton from "./primaryButton.astro";
function NavbarMenu() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navRef = useRef(null);

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

    // Cleanup the class on component unmount
    return () => {
      document.body.style.height = "";
      document.body.style.overflowY = "auto";
    };
  }, [MobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("current:", scrollTop);
      console.log("last current:", lastScrollTop);

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down - hide navbar
        gsap.to(".navbar", {
          y: "-100%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(".whatsapp-general", {
          x: "100%",
          duration: 1,
          ease: "power2.out",
        });
      } else {
        // Scroll up - show navbar
        gsap.to(".navbar", {
          y: "0%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(".whatsapp-general", {
          x: "0%",
          duration: 1,
          ease: "power2.out",
        });
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className="navbar w-screen select-none hidden  h-24  z-50 lg:flex lg:fixed top-0 left-0  bg-white  border-b-[1px] border-primary_light/60">
        <div className="w-1/2 flex justify-center items-center">
          <svg
            id="navbar-logo"
            className={`logo-big-nav w-3/5 h-20 `}
            viewBox="0 0 816 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 43.1536H122.942V72.7446L51.226 157.819H122.942V191.725H0V157.819L69.9084 72.7446H0V43.1536Z"
              fill="#6BB2AB"
            />
            <path
              d="M285.66 191.725L340.502 43.1536H373.648L424.272 171.998H418.245C408.603 161.518 385.702 153.504 382.688 140.557C384.697 133.365 383.773 116.022 364.006 104.185C364.006 99.2533 364.006 89.3896 355.569 88.7731C352.555 94.7324 344.962 107.021 338.694 108.5C330.86 110.35 326.641 118.364 326.641 123.912C326.641 129.461 323.025 135.009 321.82 136.242C320.614 137.475 318.807 146.722 332.065 151.654C335.078 152.065 341.466 152.64 342.913 151.654C344.721 150.421 327.846 172.614 333.873 191.725H285.66Z"
              fill="#6BB2AB"
            />
            <path
              d="M224.792 82.6083C223.185 77.471 222.381 66.9497 232.024 65.9634C228.649 76.8134 225.796 81.5809 224.792 82.6083Z"
              fill="#6BB2AB"
            />
            <path
              d="M248.898 74.5941C246.688 74.1831 241.907 74.8407 240.461 80.7589C244.679 77.06 246.487 77.6765 248.898 74.5941Z"
              fill="#6BB2AB"
            />
            <path
              d="M208.52 0L201.288 30.2075H227.805L240.461 0H208.52Z"
              fill="#6BB2AB"
            />
            <path
              d="M577.95 45.003H681.607V77.06H615.315V104.185H665.938V130.694H615.315V158.435H681.607V191.725H577.95V45.003Z"
              fill="#E67658"
            />
            <path
              d="M702.7 45.003L816 43.1536V77.06H778.033V191.725H740.668V77.06H702.7V45.003Z"
              fill="#E67658"
            />
            <path
              d="M418.245 45.003H461.034L489.359 136.242L520.697 45.003H559.267L505.028 191.725H474.292L446.269 118.364L418.245 45.003Z"
              fill="#E67658"
            />
            <path
              d="M230.818 63.4974C215.953 66.1688 182.606 78.1697 168.142 104.802C150.062 138.092 172.963 176.313 189.838 191.725C206.712 207.137 120.532 167.066 142.227 94.3214C159.584 36.1257 210.931 38.8382 238.653 45.003C273.607 56.0997 318.807 113.432 262.157 175.697C250.304 169.943 226.841 154.86 227.805 140.557C233.108 131.187 236.041 136.653 236.845 140.557C240.461 141.379 248.416 142.53 251.309 140.557C254.925 138.092 260.951 135.626 262.157 130.694C263.121 126.748 252.112 114.254 246.487 108.5V91.239L241.666 85.0742C244.278 81.7863 250.224 75.5804 253.117 77.06C256.733 78.9094 251.309 65.9634 232.024 74.5941L236.845 63.4974H230.818Z"
              fill="#6BB2AB"
            />
          </svg>
        </div>
        <div className=" px-5 w-1/2 flex flex-row justify-evenly items-center lg:text-2xl tracking-wide text-primary font-medium">
          <a
            href="/"
            className="hover:text-secondary hover:scale-110 transition-all duration-300"
          >
            Inicio
          </a>
          <a
            href="/servicios"
            className="hover:text-secondary hover:scale-110 transition-all duration-300"
          >
            Servicios
          </a>
          <a
            href="/equipo"
            className="hover:text-secondary hover:scale-110 transition-all duration-300"
          >
            Equipo
          </a>
          <a
            href="/contacto"
            className="hover:text-secondary hover:scale-110 transition-all duration-300"
          >
            Contacto
          </a>
        </div>
      </div>

      <div
        className={` w-screen select-none lg:hidden   h-24  z-50 sticky top-0  bg-white  border-b-[1px] border-primary_light/60 ${
          MobileMenuOpen ? "hidden" : "flex"
        } xl:hidden `}
      >
        <div className="fixed right-5 top-5 shadow-sm shadow-black  bg-white/80 rounded-full p-2 flex flex-col gap-5 justify-center items-center">
          <span
            onClick={toggleMenu}
            className="icon-[eva--menu-arrow-fill]  text-2xl md:text-4xl text-secondary_dark"
          ></span>
        </div>
        <div className="flex flex-row-reverse w-full justify-center items-center h-full bg-white  ">
          <div className="w-4/5 h h-full  flex justify-center items-center">
            <svg
              className="w-2/3 h-14 "
              id="progress-bar"
              viewBox="0 0 816 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 43.1536H122.942V72.7446L51.226 157.819H122.942V191.725H0V157.819L69.9084 72.7446H0V43.1536Z"
                fill="#6BB2AB"
              />
              <path
                d="M285.66 191.725L340.502 43.1536H373.648L424.272 171.998H418.245C408.603 161.518 385.702 153.504 382.688 140.557C384.697 133.365 383.773 116.022 364.006 104.185C364.006 99.2533 364.006 89.3896 355.569 88.7731C352.555 94.7324 344.962 107.021 338.694 108.5C330.86 110.35 326.641 118.364 326.641 123.912C326.641 129.461 323.025 135.009 321.82 136.242C320.614 137.475 318.807 146.722 332.065 151.654C335.078 152.065 341.466 152.64 342.913 151.654C344.721 150.421 327.846 172.614 333.873 191.725H285.66Z"
                fill="#6BB2AB"
              />
              <path
                d="M224.792 82.6083C223.185 77.471 222.381 66.9497 232.024 65.9634C228.649 76.8134 225.796 81.5809 224.792 82.6083Z"
                fill="#6BB2AB"
              />
              <path
                d="M248.898 74.5941C246.688 74.1831 241.907 74.8407 240.461 80.7589C244.679 77.06 246.487 77.6765 248.898 74.5941Z"
                fill="#6BB2AB"
              />
              <path
                d="M208.52 0L201.288 30.2075H227.805L240.461 0H208.52Z"
                fill="#6BB2AB"
              />
              <path
                d="M577.95 45.003H681.607V77.06H615.315V104.185H665.938V130.694H615.315V158.435H681.607V191.725H577.95V45.003Z"
                fill="#E67658"
              />
              <path
                d="M702.7 45.003L816 43.1536V77.06H778.033V191.725H740.668V77.06H702.7V45.003Z"
                fill="#E67658"
              />
              <path
                d="M418.245 45.003H461.034L489.359 136.242L520.697 45.003H559.267L505.028 191.725H474.292L446.269 118.364L418.245 45.003Z"
                fill="#E67658"
              />
              <path
                d="M230.818 63.4974C215.953 66.1688 182.606 78.1697 168.142 104.802C150.062 138.092 172.963 176.313 189.838 191.725C206.712 207.137 120.532 167.066 142.227 94.3214C159.584 36.1257 210.931 38.8382 238.653 45.003C273.607 56.0997 318.807 113.432 262.157 175.697C250.304 169.943 226.841 154.86 227.805 140.557C233.108 131.187 236.041 136.653 236.845 140.557C240.461 141.379 248.416 142.53 251.309 140.557C254.925 138.092 260.951 135.626 262.157 130.694C263.121 126.748 252.112 114.254 246.487 108.5V91.239L241.666 85.0742C244.278 81.7863 250.224 75.5804 253.117 77.06C256.733 78.9094 251.309 65.9634 232.024 74.5941L236.845 63.4974H230.818Z"
                fill="#6BB2AB"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 bg-primary_light flex flex-col ${
          MobileMenuOpen ? "flex" : "hidden"
        }  xl:hidden`}
      >
        <div className="w-full  h-1/3">
          <div className="h-20 flex justify-center items-center text-3xl text-secondary_dark tracking-wide font font-semibold uppercase gap-1">
            <span className="icon-[ph--bone-duotone] text-3xl md:text-4xl"></span>
            Menu
            <span
              onClick={toggleMenu}
              className="icon-[line-md--menu-to-close-alt-transition] absolute right-5  top-5  text-4xl md:text-6xl"
            ></span>
          </div>
          <div className="flex flex-grow flex-col text-3xl md:text-4-xl text-primary tracking-wide   items-center gap-3 py-3">
            <a href="/">Inicio</a>
            <a href="/servicios">Servicios</a>
            <a href="/equipo">Equipo</a>
            <a href="/contacto">Contacto</a>
            <a
              href="/contacto"
              className="bg-secondary  text-xl text-white rounded-full p-3"
            >
              Agendar cita
            </a>
          </div>
        </div>
        <div className="w-full h-2/3 flex flex-col justify-center items-center gap-5">
          <span className="icon-[ph--phone-transfer-duotone] text-5xl md:text-7xl text-secondary"></span>
          <a
            href="tel:6016756195"
            className="text-xl md:text-2xl font-black tracking-wide"
          >
            (601) 6756195
          </a>
          <span className="icon-[iconamoon--email-duotone] text-5xl md:text-7xl text-secondary"></span>
          <a
            href="mailto:zoavet@hotmail.com"
            className="text-xl md:text-2xl font-black tracking-wide text-center break-all"
          >
            zoavet@hotmail.com
          </a>
          <a
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.30169041661!2d-74.12693442399332!3d4.717565795257519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8357fed2c7a7%3A0x2cfcf2ddd4318cf1!2sZoavet%20Cl%C3%ADnica%20Veterinaria!5e0!3m2!1ses-419!2scl!4v1723820529747!5m2!1ses-419!2scl"
            className="w-full flex flex-col items-center gap-3"
          >
            <span className="icon-[ph--map-pin-area-duotone] text-5xl md:text-7xl text-secondary"></span>
            <div className="w-full flex flex-col items-center gap-3 px-5">
              <p className="text-xl md:text-2xl font-black tracking-wide text-center">
                Carrera 113 #77-30 - Villas De Granada, Bogotá
              </p>
            </div>
          </a>
          <div className="w-full flex flex-row items-start justify-around px-5 text-secondary_dark ">
            <span className="icon-[lets-icons--insta-duotone-line] text-5xl md:text-5xl"></span>
            <span className="icon-[ph--facebook-logo-duotone] text-5xl md:text-5xl"></span>
            <span className="icon-[ph--linkedin-logo-duotone]  text-5xl md:text-5xl"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMenu;
