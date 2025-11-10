import { TextField } from "@mui/material";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search files and folders..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '8px',
        marginBottom: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  );
};

export default Searchbar;
