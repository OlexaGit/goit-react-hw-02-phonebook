const Contacts = ({ title, contacts }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Contacts;
