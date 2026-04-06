import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#06080f',
        color: '#d0d8f0',
        fontFamily: "'Exo 2', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px',
      }}
    >
      <h1
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: 4,
          background: 'linear-gradient(90deg,#f0b820,#e8d48a,#f0b820)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 8,
        }}
      >
        FATE/GRAND ORDER
      </h1>
      <p
        style={{
          fontSize: 11,
          letterSpacing: 4,
          color: '#4a5578',
          marginBottom: 48,
        }}
      >
        NA SERVER TOOLS
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 16,
          width: '100%',
          maxWidth: 800,
        }}
      >
        <Link to="/banner-list" style={{ textDecoration: 'none' }}>
          <div
            style={{
              border: '1px solid #1c2540',
              borderRadius: 10,
              padding: '28px 24px',
              background: '#0d1120',
              cursor: 'pointer',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = '#c8960c')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = '#1c2540')
            }
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>⚜</div>
            <h2
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 8,
                color: '#d0d8f0',
              }}
            >
              Banner List
            </h2>
            <p style={{ fontSize: 13, color: '#4a5578', lineHeight: 1.5 }}>
              Predicted NA banner schedule based on JP dates
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
