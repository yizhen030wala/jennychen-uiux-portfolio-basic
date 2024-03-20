// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../../public/nav/nav'
import './home.scss'

//img
import TextDesk from '../../assets/images/textDesk.png'
import Download from '../../assets/icon/download.svg'
import title from '../../assets/images/titleWorks.png'
import RETO from '../../assets/images/viewsonic/viewsonic_01.png'

const index = () => {
  return (
    <>
      <Header />
      <main>
        <div className="hero">
          <div className="wrap">
            <div className="text_wrap">
              <h1>
                Hi ! I’m Jenny!<br></br>
                A Graphic/Visual Designer
              </h1>
              <figure><img src={TextDesk} alt="" /></figure>
            </div>
            <div className="btn_wrap">
              <button className="btn_black">關於我</button>
              <button className="btn_white">下載履歷 <img src={Download} alt="" /></button>
            </div>
          </div>

        </div>

        <div className="works">
          <div className="title"><img src={title} alt="" /></div>

          <div className="container">
            {/* one */}
            <div className="card">
              <div className="left"><img src={RETO} alt="" /></div>
              <div className="right">
                <div className="info_top">
                  <h4>2022</h4>
                  <h1>Reto旅藤</h1>
                  <h4>旅藤是一款如何如何的作品</h4>
                  <div className="tag_wrap">
                    <div className="tag">UIUX</div>
                    <div className="tag">原型設計</div>
                    <div className="tag">設計規範</div>
                  </div>
                </div>
                <button className="info_btn">了解更多細節</button>
              </div>
            </div>
            {/* two */}
            <div className="card">
              <div className="left"><img src={RETO} alt="" /></div>
              <div className="right">
                <div className="info_top">
                  <h4>2022</h4>
                  <h1>Reto旅藤</h1>
                  <h4>旅藤是一款如何如何的作品</h4>
                  <div className="tag_wrap">
                    <div className="tag">UIUX</div>
                    <div className="tag">原型設計</div>
                    <div className="tag">設計規範</div>
                  </div>
                </div>
                <button className="info_btn">了解更多細節</button>
              </div>
            </div>
            {/* three */}
            <div className="card">
              <div className="left"><img src={RETO} alt="" /></div>
              <div className="right">
                <div className="info_top">
                  <h4>2022</h4>
                  <h1>Reto旅藤</h1>
                  <h4>旅藤是一款如何如何的作品</h4>
                  <div className="tag_wrap">
                    <div className="tag">UIUX</div>
                    <div className="tag">原型設計</div>
                    <div className="tag">設計規範</div>
                  </div>
                </div>
                <button className="info_btn">了解更多細節</button>
              </div>
            </div>
            {/* four */}
            <div className="card">
              <div className="left"><img src={RETO} alt="" /></div>
              <div className="right">
                <div className="info_top">
                  <h4>2022</h4>
                  <h1>Reto旅藤</h1>
                  <h4>旅藤是一款如何如何的作品</h4>
                  <div className="tag_wrap">
                    <div className="tag">UIUX</div>
                    <div className="tag">原型設計</div>
                    <div className="tag">設計規範</div>
                  </div>
                </div>
                <button className="info_btn">了解更多細節</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default index
