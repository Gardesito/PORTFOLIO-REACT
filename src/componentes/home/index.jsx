const Home = () => {
    return (
        <div className="wrapper">
        {/* -----------HEADER-------- */}

        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          {/* ----Reloj -----*/}

          <div className="clock">
            <p id="date"></p>
            <p id="time"> </p>
          </div>
          {/* ------------------ */}
          <div className="user-settings">
            <img
              className="user-img"
              src="https://res.cloudinary.com/dtmziqubb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1713034828/A7B15045-4966-428B-84F2-7A228DD7D1D9_fjchcg.jpg"
              alt=""
            />
            <div className="user-name">Elias</div>

            <svg viewBox="0 0 492 492" fill="currentColor">
              <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
            </svg>

            <div className="notify">
              <div className="notification"></div>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* -------------------------- MAIN---------------------------------- */}

        <div className="main-container">
          <div className="main-header anim">Sobre mi</div>

          <div className="main-blogs">
            <div className="main-blog anim" /* style="--delay: 0.1s" */>
              <div className="main-blog__title">
                Diseñador y Programador
                <h4 className="descripcion">
                  Mi nombre es Elias Solis soy un desarrollador front-end
                </h4>
              </div>
              <div className="main-blog__author">
                <div className="author-img__wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713069186/WhatsApp_Image_2024-03-20_at_17.51.05_rlr5g1.jpg"
                  />
                </div>
                <div className="author-detail">
                  <div className="author-name">Elias Solis</div>
                  <div className="author-info">
                    Front <span className="seperate"></span>Designer
                  </div>
                </div>
              </div>
              <div className="main-blog__time">7 min</div>
            </div>
            <div className="main-blog anim" /* style="--delay: 0.2s" */>
              <div className="main-blog__title">Ultimos Proyectos</div>
              <div className="main-blog__author tips">
                <div className="main-blog__time">7 min</div>
                <div className="author-img__wrapper">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713551288/react-logo-1_w0rdvz.png"
                  />
                </div>
                <div className="author-detail">
                  <div className="author-name">Food Web</div>
                  <div className="author-info">
                    En proceso <span></span>de cambios
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- IMAGENES ABAJO---------------------------------------------------------------------- */}

          <div className="small-header anim" /* style="--delay: 0.3s" */>
            Proyectos
          </div>

          <div className="videos">
            <div className="video anim" /* style="--delay: 0.4s" */>
              <div className="video-time">8 min</div>
              <div className="video-wrapper">
                <img
                  src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713033461/brandon-lam-Dd_7xDCuuUo-unsplash_w40rsy.jpg"
                  alt=""
                />
                {/*  <!-- -------------------------- BOX 1 ------------------------*/}
                <div className="author-img__wrapper video-author">
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991605/js_f5pvdh.png"
                  />
                </div>
              </div>
              <div className="video-by">Java Script</div>
              <div className="video-name">Reloj Creativo </div>
              <div className="video-view">
                Difficulty<span className="seperate video-seperate"></span>Medium
              </div>
            </div>
            {/* <!------------------------------ 2  Box ------------------------------------------------> */}

            <div className="video anim" /* style="--delay: 0.5s" */>
              <div className="video-time">5 min</div>
              <div className="video-wrapper">
                <video muted="">
                  <source
                    src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="author-img__wrapper video-author">
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991604/css_x97ls1.png"
                  />
                </div>
              </div>
              <div className="video-by offline">Htlm + Css</div>
              <div className="video-name">Linterna </div>
              {/* <!------------------------------------- BOX 3  --------------------------------------------------->*/}
              <div className="video-view">
                Difficulty<span className="seperate video-seperate"></span>Medium
              </div>
            </div>
            <div className="video anim" /* style="--delay: 0.6s" */>
              <div className="video-time">7 min</div>
              <div className="video-wrapper">
                <video muted="">
                  <source
                    src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="author-img__wrapper video-author">
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713991604/css_x97ls1.png"
                  />
                </div>
              </div>
              <div className="video-by offline">Html + Css</div>
              <div className="video-name">Declaracion </div>
              <div className="video-view">
                Difficulty<span className="seperate video-seperate"></span>Medium
              </div>
            </div>
            {/*   <!-- ---------------   BOX 4 ------------------------ --> */}
            <div className="video anim" /* style="--delay: 0.7s" */>
              <div className="video-time">6 min</div>
              <div className="video-wrapper">
                <video muted="">
                  <source
                    src="https://res.cloudinary.com/dtmziqubb/video/upload/v1713550880/y2mate.com_-___Comic_Speed_Lines_1080p_aan4p9.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="author-img__wrapper video-author">
                  <img
                    className="author-img"
                    src="https://res.cloudinary.com/dtmziqubb/image/upload/v1713993116/css1_pkbk9j.png"
                  />
                </div>
              </div>
              <div className="video-by">Html + Css</div>
              <div className="video-name">Lluvia </div>
              <div className="video-view">
                Difficulty<span className="seperate video-seperate"></span>Easy
              </div>
            </div>
          </div>

          {/* --------------------- */}
        </div>

        {/* ------------------------------- */}
      </div>
    );
}

export default Home;
