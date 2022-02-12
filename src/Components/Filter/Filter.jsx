import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebookSelector";
import { filterContacts } from "../../redux/phonebookActions";

import { Label, Text, Input } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const onFilter = (e) => {
    dispatch(filterContacts(e.target.value));
  };
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
