// src/components/TeamCard.jsx
import './TeamCard.css'

function TeamCard({ name, designation, image }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />
      <div className="team-details">
        <p className="team-designation">{designation}</p>
        <h4 className="team-name">{name}</h4>
      </div>
    </div>
  )
}

export default TeamCard
