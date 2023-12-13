import React from "react";
import flow from "../../assets/img/flowers.jpg";
import coc from "../../assets/img/coctails.jpg";
import slim from "../../assets/img/slimmom.jpg";
import yum from "../../assets/img/soyummy.jpg";
import { ProjBox, ProjItem } from "./FrontEnd.styled";

export const Projects = () => {
  return (
    <ProjBox id="projects">
      <ProjItem>
        <img src={yum} alt="prewiev" />
        <ul>
          <li>
            <h3>SoYummy</h3>
          </li>
          <li>A web app for finding and managing recipes.</li>
          <li>Team project.</li>
          <li>Role: developer.</li>
          <li>[HTML, SASS, React.js, Node,js]</li>
        </ul>
      </ProjItem>
      <ProjItem>
        <img src={slim} alt="prewiev" />
        <ul>
          <li>
            <h3>SlimMom</h3>
          </li>
          <li>A web app - dairy for calorie tracking. </li>
          <li>Team project.</li>
          <li>Role: Scrum master/developer.</li>
          <li>[HTML, SASS, React.js]</li>
        </ul>
      </ProjItem>
      <ProjItem>
        <img src={coc} alt="prewiev" />
        <ul>
          <li>
            <h3>Cocktails</h3>
          </li>
          <li>A website that helps find and mage cocktails.</li>
          <li>Team project. </li>
          <li>Role: Scrum master/developer.</li>
          <li>[HTML, SASS, JS, Parcel]</li>
        </ul>
      </ProjItem>
      <ProjItem>
        <img src={flow} alt="prewiev" />
        <ul>
          <li>
            <h3>Flower Studio</h3>
          </li>
          <li>A flower shop site.</li>
          <li>Team project.</li>
          <li>Role: developer.</li>
          <li>[HTML, SASS, JS, Parcel]</li>
        </ul>
      </ProjItem>
    </ProjBox>
  );
};
