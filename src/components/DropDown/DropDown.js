const options = [
  { value: 'show all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const DropDown = ({ value, setSelectedFilter }) => {
  const onChangeFilter = (e) => {
      setSelectedFilter(e.target.value)
  };

  return (
    <select value={value} onChange={onChangeFilter}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
