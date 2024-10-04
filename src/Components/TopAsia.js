import React from 'react';
import Middleware from './Middleware';
import HongKong from '../Assets/TopAsia/Hong-Kong.jpg';
import India from '../Assets/TopAsia/India.jpg';
import Indonesia from '../Assets/TopAsia/Indonesia.jpg';
import Maldives from '../Assets/TopAsia/Maldives.jpg';
import Malaysia from '../Assets/TopAsia/Malaysia.jpg';
import UAE from '../Assets/TopAsia/UAE.jpg';
import Srilanka from '../Assets/TopAsia/Srilanka.jpg';
import Thailand from '../Assets/TopAsia/Thailand.jpg';
import Vietnam from '../Assets/TopAsia/Vietnam.jpg';
import Singapore from '../Assets/TopAsia/Singapore.jpg';

const topCountries = [
  { src: HongKong, name: 'HongKong', des: 'From ₹9,326/- per day', time: 'Best time: May-Sep' },
  { src: India, name: 'India', des: 'From ₹15,849/- per day', time: 'Best time: Apr-Sep' },
  { src: Indonesia, name: 'Indonesia', des: 'From ₹10,298/- per day', time: 'Best time: May-Sep' },
  { src: Maldives, name: 'Maldives', des: 'From ₹12,477/- per day', time: 'Best time: Apr-Oct' },
  { src: Malaysia, name: 'Malaysia', des: 'Fire and Iceland', time: 'Best time: Jun-Sep' },
  { src: UAE, name: 'UAE', des: 'From ₹11,789/- per day', time: 'Best time: Apr-Sep' },
  { src: Srilanka, name: 'Srilanka', des: 'From ₹16,404/- per day', time: 'Best time: Jun-Sep' },
  { src: Thailand, name: 'Thailand', des: 'From ₹9,655/- per day', time: 'Best time: Apr-Oct' },
  { src: Vietnam, name: 'Vietnam', des: 'From ₹31,508/- per day', time: 'Best time: May-Sep' },
  { src: Singapore, name: 'Singapore', des: 'From ₹14,248/- per day', time: 'Best time: May-Sep' },
];

function TopAsia() {
  return <Middleware title="Top countries to visit in Asia" button="Start your journey to Europe now!" countries={topCountries} />;
}

export default TopAsia;
