import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Al-Istiklal st., Amman, Jordan</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/%D8%B4.+%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D9%84%D8%8C+%D8%B9%D9%85%D9%91%D8%A7%D9%86%E2%80%AD/@31.9727246,35.9382876,17z/data=!3m1!4b1!4m5!3m4!1s0x151b5fe80b009e4d:0x25fdf9d888760208!8m2!3d31.9727246!4d35.9360989"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
