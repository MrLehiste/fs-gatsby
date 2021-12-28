import React from "react"
import { Link } from "gatsby"

export default function NavLinks(props) {
  const isMobile = props.isMobile;
  const tabs = ['Team', 'Contact', 'Exclusive Course', 'NMN iHealth'];
  const seltab = props.tab;
  if(isMobile){ 
    const listItems = tabs.map((t) =>
      <Link key={t} to={"/" + (t === "Team" ? '' : t.toLowerCase().replace(' ', '-'))}
        className={t === seltab ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
        {t}
      </Link>
    );
      return(
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {listItems}
            </div>
        </div>
      )
  }
  const listItems = tabs.map((t) =>
      <Link key={t} to={"/" + (t === "Team" ? '' : t.toLowerCase().replace(' ', '-'))}
        className={t === seltab ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
        {t}
      </Link>
    );
  return (
    <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
            {listItems}
        </div>
    </div>
  )
}