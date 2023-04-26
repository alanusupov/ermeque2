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
              <NavLink href="/">{t("n1")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#service">{t("n3")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#order">{t("n4")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">{t("n5")}</NavLink>
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
