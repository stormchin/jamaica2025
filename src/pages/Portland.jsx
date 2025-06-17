import portlandItinerary from '../data/portlandItinerary';

// Portland component displays the itinerary for Portland, Jamaica.
// It imports the `portlandItinerary` data and maps over it to render
// the details of each day's activities and meals.
export default function Portland() {
  return (
    // Main container div for the Portland itinerary page.
    // Applies background color, minimum height, text color, and padding.
    <div style={{
      background: '#18181b',
      minHeight: '100vh',
      color: '#fff',
      padding: '2.5rem 2rem'
    }}>
      {/* Heading for the Portland Itinerary */}
      {/* Applies text alignment, bottom margin, text color, font weight, and font size. */}
      <h1 style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: '#00e676',
        fontWeight: 700,
        fontSize: '2.2rem'
      }}>Portland Itinerary</h1>
      {/* Map over the portlandItinerary array to display each day's details. */}
      {portlandItinerary.map((item, i) => (
        // Container div for each day's itinerary item.
        // Applies background color, margin, padding, border radius, max width, and box shadow.
        <div key={i} style={{
          background: '#20232a',
          margin: '1.5rem auto',
          padding: '1.5rem 2rem',
          borderRadius: '1.1rem',
          maxWidth: '700px',
          boxShadow: '0 4px 18px #0005' // Adds a subtle shadow for depth.
        }}>
          {/* Heading for the day and location */}
          {/* Applies margin, text color, and font weight. */}
          <h2 style={{margin: 0, color: '#00e676', fontWeight: 600}}>{item.day} - {item.location}</h2>
          {/* Paragraph for the excursion details */}
          {/* Applies font weight and bottom margin. */}
          <p style={{fontWeight: 500, marginBottom: '0.7rem'}}>Excursion: <span style={{fontWeight: 400}}>{item.excursion}</span></p>
          {/* Unordered list for meal details */}
          {/* Removes default list styling, padding, and margin, and sets line height. */}
          <ul style={{listStyle: 'none', paddingLeft: 0, lineHeight: 1.8, margin: 0}}>
            {/* List items for breakfast, lunch, and dinner */}
            <li><strong>Breakfast:</strong> {item.breakfast}</li>
            <li><strong>Lunch:</strong> {item.lunch}</li>
            <li><strong>Dinner:</strong> {item.dinner}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}