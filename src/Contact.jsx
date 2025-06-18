import './Contact.css'
import TeamCard from './TeamCard.jsx'
import pratyush from './Pratyush.jpg'
import sagnic from './Sagnic.jpeg'
import jit from './Jit.jpeg'
import manir from './Manir.jpeg'

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
        <TeamCard name="Sagnic Basu" designation="Member" image={sagnic} />
        <TeamCard name="Pratyush Banerjee" designation="Member" image={pratyush} />
        <TeamCard name="Manir Ranjan Kundu" designation="Member" image={manir} />
        <TeamCard name="Jit Mondal" designation="Member" image={jit} />
      </div>
    </div>
  )
}

export default Contact
