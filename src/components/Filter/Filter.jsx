import { InputFilter, LabelFilter } from "./Filter.styled";
import {PropTypes} from 'prop-types'

const Filter = ({filter, onChange}) => (
	<LabelFilter htmlFor="search"> Find contacts by name
		<InputFilter  id ="search"
		type="search"
		value={filter} 
		onChange={onChange} 
		pattern=".*\S.*"
        required/> 
	</LabelFilter>
)

Filter.propTypes = {
	filter: PropTypes.string,
	onChange: PropTypes.func,
}

export default Filter;