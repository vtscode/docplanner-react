import React from 'react';
import ServiceCard from './components/ServiceCard'
import FeatureCard from './components/FeatureCard'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const exampleProps = {
  category: 'For patients',
  title: 'Find a doctor, book a visit and solve...',
  background: '#5dc6b0',
  image: 'https://www.docplanner.com/img/screen-marketplace@2x.png'
}

const exampleFeatureCardProps = {
  icon: 'https://www.docplanner.com/img/patients.png',
  title: '20 million unique patients',
  description: 'visit us every month'
}

const CountryOptions = () => (
  <select className="service-card-options">
    <option>Argentina</option>
    <option>Australia</option>
    <option>Tunisia</option>
  </select>
)

const Main = () =>
  <div>
    <div className="features" >
      <FeatureCard
        title={<span>Leader in <br />8 countries</span>}
        icon="https://www.docplanner.com/img/flag.png"
        description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile" />
      <FeatureCard
        title="600 000 appointments"
        icon="https://www.docplanner.com/img/visits.png"
        description="booked last month" />
    </div>
    <ServiceCard
      innerJsx={<CountryOptions />}
      service={exampleProps} />
    <ServiceCard
      service={{
        title: 'Save time managing visits and cut no-shows by half',
        category: 'For doctors',
        background: '#4293db',
        image: 'https://www.docplanner.com/img/screen-saas@2x.png'
      }} />
  </div>

  
export default Main;
