import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <div>Laxmi Chit Fund</div>
      </Link>
      <div className="flex gap-2">
        <div>Invest</div>
        <div>About</div>
        <div>Contact</div>
        <div>|</div>
        <div>Sign In</div>
      </div>
    </div>
  );
};

export default Header;
