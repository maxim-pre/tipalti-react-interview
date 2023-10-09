const ExpensesTable = ({ expenses, renderCell }) => {
  return (
    <table className="expenses-table">
      <thead>
        {Object.keys(expenses[0])
          .filter((key) => key !== "id")
          .map((header, index) => (
            <td key={index} className="table-col-header">
              {header}
            </td>
          ))}
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            {Object.entries(expense)
              .filter(([key, val]) => key !== "id")
              .map(([key, val]) => {
                const content = renderCell(key, val);
                return <td>{content}</td>;
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
