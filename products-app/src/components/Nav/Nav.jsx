import { Link } from "react-router-dom"
import "./Nav.css";

export default function Nav() {
  return (
    <div className="navdiv">
      <Link className="navcss" to="/">ProductsApp</Link>
    </div>
  )
}
