import react from "react";
import { } from "react-dom";

// import {} from 
import { } from  "./Div.css";

export default function Div () {
          return(
                    <>
                    <div className="about-heading">
                          <h1 className="no-margin">
                             <span className="about-title-1">Welcome to</span>
                             <span className="about-title-2">Stage Coach Lodge</span>
                          </h1>
                          <div style={{height: "786px"}} className="mobile0verviewinnwerdiv">
                               <div className="animatedheight about-description">
                                   <h2>
                                   <a  href="https://www.montereystagecoachlodge.com/overview"><strong >Top Ranked Hotel In Monterey</strong></a>
                                   </h2>
                                   <p >It is our pleasure to welcome you and your family to the beautiful Monterey Peninsula. The Stage Coach Lodge offers easy access to the various tourist attractions located in and around the Peninsula with newly remodeled air-conditioned hotel rooms. Simply make a right turn onto Tenth Street when exiting the Downtown Monterey exit off of Highway 1 and you’ll find our hotel nestled in a quiet residential neighborhood within a short stroll to Lake El Estero, Dennis the Menace Park, a variety of shops and restaurants, and of course, the beach. Our Monterey hotel is also within walking distance to the Naval Postgraduate School and Hyatt Regency Conference Center. You can drive to downtown, Fisherman’s Wharf, Cannery Row and the Monterey Bay Aquarium or hop back onto HWY 1 to get to Laguna Seca Raceway, the Monterey Fairgrounds, Carmel and the 17 Mile Drive, which are all within minutes of our property.</p>
                                   <h2><a href="https://www.montereystagecoachlodge.com/guestrooms"><strong>Monterey Hotel Rooms</strong></a></h2>
                                   <p>This Lodge offers a plentiful selection of well-appointed and newly remodeled room types from a King Honeymoon Suite to Standard Double Rooms that offer accommodations for up to four guests. All rooms are equipped with air-conditioning, microwave/refrigerators, 42 inch 1080i HD LCD cable TV, Keurig coffee maker, high-speed wireless internet, free local calls, in-room safe, and iron &amp; ironing boards and granite bathrooms with full baths with hair dryers. The Stage Coach Lodge also offers an outdoor swimming pool and great landscaping and on-site laundry. The Lodge also has a diver’s wash station for those who are diving in The Bay and a small Patio for those who just want to relax by our pool.</p>
                                   <h2><a href="https://www.montereystagecoachlodge.com/things-to-do"><strong>Monterey Sightseeing &amp; Tourism</strong></a></h2>
                                   <p>The Monterey Peninsula offers the vacation experience of a lifetime with a beauty that entices visitors from all over the world. Monterey is located along the central coast of California about 120 miles south of San Francisco. The Peninsula is one of the most scenic areas of the world offering great ocean vistas and the famed 17 Mile Drive, a coastal toll road that offers breathtaking views of the bountiful Pacific Ocean and the rolling green hills of the world-famous Pebble Beach and Spyglass Golf Courses.</p>
                                   <h2><a href="https://www.montereystagecoachlodge.com/Monterey-attractions"><strong>Monterey, CA Attractions</strong></a></h2>
                                   <p>Monterey is also home to the world's largest sea life exhibit, the Monterey Bay Aquarium. Pacific Grove, the host to one of the oldest working lighthouses on the west coast, comes alive when the monarch butterfly populations migrate to this tiny coastal town. Carmel offers a picturesque white sand beach and old-world charm with its quaint shops. These spectacular beaches, nine world champion golf courses, historic old adobes, Fisherman's Wharf, infamous Cannery Row, fabulous shopping, and gourmet restaurants all await you. And The Stage Coach Lodge offers the perfect quaint and memorable place to stay when visiting Monterey.</p>
                               </div>
                               <div className="about-btn colapsshoecontentlinkdiv" style={{display: "none"}}>
                                        <div className="btn-div">
                                            <a id="show-hidden-description" href="#" className="btn btns btn-brown hover-sweep-to-left toggle-image" title="Read More"> Read More </a>
                                            <span className="btn-icon"><i className="fas fa-concierge-bell fa-2x"></i></span>
                                        </div>
                                    </div>
                                    <div className="about-btn colapsshoecontentlinkdiv2" style={{display: "block"}}>
                                        <div className="btn-div">
                                            <a id="show-hidden-description2" href="#" className="btn btns btn-brown hover-sweep-to-left toggle-image" title="Read Less"> Read Less </a>
                                            <span className="btn-icon"><i class="fas fa-concierge-bell fa-2x"></i></span>
                                        </div>
                                    </div>
                          </div>
                    </div>
                    </>
          )
}