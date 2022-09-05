import { Item, ButtonClose, Contact } from './ContactList.styled';
import {PropTypes} from 'prop-types'

const ContactList = ({ contacts, onDeleteContact }) => {
		return(
	<ul>
		{contacts.map(({ id, name, number }) => {
			return (
				<Item key={id}>
					<Contact>
						{name}: {number}
					</Contact>
					<ButtonClose type="button" onClick={()=> onDeleteContact(id)}>x</ButtonClose>
				</Item>
			);
		})}
	</ul>
	)
	};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
		  id: PropTypes.string.isRequired,
		  name: PropTypes.string.isRequired,
		  number: PropTypes.string.isRequired,
		})
	  ),
	  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;