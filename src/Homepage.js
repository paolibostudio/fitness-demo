import React from "react";

function Homepage() {
    return(
        <>
             <nav className="navbar navbar-expand-lg navbar-dark navbar-togglable fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="./index.html">
                        <img src="https://social.paolibostudio.com/assets/img/logo_verde.png" className="navbar-brand-img" alt="..." />
                    </a>
                    <a className="btn btn-sm btn-success lift ms-auto" href="/" target="_blank">
                        Accedi
                    </a>
                </div>
            </nav>
    <section className="overlay overlay-dark overlay-40" data-jarallax data-speed=".8"
             style={{backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/portfolio-cover-1.jpg)'}}>
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
                <div className="col-12 col-md-8 col-lg-6 mt-auto text-center">
                    <div className="img-fluid text-white mb-6">
                        <img
                            src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/logo_home.png"
                            className="img-fluid" alt={''} />
                    </div>
                    <p className="lead text-white">
                        Dimagrisci con noi. Per essere più forte e sano.
                    </p>
                </div>
                <div className="col-12 mt-auto text-center">
                </div>
            </div>
        </div>
    </section>
            <section className="min-vh-100" id="sectionTwo" data-jarallax data-speed=".8"
                     style={{backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/8.jpg)'}}>
            </section>
            <section style={{backgroundColor: '#000000', paddingTop: '70px', paddingBottom: '80px'}}>
                <div className="p-5 text-center container">
                    <h1 className="mb-3 h1 text-white mt-5"><strong>Allenamenti <span
                        className="text-success">online</span>, per stare in <span className="text-success">forma</span></strong>
                    </h1>
                    <p className="text-white ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                        sunt vel, voluptas eaque ratione nam provident repellendus saepe
                        cum! Minima, laudantium sit. Architecto velit laboriosam ullam
                        aspernatur cupiditate doloribus provident. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Laudantium ipsam nihil
                        temporibus asperiores at esse aperiam corrupti magnam impedit
                        delectus obcaecati, dolorum perferendis unde quia hic nostrum
                        nobis, repellendus eligendi.
                    </p>
                </div>
            </section>
            <section className="min-vh-100" data-jarallax data-speed=".8"
                     style={{backgroundImage: 'url(https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/portfolio/7.jpg)'}}>
            </section>
            <section style={{backgroundColor: '#000000', paddingTop: '70px', paddingBottom: '80px'}}>
                <div className="container p-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
                            <p className="card-text text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
                                tortor pulvinar, semperjusto.
                                Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
                                Pellentesque vel mollisquam.
                                Aeneanconsequat eros ex, nec congue turpis
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
                            <p className="card-text text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
                                tortor pulvinar, semperjusto.
                                Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
                                Pellentesque vel mollisquam.
                                Aeneanconsequat eros ex, nec congue turpis
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h3 className="card-title text-white"><strong>Cambia stile di vita con</strong></h3>
                            <p className="card-text text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam nec sapien lacinia, semper
                                tortor pulvinar, semperjusto.
                                Nullam nec accumsan elit. Suspendisse finibusporttitor tellus, eget finibus risus.
                                Pellentesque vel mollisquam.
                                Aeneanconsequat eros ex, nec congue turpis
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x text-light">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
            <section className="pt-7 pt-md-10 bg-light">
                <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
                    <div className="row align-items-center">
                        <div className="col-12 col-md">
                            <h3 className="mb-1 fw-bold">
                                Entra nel mondo del fitness con un clic
                            </h3>
                            <p className="fs-lg text-muted mb-6 mb-md-0">
                                Tanti pacchetti per te e la tua famiglia.
                            </p>
                        </div>
                        <div className="col-12 col-md-5">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="email" className="form-control"
                                               placeholder="Inserisci nome utente" />
                                    </div>
                                    <div className="col-auto ms-n5">
                                        <button className="btn btn-success" type="submit">
                                            Accedi o Registrati
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{marginTop: '100px'}}></div>
            <footer className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img
                                src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/logo.png"
                                alt="..." className="footer-brand img-fluid mb-2" />
                                <p className="text-gray-700 mb-2">
                                    Il fitness a casa tua.
                                </p>
                                <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                                    <li className="list-inline-item list-social-item me-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img
                                                src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/icons/social/instagram.svg"
                                                className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item me-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img
                                                src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/icons/social/facebook.svg"
                                                className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item me-3">
                                        <a href="#!" className="text-decoration-none">
                                            <img
                                                src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/icons/social/twitter.svg"
                                                className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                    <li className="list-inline-item list-social-item">
                                        <a href="#!" className="text-decoration-none">
                                            <img
                                                src="https://fitness.paolibostudio.com/wp-content/themes/fitness-paolibo/assets/img/icons/social/pinterest.svg"
                                                className="list-social-icon" alt="..." />
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white p-3 mt-5" style={{backgroundColor: '#212121'}}>
                    © 2020
                    <p className="text-white">Fitnèss.com</p>
                </div>
            </footer>
            </>
     )
}

export default Homepage;