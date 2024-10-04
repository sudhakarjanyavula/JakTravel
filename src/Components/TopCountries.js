import React from 'react';
import Middleware from './Middleware';
import Croatia from '../Assets/TopCountries/Croatia.jpg';
import France from '../Assets/TopCountries/France.jpg';
import Germany from '../Assets/TopCountries/Germany.jpg';
import Greece from '../Assets/TopCountries/Greece.jpg';
import Iceland from '../Assets/TopCountries/Iceland.jpg';
import Italy from '../Assets/TopCountries/Italy.jpg';
import Norway from '../Assets/TopCountries/Norway.jpg';
import Spain from '../Assets/TopCountries/Spain.jpg';
import Switzerland from '../Assets/TopCountries/Switzerland.jpg';
import UK from '../Assets/TopCountries/Uk.jpg';

const topCountries = [
  { src: Croatia, name: 'Croatia', des: 'From ₹9,326/- per day', time: 'Best time: May-Sep' },
  { src: France, name: 'France', des: 'From ₹15,849/- per day', time: 'Best time: Apr-Sep' },
  { src: Germany, name: 'Germany', des: 'From ₹10,298/- per day', time: 'Best time: May-Sep' },
  { src: Greece, name: 'Greece', des: 'From ₹12,477/- per day', time: 'Best time: Apr-Oct' },
  { src: Iceland, name: 'Iceland', des: 'Fire and Iceland', time: 'Best time: Jun-Sep' },
  { src: Italy, name: 'Italy', des: 'From ₹11,789/- per day', time: 'Best time: Apr-Sep' },
  { src: Norway, name: 'Norway', des: 'From ₹16,404/- per day', time: 'Best time: Jun-Sep' },
  { src: Spain, name: 'Spain', des: 'From ₹9,655/- per day', time: 'Best time: Apr-Oct' },
  { src: Switzerland, name: 'Switzerland', des: 'From ₹31,508/- per day', time: 'Best time: May-Sep' },
  { src: UK, name: 'UK', des: 'From ₹14,248/- per day', time: 'Best time: May-Sep' },
];

function TopCountries() {
  return <Middleware title="Top countries to visit in Europe" button="Start your journey to Asia now!" countries={topCountries} />;
}

export default TopCountries;
