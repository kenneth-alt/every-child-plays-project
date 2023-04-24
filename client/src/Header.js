import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to ="/" className="logo">Inclusive Playworks™
            <h4>An <i>InceptionU</i> start-up seeking to ensure that every child plays!</h4>
            </Link>
            <nav>
                <Link to="/login" class="button-navigation">Login </Link>
                <Link to="/register" class="button-navigation"> Register</Link>
            </nav>
        </header>
    );
}