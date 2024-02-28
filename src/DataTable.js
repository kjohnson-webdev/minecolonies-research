const DataTable = ({ data }) => {
    if (!data || data.length === 0) {
      return <div>No data available.</div>;
    }
  
    // Assume all objects have the same structure, so use the keys from the first item for columns
    const columns = Object.keys(data[0]);
  
    return (
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DataTable;