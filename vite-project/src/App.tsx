import './App.css'
import cat from './image/cat.jpg';
function App() {
  return (
    <div id="app">
        <div id="container">
            <div id="user">
                <div id="avatar">
                    <img src={cat}alt=""/>
                </div>

                <div id="userInfo">
                    <div id="nameAndTitle">
                        <p id="title">
                            曾于愷
                        </p>
                        <p>
                            就讀於淡江大學資管系
                        </p>
                        <p>
                            我的MBTI是INFP
                        </p>
                        <p><a href="https://github.com/DanielTseng2004">
                                這是我的Github連結
                            </a>
                        </p>
                    </div>
                    <div id="aboutUser"></div>
                    <p>畢業於新北高中
                    </p>
                    <p>目標往科技業發展
                    </p>
                    <p>但好像沒學到什麼東西
                    </p>
                </div>
            </div>
            <div id="about">
                <div id="contact">
                    <p id="title">
                        不要聯絡我
                    </p>
                    <div id="contactInfo">
                        <div id="locate">
                            <p id="title">locate <i id="bi bi-geo-alt"></i></p>
                            <p>
                                曾于愷
                            </p>
                            <p>
                                資訊管理系
                            </p>
                            <p>
                                淡江大學
                            </p>
                        </div>
                        <div id="email">
                            <p id="title">Email <i id="bi bi-envelope"></i></p>
                            <p>
                                E-mail: 411630725@365.tku.edu.tw
                            </p>
                        </div>
                    </div>
                </div>

                <div id="wrapper">
                    <p id="title">我的興趣:</p>
                    <a href="https://www.instagram.com/tsgarage_2st_spirit/" id="btn btn1">@tsgarage_2st_spirit</a>
                    <a href="https://www.instagram.com/kouk.14/" id="btn btn1">@kouk.14</a>
                    <a href="https://www.instagram.com/newjeans_official/" id="btn btn1">@newjeans_official</a>
                    <a href="https://www.instagram.com/aespa_official/" id="btn btn1">@aespa_official</a>
                </div>

            </div>
            <div>
                <form action="/submit" method="post">
                    <label form="name">覺得這網站很廢請+1:</label>
                    <input type="text" id="name" name="name"/>
                    <input type="submit" value="不要提交"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
