import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import './components/Hero';
import VideoPlayer from 'react-video-js-player';
import short from './short.mp4';

export default function page() {
  return(
      <div className='page'>
        <div className='navhero'>
          <nav className='Navbar'>
              <div className='nav__logo'>
                  <h2>Shop Apples</h2>
              </div>
              <div className='nav__menu'>
                  <ul className='nav__order'>
                    <li className='nav__order'>Home</li>
                    <li className='nav__order'>Shop</li>
                    <li className='nav__order'>Availables</li>
                    <li className='nav__order'>Blog</li>
                  </ul>
              </div>
              <div className='nav__btn'>
                  <i></i>
                  <button>Shop Now</button>
              </div>
          </nav>
          <section className='hero'>
            <div className='hero__des'>
              <h1>
                Get the best experience with best technology in hand
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolore inventore veritatis ducimus molestias magnam ipsam amet quia 
                necessitatibus, animi ipsa omnis. Beatae dolore quam vero repellendus 
                fugiat eius impedit autem!
              </p>
              <button>Shop Now</button>
            </div>
            <div className='hero__img'>
              <img src="images/hero.png" />
            </div>
          </section>
        </div>
        <section className='info__1'>
          <div className='info__img'>
                      <img src="images/info.png" />
                    </div>
            <div className='info__des'>
                <h1>
                  We all need the best
                  information and keep up the
                  trend.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore inventore veritatis ducimus molestias magnam ipsam amet quia 
                  necessitatibus, animi ipsa omnis. Beatae dolore quam vero repellendus 
                  fugiat eius impedit autem!
                </p>
                <button>Shop Now</button>
            </div>
          </section>
          <section className='info__2'>
          <div className='info__des2'>
                <h1>
                  We all need the best
                  information and keep up the
                  trend.
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore inventore veritatis ducimus molestias magnam ipsam amet quia 
                  necessitatibus, animi ipsa omnis. Beatae dolore quam vero repellendus 
                  fugiat eius impedit autem!
                </p>
                <button>Shop Now</button>
            </div>
          <div className='info__img2'>
                      <img src="images/info.png" />
                    </div>
          </section>
          <section className='explained'>
            <div className='sec__title'>
              <h2>
                Tons of tech behind every shot
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore inventore veritatis
              </p>
            </div>
            <div className='all__flex'>
              <div className='all_column'>
                <div className='block'>
                  <i></i>
                  <h3>Screen</h3>
                  <p>heuugubb ugweguwe</p>
                </div>
                <div className='block__down'>
                  <i></i>
                  <h3>Screen</h3>
                  <p>heuugubb ugweguwe</p>
                </div>
              </div>
              <div className='sec__img'>
              <img src="images/explained.png" />
              </div>
              <div className='all_column'>
                <div className='block'>
                  <i></i>
                  <h3>Screen</h3>
                  <p>heuugubb ugweguwe</p>
                </div>
                <div className='block__down'>
                  <i></i>
                  <h3>Screen</h3>
                  <p>heuugubb ugweguwe</p>
                </div>
              </div>
            </div>
          </section>
          <section className='video__sec'>
            <div className='video__sec'>
              <h2>
                Watch this video
              </h2>
              <p>heuugubb ugweguwe</p>
            <VideoPlayer 
            src={short}
            poster="images/hero.png"
            width="720"
            height="420"
            />
            </div>
          </section>
          <section className='partners'>
            <div className='partners'>
              <div className='partners__title'>
              <h2>Our partners</h2>
              </div>
            <div className='partners__img'>
            <img src="images/amazon.png" />
            <img src="images/dhl.png" />
            <img src="images/ebay.png" />
            <img src="images/shopify.png" />
            </div>
            </div>
          </section>
          <section className='footer'>
            <div className='footer__one'>
              <h3>Shop Apples</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore inventore veritatis ducimus molestias magnam ipsam amet quia 
                  necessitatibus, animi ipsa omnis. Beatae dolore quam vero repellendus 
                  fugiat eius impedit autem!
                </p>
            </div>
            <div className='footer__two'>
              <h3>Company</h3>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div className='footer__three'>
              <h3>Contact</h3>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div className='footer__four'>
              <h3>Shop Apples</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore inventore veritatis ducimus molestias magnam ipsam amet quia 
                  necessitatibus, animi ipsa omnis. Beatae dolore quam vero repellendus 
                  fugiat eius impedit autem!
                </p>
            </div>
          </section>
        </div>

  );
}
