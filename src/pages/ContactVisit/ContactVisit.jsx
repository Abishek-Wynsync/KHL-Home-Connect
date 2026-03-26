import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ShowroomPhotos from "./ShowroomPhotos";
import StoreDetails from "./StoreDetails";
import AppointmentBooking from "./AppointmentBooking";
import ContactInfo from "./ContactInfo";
import EnquiryForm from "./EnquiryForm";
import BusinessHours from "./BusinessHours";
import GoogleMap from "./GoogleMap";
import VisitUsHero from "./VisitUsHero";

export default function ContactVisit() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="font-serif text-gray-800">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Visit Bosch Showroom Velachery | Store Location, Contact & Appointments
        </title>

        <meta
          name="description"
          content="Visit our Bosch Home Appliances showroom in Velachery, Chennai. Get directions, book appointments, view showroom photos, and contact our team for expert assistance."
        />

        <meta
          name="keywords"
          content="Bosch showroom Velachery address, Bosch store Chennai contact, Bosch showroom near me, Bosch Velachery location"
        />

       

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visit Bosch Showroom Velachery" />
        <meta
          name="twitter:description"
          content="Plan your visit to our Bosch Experience Store in Velachery. Get directions, contact details, and book an appointment."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dapj1nuzz/image/upload/v1774506837/opengraph_vgzvxl.png" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Velachery, Chennai" />
      </Helmet>

      <VisitUsHero />
      <ShowroomPhotos />
      <StoreDetails />

      <div id="enquiry">
        <AppointmentBooking />
      </div>

      <ContactInfo />
      <EnquiryForm />
      <BusinessHours />
      <GoogleMap />
    </div>
  );
}