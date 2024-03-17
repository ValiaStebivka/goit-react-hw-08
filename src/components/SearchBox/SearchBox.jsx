import { useDispatch, useSelector } from "react-redux"; 
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input type="text" id="searchBox" value={filters} onChange={handleSearch} />
    </div>
  );
};
