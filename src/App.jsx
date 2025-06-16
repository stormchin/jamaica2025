import React from "react";
import "./App.css";

// Itinerary Data (see image 1)
const itinerary = [
  {
    date: "June 18",
    location: "Port Antonio",
    excursion: "Travel Day (Kingston Airport to PORTLAND BNB)",
    breakfast: "N/A",
    lunch: "Tastee Pattie & Cocoa Bread",
    dinner: "Jerk Chicken, Jerk Pork, Festival, Mac n Cheese, Festival, Rice and Peas, Plantains",
  },
  {
    date: "June 19",
    location: "Port Antonio",
    excursion: (
      <>
        <a href="https://www.tripadvisor.com/Attraction_Review-g147314-d150187-Reviews-Blue_Lagoon_Port_Antonio-Port_Antonio_Portland_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Blue Lagoon + Monkey Island (Free - Storm + Lucas Tour Guide 4-6Hrs)
        </a>
      </>
    ),
    breakfast: "Cornmeal porridge, Banana Porridge, Johnny cakes, Eggs, Bacon, Fresh fruit, Blue Mountain Coffee, Fresh Juice",
    lunch: "Fried Chicken and Fries",
    dinner: "Jerk Chicken, Lobster, Jerk Shrimp, Fish, Festival, Mac n Cheese, Festival, Rice and Peas, Plantains",
  },
  {
    date: "June 20",
    location: "Port Antonio",
    excursion: "TBD",
    breakfast: "Scrambled eggs & bacon, Pancakes, Toast, Fresh fruit, Smoothie",
    lunch: "Burger, Fries, Patties, Coco bread",
    dinner: "Jerk Alfredo w/ Chicken, Jerk Alfredo w/ Shrimp, Festivals, Jamaican Sodas",
  },
  {
    date: "June 21",
    location: "Port Antonio",
    excursion: (
      <>
        <a href="https://www.tripadvisor.com/Attraction_Review-g147314-d158138-Reviews-Frenchman_s_Cove-Port_Antonio_Portland_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Frenchmans Cove ($15 Beach Admission)
        </a>
      </>
    ),
    breakfast: "French toast, scrambled eggs, french toast, johnny cakes, plantain, Fresh Juice, Fresh Fruits",
    lunch: (
      <>
        <a href="https://www.tripadvisor.com/Restaurant_Review-g147314-d1454245-Reviews-Boston_Jerk_Centre-Port_Antonio_Portland_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Boston Bay's Boston Jerk Center
        </a>
      </>
    ),
    dinner: "Brown Stew Chicken, curry goat, curry shrimp, rice and peas, festival",
  },
  {
    date: "June 22",
    location: "Port Antonio",
    excursion: "Travel Day (Portland BnB to Ocho Rios BnB)",
    breakfast: "Waffles, Sausage & hash browns, eggs, granola, yogurt, Fresh fruit, Coffee",
    lunch: (
      <>
        <a href="https://www.tripadvisor.com/Restaurant_Review-g147314-d1553707-Reviews-Juici_Patties-Port_Antonio_Portland_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Juici Patties
        </a>
      </>
    ),
    dinner: "Jerk Chicken, Jerk Pork, Jerk Shrimp, Festival, Rice and Peas, Hardo Bread, Plantains",
  },
  {
    date: "June 23",
    location: "Ocho Rios",
    excursion: "Scuba (TBD)",
    breakfast: "Pancakes, Scrambled eggs, bacon, Toast, Fresh fruit, Smoothie",
    lunch: "Burgers, Fries, Jamaican Sodas",
    dinner: "Wings, Fries, Rice and Peas, Hardo Bread/ Festival",
  },
  {
    date: "June 24",
    location: "Ocho Rios",
    excursion: (
      <>
        <a href="https://www.tripadvisor.com/Attraction_Review-g147312-d150187-Reviews-Dunn_s_River_Falls_and_Park-Ocho_Rios_Saint_Ann_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Dunn’s River Falls & Park Adventure ($25)
        </a>
      </>
    ),
    breakfast: "Omlets, Smoothies, Yogurt, Granola, Fresh fruit",
    lunch: (
      <>
        <a href="https://www.tripadvisor.com/Restaurant_Review-g147312-d1030169-Reviews-Scotchies-Ocho_Rios_Saint_Ann_Parish_Jamaica.html" target="_blank" rel="noopener noreferrer">
          Scotchies
        </a>
      </>
    ),
    dinner: "Jerk Alfredo, Festivals, Jamaican Sodas",
  },
  {
    date: "June 25",
    location: "Ocho Rios",
    excursion: "Travel Day (Ocho Rios to MbJ)",
    breakfast: "Pancakes, Eggs, Fresh fruit, Coffee or smoothie",
    lunch: "Airport café or grab-and-go",
    dinner: "N/A",
  },
];

function App() {
  return (
    <div className="app-bg">
      <header className="header">
        <h1>🇯🇲 Jamaica Itinerary</h1>
        <p className="subtitle">A week of adventure, flavors, and relaxation</p>
      </header>
      <div className="itinerary-scroll">
        {itinerary.map((day, i) => (
          <section className="itinerary-card" key={i}>
            <div className="date">{day.date}</div>
            <div className="location">{day.location}</div>
            <div className="excursion">
              <b>Excursion:</b> {day.excursion}
            </div>
            <div className="meals">
              <div>
                <span role="img" aria-label="breakfast">🍳</span> <b>Breakfast:</b> {day.breakfast}
              </div>
              <div>
                <span role="img" aria-label="lunch">🍔</span> <b>Lunch:</b> {day.lunch}
              </div>
              <div>
                <span role="img" aria-label="dinner">🍽️</span> <b>Dinner:</b> {day.dinner}
              </div>
            </div>
          </section>
        ))}
      </div>
      <footer className="footer">
        <span>Made with ❤️ for your Jamaican adventure</span>
      </footer>
    </div>
  );
}

export default App;