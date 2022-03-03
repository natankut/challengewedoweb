import '../Nav/Nav.scss';
import Logo from '../../../img-nav/logo2.svg';

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg d-flex justify-content-between">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <button className="btnLogin">LOGIN</button>
            </div>
        </nav>
    )
}