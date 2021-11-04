import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Comment from '../component/Comment'

function Details() {   
    const [listOfComments, setListofCommnents] = useState([])
    const [bodyComment, setBodyComment] = useState([])
    
    axios.get("http://localhost:3001/GetComment").then((response)=>{
        setListofCommnents(response.data);
    })
    
    const rootComments = listOfComments.filter(
        (listOfComments) => listOfComments.parent_id ==null
    )
    const getReplies = commentId =>{
        return listOfComments
            .filter(listOfComments => listOfComments.parent_id === commentId)
            .sort(
                (a,b)=>
                    new Date(a.createAt).getTime() - new Date(b.createAt).getTime()
            )
    }
    const CreateComment = () =>{
        var today = new Date(),
        currentTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const data = {bodyComment:bodyComment, createAt : currentTime, parent_id: null}
        console.log(data)
        axios.post("http://localhost:3001/CreateComment",data,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then(res =>{
          setListofCommnents([res, ...listOfComments])
        });  
    }
    return (
        <div class="details-container">
        <main class="details-main">
            <article class="article">
                <section class="article__post">
                    <div class="post__heading-box">
                        <h2 class="heading-2">Title heading</h2>
                    </div>
                    <div class="post__header">
                        <div class="post__author acc">
                            <div class="acc__shape">
                                <img src="./img/ava1.jpg" alt="ava1" class="acc__ava"/>
                            </div>
                            <div class="post__info">
                                <div class="acc__name">
                                    <span>Phung Dinh Duong</span>
                                </div>
                                <div class="post__time">
                                    <span>January 10, 2021 at 08:56 am</span>
                                </div>
                            </div>
                        </div>
                        <div class="post__option">

                        </div>
                    </div>
                    <div class="post__content">
                        <div class="post__image-box">
                            <img src="./img/photo1.jpg" alt="photo1" class="post__image"/>
                        </div>
                        <div class="post__text">
                            <p class="paragraph">
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                            
                        </div>
                        <div class="post__image-box">
                            <img src="./img/photo2.jpg" alt="photo1" class="post__image"/>
                        </div>
                        <div class="post__text">
                            <p class="paragraph">
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                            <p class="paragraph">
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                                Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                        
                        </div>
                    </div>
                    <div class="post__footer">
                        <div class="post__react">
                            <i class="fas fa-heart post__react-icon"></i>
                            <span class="post__react-name">Like (25)</span>
                        </div>
                        <div class="post__comment">
                            <span class="post__comment-name">Replies</span>
                            <span class="post__comment-num">5</span>
                        </div>
                    </div>
                </section>
                <section class="article__comment">
                    <div class="comment__reply">
                        <div class="acc__shape">
                            <img src="./img/ava2.jpg" alt="ava1" class="acc__ava"/>
                        </div>
                        <textarea type="text" class="comment__input" onChange = {(e) => {setBodyComment(e.target.value)}}></textarea>
                        <div class="comment__option">
                            <div class="comment__option--no">
                                <span>Cancel</span>
                            </div>
                            <div class="comment__option--yes">
                                <button onClick = {CreateComment}>Comment</button>
                            </div>
                        </div>
                    </div>
                    <div class="comment__item">
                        <div class="acc">
                            <div class="acc__shape">
                                <img src="./img/ava3.jpg" alt="ava1" class="acc__ava"/>
                            </div>
                            <div class="comment__info">
                                <div class="acc__name">
                                    <span>Kara Tran</span>
                                </div>
                                <div class="comment__time">
                                    <span>October 28, 2021 at 12:02 am</span>
                                </div>
                            </div>
                        </div>
                        <div class="comment__box">
                            <p class="paragraph">Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Some text about this blog entry.</p>
                            <label for="reply__toggle1" class="reply__link">Reply</label>
                        </div>
                        <input type="checkbox" class="reply__checkbox" id="reply__toggle1"/>
                        <div class="comment__reply">
                            <div class="acc__shape">
                                <img src="./img/ava2.jpg" alt="ava1" class="acc__ava"/>
                            </div>
                            <textarea type="text" class="comment__input"></textarea>
                            <div class="comment__option">
                                <div class="comment__option--no">
                                    <span>Cancel</span>
                                </div>
                                <div class="comment__option--yes">
                                    <span>Comment</span>
                                </div>
                            </div>
                        </div>
                        <div class="reply__comment">
                            <div class="acc">
                                <div class="acc__shape">
                                    <img src="./img/ava2.jpg" alt="ava1" class="acc__ava"/>
                                </div>
                                <div class="comment__info">
                                    <div class="acc__name">
                                        <span>Cat</span>
                                    </div>
                                    <div class="comment__time">
                                        <span>October 28, 2021 at 13:25 pm</span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment__box">
                                <p class="paragraph">Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Some text about this blog entry.</p>
                                <label for="reply__toggle4" class="reply__link">Reply</label>
                            </div>
                            <input type="checkbox" class="reply__checkbox" id="reply__toggle4"/>
                            <div class="comment__reply">
                                <div class="acc__shape">
                                    <img src="./img/ava2.jpg" alt="ava1" class="acc__ava"/>
                                </div>
                                <textarea type="text" class="comment__input"></textarea>
                                <div class="comment__option">
                                    <div class="comment__option--no">
                                        <span>Cancel</span>
                                    </div>
                                    <div class="comment__option--yes">
                                        <span>Comment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {rootComments.map((value)=>{
                        return(
                            <Comment comment ={value} replies = {getReplies(value.comment_id)}/> 
                        )
                    })}
                    <div class="comment__item">
                        <div class="acc">
                            <div class="acc__shape">
                                <img src="./img/ava5.jpeg" alt="ava1" class="acc__ava"/>
                            </div>
                            <div class="comment__info">
                                <div class="acc__name">
                                    <span>Torikikuto</span>
                                </div>
                                <div class="comment__time">
                                    <span>September 25, 2021 at 21:01 am</span>
                                </div>
                            </div>
                        </div>
                        <div class="comment__box">
                            <p class="paragraph"> Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <label for="reply__toggle3" class="reply__link">Reply</label>
                        </div>
                        <input type="checkbox" class="reply__checkbox" id="reply__toggle3"/>
                        <div class="comment__reply">
                            <div class="acc__shape">
                                <img src="./img/ava2.jpg" alt="ava1" class="acc__ava"/>
                            </div>
                            <textarea type="text" class="comment__input"></textarea>
                            <div class="comment__option">
                                <div class="comment__option--no">
                                    <span>Cancel</span>
                                </div>
                                <div class="comment__option--yes">
                                    <span>Comment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
        <aside class="aside">
            <section class="aside__search">
    
            </section>
            <section class="aside__more">
                <div class="aside__tab posts-popular">
    
                </div>
                <div class="aside__tab posts-newest">
    
                </div>
            </section>
        </aside>
    </div>
    )
}

export default Details
