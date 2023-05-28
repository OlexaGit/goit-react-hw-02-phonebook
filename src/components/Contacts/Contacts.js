const Contacts = ({ title, contacts }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};
export default Contacts;
