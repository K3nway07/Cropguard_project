import './Contact.css'
import TeamCard from './TeamCard.jsx'
import pratyush from './Pratyush.jpg'

function Contact() {
  return (
    <div className="contact-page">
      {/* Mentor card centered */}
      <div className="mentor-section">
        <TeamCard
          name="Dr. Manash Chanda"
          designation="Mentor"
          image={pratyush}
        />
      </div>

      {/* Members in row */}
      <div className="members-section">
        <TeamCard name="Member 1" designation="Member" image={pratyush} />
        <TeamCard name="Member 2" designation="Member" image={pratyush} />
        <TeamCard name="Member 3" designation="Member" image={pratyush} />
        <TeamCard name="Member 4" designation="Member" image={pratyush} />
      </div>
    </div>
  )
}

export default Contact
