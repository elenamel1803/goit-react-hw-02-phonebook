import { Item, Button, Text } from './ContactListStyled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
