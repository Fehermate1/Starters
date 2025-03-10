import '../styles/elsofeladat.css';
import '../images/package-106.png';

const Elso_Feladat = () => {
    return (
        <div className="main">
            <h1>Starters</h1>
            <p>
                Functional examples of using bootstrap in common JS frameworks like Webpack, Parcel,
                Vite, and more you can edit in StackBlitz.
            </p>
            <div className="maincontainer">
                <div className="first_row">
                    <div className="cdn-starter">
                        <img src="" alt="" />
                        <div className="cdn-main">
                            <h2>
                                <a href="">CDN Starter</a>
                            </h2>
                            <p>
                                Instantly include Bootstrap's compiled CSS and JavaScript via the
                                jsDelivr CDN.
                            </p>
                        </div>
                    </div>
                    <div className="sass-n-js">
                        <div className="sass-main">
                            <h2>
                                <a href="">Sass & JS</a>
                            </h2>
                            <p>
                                Use npm to import and compile Bootstraps's Sass with Autoprefixer
                                and Stylelint, plus our boundled JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="sass-n-esm-js">
                        <div className="sassesm-main">
                            <h2>
                                <a href="">Sass & ESM JS</a>
                            </h2>
                            <p>
                                Import and complile Bootstrap's Sass with Autoprefixer and
                                Stylelint, and compile our source JavaScript with an ESM shim.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="second_row">
                    <div className="webpack">
                        <div className="webpack-main">
                            <h2>
                                <a href="">Webpack</a>
                            </h2>
                            <p>
                                Import and bundle Bootstrap's source Sass andJavaScript with
                                Webpack.
                            </p>
                        </div>
                    </div>
                    <div className="parcel">
                        <div className="parcel-main">
                            <h2>
                                <a href="">Parcel</a>
                            </h2>
                            <p>
                                Import and bundle Bootstrap's source Sass and JavaScript via Parcel
                            </p>
                        </div>
                    </div>
                    <div className="vite">
                        <div className="vite-main">
                            <h2>
                                <a href="">Vite</a>
                            </h2>
                            <p>
                                Import and bundle Bootstrap's source Sass and JavaScript with Vite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Elso_Feladat;
