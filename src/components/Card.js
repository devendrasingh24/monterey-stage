import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.montereystagecoachlodge.com/assets/B/themes/montereystagecoachlodge/amp/img/guest-room.jpg"
              className="img-fluid rounded-start"
              alt="img"
              style={{ height: "1000", width: "973" }}
            />
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ fontSize: "20px", background: "#fff" }}
            >
              <h4
                className="card-title"
                style={{ fontSize: "25px", fontWeight: "bold" }}
              >
                GUEST ROOMS
              </h4>
              <p className="card-text" style={{ fontSize: "20px" }}>
                The Monterey Stage Coach Lodge offers premium accommodation
                options in Monterey. Our well-appointed Monterey Hotel Rooms
                will help you enjoy a luxurious stay in Monterey. Whether you
                are a business traveler or you are on a vacation, we assure you
                that you will find our Monterey hotel rooms to be a choice you
                won't regret for your accommodation needs. We have a variety of
                amenities to provide you with the most comfortable stay in
                Monterey. At the same time, at the Monterey Stage Coach Lodge,
                we are also very much aware of the fact that great hotel
                accommodations are not just a matter of cozy rooms and a variety
                of amenities, which we have, but the overall experience lies in
                serving every guest with a smile. We have a very friendly and
                helpful staff that is ready to go the extra mile to ensure that
              you enjoy your time in Monterey with a memorable stay. You will
                love our hospitality and our friendly services. .
              </p>
              <h5 className="card-text">
                <small className="text-muted">
                  TREAT YOURSELF WITH OUR SPACIOUS AND LUXURIOUS ROOMS
                </small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
