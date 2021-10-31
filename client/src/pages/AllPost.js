import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

function AllPost() {
    const [listOfPosts,setListOfPosts] = useState([])
    let history = useHistory()
    useEffect(()=>{
      axios.get("http://localhost:3001/GetAllPost").then((response)=>{
        setListOfPosts(response.data);
      })
      console.log(listOfPosts) 
    })
    return (
        <div class="p2-container">
        <div class="p2-carousel">

        </div>
        <div class="p2-content">
            <main class="p2-main">
                {listOfPosts.map((value) => {
                    return(
                        <section class="p2-brief-post">
                            <div class="p2-brief-post__image-box">
                                <img class="p2-brief-post__image" src={value.img_src} alt="photo1"/>
                            </div>
                            <div class="p2-brief-post__content">
                                <h3 class="p2-heading-3" onClick = {()=>history.push(`/Posts/${value.post_id}`)}>{value.title}</h3>
                                <p class="p2-paragraph">{value.content}</p>
                                <button class="p2-btn btn--black" onClick = {()=>history.push(`/Posts/${value.post_id}`)}>Xem thêm</button>
                            </div>
                        </section>
                    )
                })}
            </main>
            <aside class="p2-aside">
                <section class="p2-aside__section">
                    <h3 class="p2-heading-3">Phổ biến</h3>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2019/11/woodstock-coffee.jpg" alt=""/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Top 9 quán cà phê đẹp đỉnh cao Đà Lạt bạn nhất định phải ghé hết!</a>
                            </h4>
                        </div>
                    </div>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2019/04/cafe-dep-o-da-lat-dulichchat-220x150.jpg" alt=""/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Ghim trong tim 69 quán cafe đẹp nhất Đà Lạt cho chuyến đi sắp tới của bạn</a>
                            </h4>
                        </div>
                    </div>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2019/03/quy-nhon-dulichchat-220x150.jpg" alt=""/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Top 9 bãi biển siêu đẹp bạn không thể bỏ qua hè này</a>
                            </h4>
                        </div>
                    </div>
                </section>
                <section class="p2-aside__section">
                    <h3 class="p2-heading-3">Gần đây</h3>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2021/10/khu-nghi-duong-new-world-phu-quoc-dulichchat-7-390x220.jpg" alt="newest1"/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Combo Khu nghỉ dưỡng New World Phú Quốc – Giá Tết bằng giá ngày thường</a>
                            </h4>
                        </div>
                    </div>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2021/03/du-lich-da-lat-thang-3-dulichchat-14-390x220.jpg" alt="newest2"/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Có gì ở Khu nghỉ dưỡng New World Phú Quốc mới toanh – siêu xịn sò?</a>
                            </h4>
                        </div>
                    </div>
                    <div class="p2-aside__item">
                        <div class="p2-aside__image-box">
                            <img class="p2-aside__image" src="https://dulichchat.com/wp-content/uploads/2021/08/lau-bo-ba-toa-nha-go-da-lat-dulichchat-390x220.jpg" alt="newest3"/>
                        </div>
                        <div class="p2-aside__content">
                            <h4 class="p2-heading-4">
                                <a href="#">Có gì ở Khu nghỉ dưỡng New World Phú Quốc mới toanh – siêu xịn sò?</a>
                            </h4>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    </div>
    )
}

export default AllPost
