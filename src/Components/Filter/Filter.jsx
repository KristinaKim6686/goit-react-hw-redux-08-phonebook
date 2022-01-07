import { Label, Text, Input } from "./Filter.styled";

const Filter = ({ onFilter, filterValue }) => {
  return (
    <>
      <Label>
        <Text>Find contacts by name:</Text>
        <Input
          name="filter"
          type="text"
          onChange={onFilter}
          value={filterValue}
        />
      </Label>
    </>
  );
};

export default Filter;
