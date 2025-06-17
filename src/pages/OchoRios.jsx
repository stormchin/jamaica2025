// Imports the itinerary data for Ocho Rios.
import ochoRiosItinerary from '../data/ochoRiosItinerary';

// OchoRios component displays the itinerary for a trip to Ocho Rios.
// It maps over the imported `ochoRiosItinerary` data to render each day's details.
export default function OchoRios() {
  return (
    // Main container for the Ocho Rios itinerary page.
    // Styles include a dark background, padding, and white text color.
    <div style={{
      background: '#18181b',
      minHeight: '100vh',
      color: '#fff',
      padding: '2.5rem 2rem'
    }}>
      {/* Page title */}
      {/* Styles include centering the text, margin, green color, bold font, and increased font size. */}
      <h1 style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: '#00e676',
        fontWeight: 700,
        fontSize: '2.2rem'
      }}>Ocho Rios Itinerary</h1>
      {ochoRiosItinerary.map((item, i) => (
        <div key={i} style={{
          // Container for each day's itinerary item.
          // Styles include a dark background, margin, padding, rounded corners,
          // maximum width, and a box shadow.

          background: '#20232a',
          margin: '1.5rem auto',
          padding: '1.5rem 2rem',
          borderRadius: '1.1rem',
          maxWidth: '700px',
          boxShadow: '0 4px 18px #0005'
        }}>
          {/* Day and location heading for the itinerary item. */}
          {/* Styles include no margin, green color, and semi-bold font weight. */}
          <h2 style={{margin: 0, color: '#00e676', fontWeight: 600}}>{item.day} - {item.location}</h2>
          {/* Excursion details. */}
          {/* Styles include semi-bold font weight for "Excursion:" and regular font weight for the value. */}
          <p style={{fontWeight: 500, marginBottom: '0.7rem'}}>Excursion: <span style={{fontWeight: 400}}>{item.excursion}</span></p>
          {/* List of meals for the day. */}
          {/* Styles remove default list styling, padding, and margin, and set line height. */}
          <ul style={{listStyle: 'none', paddingLeft: 0, lineHeight: 1.8, margin: 0}}>
            <li><strong>Breakfast:</strong> {item.breakfast}</li>
            <li><strong>Lunch:</strong> {item.lunch}</li>
            <li><strong>Dinner:</strong> {item.dinner}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}