import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      // When visiting /visit-us from navbar
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="font-serif text-gray-800">
      <VisitUsHero />
      <ShowroomPhotos />
      <StoreDetails />
      <AppointmentBooking />
      <ContactInfo />
      <EnquiryForm />
      <BusinessHours />
      <GoogleMap />
    </div>
  );
}