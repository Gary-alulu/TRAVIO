import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function BookingConfirmationPage() {
  // Dummy data for demonstration; replace with real data fetching/props
  const traveler = { name: "Jane Doe", contact: "jane@example.com" };
  const trip = { destination: "Paris, France", dates: "June 10-17, 2024", itineraryLink: "/bookings/itinerary.pdf" };
  const payment = { amount: "$2,500", method: "Visa **** 1234", transactionId: "TXN-987654321" };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white-off px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <CheckCircleIcon className="h-16 w-16 text-primary mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold text-primary mb-2">Your Journey is Booked!</h1>
        <p className="text-gray-700 mb-6 text-center">Thank you for booking with Travio. We’re excited to be part of your adventure!</p>
        <section className="w-full mb-4">
          <h2 className="font-semibold text-primary-dark mb-1">Traveler Info</h2>
          <div className="bg-white-off rounded p-3 text-sm">
            <div><span className="font-medium">Name:</span> {traveler.name}</div>
            <div><span className="font-medium">Contact:</span> {traveler.contact}</div>
          </div>
        </section>
        <section className="w-full mb-4">
          <h2 className="font-semibold text-primary-dark mb-1">Trip Details</h2>
          <div className="bg-white-off rounded p-3 text-sm">
            <div><span className="font-medium">Destination:</span> {trip.destination}</div>
            <div><span className="font-medium">Dates:</span> {trip.dates}</div>
            <div><a href={trip.itineraryLink} className="text-primary underline" target="_blank" rel="noopener noreferrer">View Itinerary</a></div>
          </div>
        </section>
        <section className="w-full mb-4">
          <h2 className="font-semibold text-primary-dark mb-1">Payment Summary</h2>
          <div className="bg-white-off rounded p-3 text-sm">
            <div><span className="font-medium">Amount Paid:</span> {payment.amount}</div>
            <div><span className="font-medium">Payment Method:</span> {payment.method}</div>
            <div><span className="font-medium">Transaction ID:</span> {payment.transactionId}</div>
          </div>
        </section>
        <div className="w-full flex flex-col items-center mb-4">
          <span className="text-green-700 text-sm mb-2">We’ve sent you the details via email.</span>
          <a href={trip.itineraryLink} download className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark transition">Download Itinerary (PDF)</a>
        </div>
        <div className="w-full flex gap-4 mt-2">
          <button className="flex-1 bg-primary-light text-primary-dark px-4 py-2 rounded hover:bg-primary transition">Modify Booking</button>
          <button className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition">Cancel Booking</button>
        </div>
      </div>
    </main>
  );
}