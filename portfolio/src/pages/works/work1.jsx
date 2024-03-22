// 旅藤
import Footer from '../../../public/footer/footer'
import Header from '../../../public/nav/nav'
import './works.scss'

//img
import Rallway from '../../assets/images/rallway/cover.png'


const work1 = () => {
    return (
        <div>
            <Header />
            <main className='portfolio'>
                <div className="port_content">
                    <div className="porject_info"></div>   
                </div>
                <div className="other_project">
                    <a href={`/rallway`} className="next">
                        <div className="wrap">
                            <p>下一篇</p>
                            <h2>台鐵列車動態 redesign </h2>
                            <p>了解更多</p>
                        </div>
                        <figure><img src={Rallway} alt="" /></figure>
                        
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default work1
