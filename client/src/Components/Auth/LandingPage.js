import React, { useEffect, useRef, useState } from "react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div
      data-theme="serenity"
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header/Navigation with animation */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 animate-slide-down">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {[
                "Home",
                "About Us",
                "Programs",
                "Facilities",
                "Testimonials",
                "Contact",
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-primary hover:scale-105 transition-transform duration-300">
            The Serenity Place
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              "Home",
              "About Us",
              "Programs",
              "Facilities",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary hover:scale-105 transition-transform duration-300 pulse-animation">
            Call Now: 0722970951
          </a>
        </div>
      </div>

      {/* Hero Section with enhanced animation */}
      <section
        id="home"
        className="hero min-h-screen hero-bg text-white"
        ref={addToRefs}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center animate-float">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl md:text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white">
              Find Your Path to Recovery
            </h1>
            <p className="mb-5 text-xl animate-fade-in-delayed">
              At The Serenity Place, we provide compassionate, comprehensive
              care to help you reclaim your life. Our evidence-based treatments
              and supportive environment foster lasting recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <button className="btn btn-primary btn-lg hover:scale-110 transition-transform duration-300 shadow-lg">
                Start Your Journey Today
              </button>
              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-gray-800 hover:scale-110 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-base-200" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={addToRefs}>
            <h2 className="text-4xl font-bold mb-4">
              About The Serenity Place
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We are a leading counselling centre dedicated to providing
              personalized care in a tranquil, healing environment.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1" ref={addToRefs}>
              <div className="facility-img w-full rounded-xl hover:scale-105 transition-transform duration-500">
                [Image: Our Peaceful Environment]
              </div>
            </div>
            <div className="flex-1" ref={addToRefs}>
              <h3 className="text-3xl font-bold mb-6">
                Our Mission & Approach
              </h3>
              <p className="mb-4">
                At The Serenity Place, we believe that recovery is a journey
                that requires comprehensive, individualized care. Our team of
                licensed professionals creates personalized treatment plans that
                address the physical, emotional, and psychological aspects of
                healing.
              </p>
              <p className="mb-6">
                We combine evidence-based therapies with holistic approaches to
                support whole-person healing in our peaceful, welcoming
                facility.
              </p>
              <div className="stats shadow bg-base-100 hover:scale-105 transition-transform duration-300">
                <div className="stat">
                  <div className="stat-figure text-primary animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Clients Helped</div>
                  <div className="stat-value text-primary">2,500+</div>
                  <div className="stat-desc">Successful healing journeys</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={addToRefs}>
            <h2 className="text-4xl font-bold mb-4">
              Our Counselling Programs
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We offer a range of specialized programs designed to meet
              individual needs at every stage of healing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Therapy",
                description:
                  "One-on-one sessions tailored to your specific needs and goals with our experienced counsellors.",
                image: "Individual Therapy",
              },
              {
                title: "Group Counselling",
                description:
                  "Share experiences and gain support in a safe, confidential group setting with professional guidance.",
                image: "Group Counselling",
              },
              {
                title: "Family Therapy",
                description:
                  "Heal relationships and improve communication through guided family sessions.",
                image: "Family Therapy",
              },
            ].map((program, index) => (
              <div
                key={program.title}
                className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
                ref={addToRefs}
              >
                <figure className="px-4 pt-4">
                  <div className="facility-img w-full rounded-xl">
                    [Image: {program.image}]
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary hover:scale-110 transition-transform duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-base-200" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={addToRefs}>
            <h2 className="text-4xl font-bold mb-4">Our Healing Environment</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our welcoming facility is designed to promote healing, comfort,
              and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Private Sessions",
                description:
                  "Comfortable, confidential spaces designed for personal reflection and healing.",
              },
              {
                title: "Group Rooms",
                description:
                  "Specialized rooms for group sessions in a comfortable, safe setting.",
              },
              {
                title: "Meditation Spaces",
                description:
                  "Peaceful areas for mindfulness, meditation, and relaxation exercises.",
              },
              {
                title: "Welcome Area",
                description:
                  "A warm, inviting reception area to make you feel comfortable from the start.",
              },
            ].map((facility, index) => (
              <div
                key={facility.title}
                className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-500"
                ref={addToRefs}
              >
                <figure>
                  <div className="facility-img w-full">
                    [Image: {facility.title}]
                  </div>
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={addToRefs}>
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hear from those who have found peace and healing through our
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael R.",
                year: "2022",
                text: "The Serenity Place gave me my life back. The compassionate staff and professional approach helped me address my challenges in a safe, supportive environment.",
              },
              {
                name: "Sarah L.",
                year: "2023",
                text: "The holistic approach at The Serenity Place made all the difference. I not only found solutions but learned healthy coping mechanisms that I use every day.",
              },
              {
                name: "James T.",
                year: "2021",
                text: "I tried other approaches before finding The Serenity Place. The personalized care and genuine support made this experience truly transformative.",
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-500"
                ref={addToRefs}
              >
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mb-6 italic">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="testimonial-img">[Client Photo]</div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm">
                        Healing Journey {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-primary text-primary-content"
        ref={addToRefs}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-pulse">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward a healthier, happier life. Our team is
            available to answer your questions and guide you through the
            process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce">
            <button className="btn btn-secondary btn-lg hover:scale-110 transition-transform duration-300 shadow-lg">
              Call Now: 0722970951
            </button>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-gray-800 hover:scale-110 transition-transform duration-300">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-base-200" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={addToRefs}>
            <h2 className="text-4xl font-bold mb-4">
              Contact The Serenity Place
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to help you find peace and healing. Reach out to begin
              your journey.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1" ref={addToRefs}>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-500">
                <div className="card-body">
                  <h3 className="card-title mb-6">Send Us a Message</h3>
                  <form>
                    {[
                      {
                        label: "Your Name",
                        type: "text",
                        placeholder: "Full Name",
                      },
                      {
                        label: "Your Email",
                        type: "email",
                        placeholder: "email@example.com",
                      },
                      {
                        label: "Phone Number",
                        type: "tel",
                        placeholder: "0722970951",
                      },
                    ].map((field, index) => (
                      <div key={field.label} className="form-control mb-4">
                        <label className="label">
                          <span className="label-text">{field.label}</span>
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="input input-bordered focus:scale-105 transition-transform duration-300"
                          required
                        />
                      </div>
                    ))}
                    <div className="form-control mb-4">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-24 focus:scale-105 transition-transform duration-300"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        type="button"
                        className="btn btn-primary hover:scale-105 transition-transform duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-1" ref={addToRefs}>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-500">
                <div className="card-body">
                  <h3 className="card-title mb-6">Our Information</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                        title: "Address",
                        content:
                          "Kahawa Sukari off Thika Super Highway\nKiu River, 2nd South (Imani Court)",
                      },
                      {
                        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                        title: "Phone",
                        content: "0722970951\n070189810",
                      },
                      {
                        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                        title: "Email & Website",
                        content:
                          "serenityplace2013@gmail.com\nhttps://www.theserenityplace.org/",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="flex items-start hover:scale-105 transition-transform duration-300"
                      >
                        <div className="text-primary mr-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d={item.icon}
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="whitespace-pre-line">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="divider"></div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <h4 className="font-bold mb-4">Hours of Operation</h4>
                    <p>Appointments: Flexible Scheduling</p>
                    <p>Administrative Office: Mon-Fri 9am-5pm</p>
                    <p>Emergency Support: Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* showTop */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn btn-primary fixed bottom-6 right-6 shadow-lg rounded-full"
          aria-label="Back to top"
        >
          ⬆️
        </button>
      )}

      {/* Footer */}
      <footer
        className="footer footer-center p-10 bg-base-300 text-base-content"
        ref={addToRefs}
      >
        <aside>
          <h3 className="text-2xl font-bold text-primary mb-2 animate-pulse">
            The Serenity Place
          </h3>
          <p className="font-bold">Counselling Centre</p>
          <p className="mt-2">
            Kahawa Sukari off Thika Super Highway
            <br />
            Kiu River, 2nd South (Imani Court)
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> 0722970951 / 070189810
            <br />
            <strong>Email:</strong> serenityplace2013@gmail.com
          </p>
          <p className="mt-2">
            <strong>Website:</strong> https://www.theserenityplace.org/
          </p>
          <p className="mt-4">Copyright © 2023 - All rights reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {[...Array(3)].map((_, index) => (
              <a
                key={index}
                className="hover:scale-125 transition-transform duration-300"
              >
                {/* Social media icons */}
              </a>
            ))}
          </div>
        </nav>
      </footer>

      <style jsx>{`
        .hero-bg {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("https://placehold.co/1200x800/1e40af/ffffff?text=Peaceful+Environment")
              center/cover no-repeat;
        }
        .facility-img {
          height: 200px;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: all 0.5s ease;
        }
        .testimonial-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          margin: 0 auto;
          transition: all 0.3s ease;
        }

        /* Custom Animations */
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-slide-down {
          animation: slideDown 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-typing {
          animation: typing 3.5s steps(40, end);
          border-right: 0.15em solid white;
          white-space: nowrap;
          overflow: hidden;
        }

        .animate-fade-in-delayed {
          animation: fadeInUp 1s ease-out 1.5s both;
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out 2s both;
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
