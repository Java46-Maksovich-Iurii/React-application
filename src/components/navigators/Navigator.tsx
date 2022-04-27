import React from "react";
import { RouteType } from "../../models/RouteType";
import { Link } from "react-router-dom";
const Navigator: React.FC<{items:RouteType[]}> = ({items}) => {
    function getLinks(): React.ReactNode {
        return items.map(item => <Link to={item.path} key={item.path}>{item.label}</Link>)
    }
    return <nav style={{display: 'flex', justifyContent: "space-evenly"}}>
        {getLinks()}
    </nav>
}
export default Navigator;