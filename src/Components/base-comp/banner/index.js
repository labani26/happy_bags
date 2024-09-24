import bag_banner from "../../images/sale50.jpg";
import "./index.css";

const Banner = () => (
    <div className="banner-container">
        <div className="text-container">
            <h1>
                THE SUMMER SALE
                <br />
                is back!! From May 26th to June 5th, from 12 p.m. to 9 p.m.
            </h1>
            <p>
                Get your favorite bags at unbelievable prices!
                <br />
                The Summer Sale will be available on all bags from May 26th to June 5th, 12 p.m. to 9 p.m.
            </p>
            <div className="wrapper">
                <div className="marquee">
                    <p>HURRY UP!! Sale from May 26th to June 5th, 12 p.m. to 9 p.m.</p>
                </div>
            </div>
            <button type="button" className="btn">Explore now</button>
        </div>
        <img src={bag_banner} alt="Summer Sale Banner - bags at 50% off" className="banner-logo" />
    </div>
);

export default Banner;
