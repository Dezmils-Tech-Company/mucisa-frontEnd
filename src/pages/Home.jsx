import React from "react";
import '../CSS-styling/Home.css';
import AboutMucisa from "../components/AboutHome.jsx";



import HeroSection from "../components/hero.jsx";
import QuickStats from "../components/Quickstats.jsx";

import Team from '../components/Team.jsx';
import JoinSection from '../components/JoinSection.jsx';
import Footer from '../components/footer.jsx';
import RecentActivities from '../components/recentActivities.jsx';
import UpcomingEvents from '../components/upcomingEvents.jsx';





export default function Home(){
    return(
        <>
        <div className="home">
         <HeroSection />
         <div>
            <h2>Maseno University computing And Informatics Student Association</h2>
            <QuickStats />
              <AboutMucisa />
              
            <RecentActivities />
            <UpcomingEvents />
            <JoinSection/>
            <div>
                <h2  >Meet our executive Team 2024/25</h2>
               <Team />

            </div>

        </div>
         <Footer />
         </div>
        </>
    )
}