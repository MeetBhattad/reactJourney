function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        height="50px"
        width="50px"
      />
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input
        className="searchbar"
        placeholder="Search for products brands and more"
      ></input>

      <div className="profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>
    </div>
  );
}

export default Header;
