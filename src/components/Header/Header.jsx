import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link, Navigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { Popover, Position, Menu, Button, Avatar } from "evergreen-ui";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Header() {
  const { cartItems } = useContext(Context);
  const totalCartItems = cartItems.length;

  const logout = () => {
    sessionStorage.removeItem("token");
    return Navigate("/");
  };

  return (
    <header>
      <div className="header-title">
        <Link to="/">
          <h2>
            <span>🎥</span> Movie by Night
          </h2>
        </Link>
      </div>
      <div className="header-favorite">
        <MdOutlineFavoriteBorder className="head-favorite--heart" />
        <div>
          <Link to="/whishlist" className="header-link">
            <p>FAVORITES</p>
          </Link>
        </div>
      </div>
      <div className="header-registration">
        <Link to="/registration" className="header-link">
          <p>🍿 JOIN US </p>
        </Link>
      </div>
      <div className="header-cart">
        <Link to="/cart">
          <div className="image-wrapper wrapper">
            {totalCartItems > 0 && <span>{totalCartItems}</span>}
            {/* <GrCart className="cart-head--icon" /> */}
            <FcShop className="cart-head--icon" />
          </div>
        </Link>
      </div>
      <div className="avatar-container">
        <div className="avatar-menu">
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item onSelect={() => toaster.notify("profile")}>
                    Profile
                  </Menu.Item>
                  <Menu.Item onSelect={() => toaster.notify("security")}>
                    Security
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item
                    onSelect={() => toaster.danger("Delete")}
                    intent="danger"
                  >
                    <Link className="logout" to="/" onClick={logout}>
                      Logout
                    </Link>
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <Button width={10} borderRadius={50} marginRight={16}>
              <Avatar
                src="https://lh3.googleusercontent.com/ogw/AOh-ky1rpxvEGL6xpjCFKUOp5FKY20o0_4p01ymUS-hl=s64-c-mo"
                name="Walber Melo"
                size={30}
              />
            </Button>
          </Popover>
        </div>
      </div>
    </header>
  );
}

export default Header;
