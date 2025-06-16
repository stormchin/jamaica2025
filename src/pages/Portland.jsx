import portlandItinerary from '../data/portlandItinerary'

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
          maxWidth: '600px',
          boxShadow: '0 4px 18px #0005'
        }}>
          <h2 style={{margin: 0, color: '#00e676', fontWeight: 600}}>{item.day}: {item.title}</h2>
          <p style={{marginTop: '0.7rem', fontSize: '1.13rem', lineHeight: 1.75}}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}