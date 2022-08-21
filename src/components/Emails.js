import Email from './Email'

function Emails({ emails, toggleRead, toggleStar }) {
  return (
    <ul className="emails">
      {emails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          index={index}
        />
      ))}
    </ul>
  )
}

export default Emails