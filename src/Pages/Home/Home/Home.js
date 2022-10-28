import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../../layout/Main';

const Home = () => {
    return (
        <div>
            <div>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png"
                            className="d-block mx-lg-auto img-fluid"
                            alt="Bootstrap Themes"
                            width={700}
                            height={500}
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            If we want earn more than we need to learn more.
                        </h1>
                        <p className="lead">
                            Every entrepreneur in the world has at least one time period during which they need to add to their income.

                            Whether you’re in a temporary slump, the current pandemic has affected your business, or you want to save for emergencies or a trip away, you can use your existing skills to increase your income.

                            Try these ten simple ways to tap into your existing expertise and add to your existing bottom line.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                type="button"

                            >
                                <Link className='text-white text-decoration-none' to='/courses'>Our Courses</Link>
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark btn-lg px-4"
                            >
                                <Link className='text-danger text-decoration-none' to='/register'>Register</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                About
                            </a>
                        </li>
                    </ul>
                </footer>

                {/* <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/logo512.png"
          alt="imag"
          width={100}
          height={100}
        />
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div> */}
            </div>
        </div>
    );
};

export default Home;