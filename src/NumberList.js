function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    /* Keys help React identify which items have changed, 
    are added, or are removed. Keys should be given to the 
    elements inside the array to give the elements a 
    stable identity. */
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default NumberList;