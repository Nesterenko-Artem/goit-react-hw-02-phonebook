import { FiDelete } from 'react-icons/fi';
import { DelitIcon, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, hendleDelit, title }) => {
  return (
    <>
      {title && <h5>{title}</h5>}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <span>{name}</span> : tel. <span>{number}</span>
            <DelitIcon onClick={() => hendleDelit(id)}>
              <FiDelete size="13" />
            </DelitIcon>
          </Item>
        ))}
      </ul>
      <br />
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  hendleDelit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
