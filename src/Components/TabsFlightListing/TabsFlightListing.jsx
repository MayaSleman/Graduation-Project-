import React, { useState } from "react";
import "./TabsFlightListing.css";
import { Tab, Tabs } from "react-bootstrap";
import FormWithOutTab from "../FormWithOutTab/FormWithOutTab";
import Accordion from "../Accordion/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import FavouritesMainFlight from "../Favouritesmain/FavouritesMainFlight";
import tabBar from "../../assets/images/tabbar.svg";
import chevrondown from '../../assets/images/chevron_down.svg';
import listLinev from '../../assets/images/listlinev.svg';
import listNavLine from '../../assets/images/listnavline.svg';


export default function TabsHotelListing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const detailTab = () => {
    return (
      <div className="tab-content">
        <div className="NM_LineInfo">
          <p>
            Showing 4 of <span> 257 places</span>
          </p>
          <p className="NM_ParaN">
            Sort by <b>Recommended</b>
            <img src={chevrondown} alt="chevronDown" />
          </p>
        </div>
      </div>
    );
  };

  const filters = ["price", "departureTime", "rating", "airlines", "trips"];

  return (
    <section className="NM_HotelListing">
       <FormWithOutTab page="flightListing" />
      <div className="NM_MainSection">
        <div className="NM_filter">
          <button className="MS-filterBtn" onClick={togglePopup}>
            <FontAwesomeIcon
              icon={faSliders}
              size="lg"
              style={{ color: "#ffffff" }}
            />{" "}
            Filters
          </button>
          <p className="MS-filter">Filters</p>
          <div data-aos="fade-right" className="MS-filterContent">
            <Accordion filters={filters} />
          </div>
        </div>
        <img className="listLinev" src={listLinev} alt="" />
        <div className="AM_flightlist">
          <Tabs defaultActiveKey="best" id="uncontrolled-tab-example" className="custom-tabs">
            <Tab
              eventKey="cheapest"
              title={
                <div className="titleTabs">
                  <p className="tab-title">Cheapest </p>
                  <p className="small">$99 . 2h 18m</p>
                </div>
              }
            >
              {detailTab()}
              <FavouritesMainFlight />
            </Tab>

            <Tab
              eventKey="best"
              title={
                <div className="titleTabs">
                  <p className="tab-title">Best </p>
                  <p className="small">$99 . 2h 18m</p>
                </div>
              }
            >
              <div className="tab-content">
                {detailTab()}
                <FavouritesMainFlight />
              </div>
            </Tab>
            <Tab
              eventKey="quickest"
              title={
                <div className="titleTabs">
                  <p className="tab-title">Quickest </p>
                  <p className="small">$99 . 2h 18m</p>
                </div>
              }
            >
              <div className="tab-content">
                {detailTab()}
                <FavouritesMainFlight />
              </div>
            </Tab>
            <Tab
              eventKey="other"
              title={
                <span className="titleTabs titleLastTab">
                  <img src={tabBar} alt="tabBar" />
                  Other sort
                </span>
              }
            >
              <div className="tab-content">
                {detailTab()}
                <FavouritesMainFlight />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close-btn" onClick={togglePopup}>
              Close
            </button>
            <Accordion filters={filters} />
          </div>
        </div>
      )}
    </section>
  );
}