import React from "react";
import { useParams } from "react-router-dom";
import tripsData from "../tripsData";

function TripDetail() {
  const { slug } = useParams();
  const trip = tripsData.find((trip) => trip.slug === slug);
  //if (!trip) {
  //  return <Navigate to="/" />;
  //}
  return (
    <div class="modal-dialog modal-xl">
      <h1>{slug}</h1>
      <div class="modal-content">
        <div class="modal-body text-center pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {trip.name}
                </h2>
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="divider-custom-line"></div>
                </div>
                <img class="img-fluid rounded mb-5" src={trip.img} alt="..." />
                <p class="mb-4">
                  City : {trip.city}
                  <br />
                  Length : {trip.length1}Km
                  <br />
                  Rating : {trip.rating}
                  <br />
                  Difficulty : {trip.difficulty}
                  <br />
                  Details : {trip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
