import { useSelector } from 'react-redux';
import Button from './Button';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList({ handleFilter }) {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <>
      <ul className={s.list}>
        {handleFilter().map(({ id, name, phone }) => {
          return (
            <li key={id} className={s.listItem}>
              <ContactListItem name={name} number={phone} />
              <Button id={id} />
            </li>
          );
        })}
      </ul>

      {contacts.loading && <div className={s.loading}>Loading...</div>}
    </>
  );
}

ContactList.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default ContactList;
