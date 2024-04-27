import Menu from "./index";

function MenuPage() {
  const sports = ["Tennis", "Recquetball", "Pickleball", "Squash"];
  return (
    <>
      <h2>Menu</h2>
      <p>This component is awful</p>
      <div className="features">
        <div className="feature-col">
          <h3>Title</h3>
          <ul>
            <li>Menu.Button children</li>
          </ul>
        </div>
        <div className="feature-col">
          <h3>Menu Items</h3>
          <ul>
            <li>Menu.Item children, + key</li>
          </ul>
        </div>
      </div>
      <div className="component-list">
        <Menu onOpen={() => {}}>
          <Menu.Button>Sports</Menu.Button>
          <Menu.DropDown>
            {sports.map((sport) => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.DropDown>
        </Menu>
      </div>
    </>
  );
}

export default MenuPage;
