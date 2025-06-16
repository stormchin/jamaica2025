import portlandItinerary from '../data/portlandItinerary';

export default function Portland() {
  return (
    <div style={{
      background: '#18181b',
      minHeight: '100vh',
      color: '#fff',
      padding: '2.5rem 2rem'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: '#00e676',
        fontWeight: 700,
        fontSize: '2.2rem'
      }}>Portland Itinerary</h1>
      {portlandItinerary.map((item, i) => (
        <div key={i} style={{
          background: '#20232a',
          margin: '1.5rem auto',
          padding: '1.5rem 2rem',
          borderRadius: '1.1rem',
          maxWidth: '700px',
          boxShadow: '0 4px 18px #0005'
        }}>
          <h2 style={{margin: 0, color: '#00e676', fontWeight: 600}}>{item.day} - {item.location}</h2>
          <p style={{fontWeight: 500, marginBottom: '0.7rem'}}>Excursion: <span style={{fontWeight: 400}}>{item.excursion}</span></p>
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