import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { Link, Navigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { Popover, Position, Menu, Button } from "evergreen-ui";

import { Avatar, SearchInput } from "evergreen-ui";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Header() {
  const { cartItems, controlSearchInput } = useContext(Context);
  const totalCartItems = cartItems.length;

  const [inputValue, setInputValue] = useState("");
  // console.log("value:", inputValue);
  //! Transfer inputValue to context throughout function
  () => controlSearchInput(inputValue);

  const logout = () => {
    sessionStorage.removeItem("token");
    return Navigate("/");
  };

  return (
    <header>
      <div className="header-title">
        <Link to="/">
          <h2>Movie by Nigth</h2>
        </Link>
      </div>
      <div>
        <SearchInput
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Search for collection"
        />
      </div>
      <div className="header-favorite">
        <MdOutlineFavoriteBorder className="head-favorite--heart" />
        <div>
          <Link to="/whishlist" className="header-link">
            <p>FAVORITES</p>
          </Link>
        </div>
      </div>

      <Link to="/cart">
        <div className="image-wrapper wrapper">
          {totalCartItems > 0 && <span>{totalCartItems}</span>}
          {/* <GrCart className="cart-head--icon" /> */}
          <FcShop className="cart-head--icon" />
        </div>
      </Link>
      <div className="avatar-container">
        <div className="avatar"></div>
        <div className="avatar-menu">
          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item onSelect={() => toaster.notify("Profile")}>
                    Profile
                  </Menu.Item>
                  <Menu.Item onSelect={() => toaster.notify("Move")}>
                    Security
                  </Menu.Item>
                  <Menu.Item
                    onSelect={() => toaster.notify("Rename")}
                    secondaryText="⌘R"
                  >
                    Rename...
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
                src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                name="Alan Turing"
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
