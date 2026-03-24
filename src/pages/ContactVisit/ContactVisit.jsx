import React from "react";
import ShowroomPhotos from "./ShowroomPhotos"; 
import StoreDetails from "./StoreDetails";
import AppointmentBooking from "./AppointmentBooking";
import ContactInfo from "./ContactInfo";
import EnquiryForm from "./EnquiryForm";
import BusinessHours from "./BusinessHours";
import GoogleMap from "./GoogleMap";
import VisitUsHero from "./VisitUsHero";

export default function ContactVisit() {
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