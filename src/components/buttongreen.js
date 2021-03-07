import React from "react"
import * as buttonStyle from "./buttongreen.module.css"
import { Link } from "gatsby"

export default function ButtonGreen() {
  return (
    <Link to="/contact">
    <div className={buttonStyle.mybutton}>
      <span className="font-bold text-xl">&#12302;&#20813;&#36027;One-on-one&#23560;&#26989;&#38651;&#35441;&#35566;&#35426;&#26381;&#21209;&#12303;</span>
      <br />
      <span className="text-lg">&#31435;&#21363;&#38283;&#22987;&#20493;&#22686;&#20320;&#30340;&#25910;&#20837;</span>
    </div>
    </Link>
  )
}