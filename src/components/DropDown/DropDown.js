import PropTypes from 'prop-types';
import { Option, Select } from './DropDown.styled';

const options = [
  { value: 'show all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const DropDown = ({ value, setSelectedFilter }) => {
  const onChangeFilter = e => {
    setSelectedFilter(e.target.value);
  };

  return (
    <Select value={value} onChange={onChangeFilter}>
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

DropDown.propTypes = {
  value: PropTypes.string.isRequired,
};
export default DropDown;
