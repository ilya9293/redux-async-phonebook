import Button from './Button';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';

function ContactList({ handleFilter }) {
  return (
    <ul className={s.list}>
      {handleFilter().map(({ id, name, number }) => {
        return (
          <li key={id} className={s.listItem}>
            <ContactListItem name={name} number={number} />
            <Button id={id} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default ContactList;
