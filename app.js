const { useState } = React;

const GroceryListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    fontWeight: isHovered ? 'bold' : 'normal'
  };
  return (
    <li style={style} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {props.item}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

const App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Bananas', 'Peanut butter', 'Bread']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));