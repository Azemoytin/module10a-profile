import { useState } from 'react';

function Profile({ name, occupation, funFact }) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>{name}</h2>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Fun Fact:</strong> {funFact}</p>
      
      <button onClick={toggleDetail}>
        {showDetail ? 'Hide Bio' : 'Show Bio'}
      </button>

      {showDetail && (
        <p style={{ marginTop: '1rem' }}>
          {name} is an inspiring figure in their field, known for their unique journey and dedication to what they do.
        </p>
      )}
    </div>
  );
}

export default Profile;
