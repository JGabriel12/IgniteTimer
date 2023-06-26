import { HeaderContainer } from "./style";

import LogoIgnite from '../../assets/LogoIgnite.svg'
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}/>
        </NavLink>

        <NavLink to="/history" title="History">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
} 