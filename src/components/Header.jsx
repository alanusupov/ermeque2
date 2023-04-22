import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../media/image 4.png";
import phone from "../media/redphone.svg";
import { useTranslation } from "react-i18next";
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" {...args}>
        <NavbarBrand href="/">
          <img className="header-logo" src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto navCustom" navbar>
            <NavItem>
              <NavLink>{t("h1")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <div style={{ textAlign: "center" }}>{t("h2")}</div>
                <div style={{ textAlign: "center" }}>Пн-Пт с 0:00 до 0:00</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <div className="nav-phone">
                  <div>
                    <img src={phone} alt="" />
                  </div>
                  <div>0555555555</div>
                </div>
                <div className="nav-phone">
                  <div>
                    <img src={phone} alt="" />
                  </div>
                  <div>0777777777</div>
                </div>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
          </Nav>
          <NavbarText className="nav-lang" color="black">
            <button
              disabled={i18n.resolvedLanguage === "kg"}
              className="lang"
              onClick={() => i18n.changeLanguage("kg")}>
              KG
            </button>
            /
            <button
              disabled={i18n.resolvedLanguage === "ru"}
              className="lang"
              onClick={() => i18n.changeLanguage("ru")}>
              RU
            </button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
