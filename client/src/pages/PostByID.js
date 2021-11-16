import axios from 'axios'
import React, { useState,useEffect,useContext } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../helpers/AuthContext'
import Comment from '../component/Comment'
import CommentForm from '../component/CommentForm'

function PostByID() {
    let {id} = useParams()
    const [listOfComments, setListofCommnents] = useState([])
    const [activeComment, setActiveCommnents] = useState(null)
    const [postObject, setPostObject] = useState({})
    const [commentId, setCommentId] = useState()
    const [likes, setLikes] = useState(0)
    const [countComment,setCountComment] = useState(0)
    const {authState} = useContext(AuthContext);
    useEffect(()=>{
        axios.get(`http://localhost:3001/Post/ByID/${id}`).then((response)=>{
        setPostObject(response.data);
        })
        axios.get(`http://localhost:3001/GetComment/${id}`).then((response)=>{
        setListofCommnents(response.data);
        setCommentId(response.data[0].comment_id) 
        setCountComment(response.data.length)
        })
        axios.get(`http://localhost:3001/getAllLikes/${id}`).then((response)=>{
            setLikes(response.data)
        })
    },[])
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
    const CreateComment = (text,parent_id) =>{
        var today = new Date(),
        currentTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const data = {bodyComment:text, createAt : currentTime, parent_id: parent_id}
        axios.post(`http://localhost:3001/CreateComment/${id}`,data,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then((res) =>{
            const newCommentID = commentId +1;
            const newComment = {comment_id:newCommentID, createAt: currentTime, body: text, parent_id : parent_id, user_id: authState.id};
            console.log(newComment)
          setListofCommnents([newComment,...listOfComments])
          setActiveCommnents(null)
        });  
    }
    const UpdateComment = (text,comment_id) =>{
        const data = {bodyComment:text, comment_id: comment_id}
        axios.put("http://localhost:3001/UpdateComment",data).then(()=>{
            const updatedListOfComments = listOfComments.map((comment)=>{
                if (comment.comment_id === comment_id){
                    return {...comment, body: text}
                }
                return comment;
            })
            setListofCommnents(updatedListOfComments)
            setActiveCommnents(null)
        });
    }
    const DeleteComment = (comment_id) => {
        if (window.confirm("Are you sure want to remove a comment?")){
            axios.delete(`http://localhost:3001/DeleteComment/${comment_id}`).then(()=>{
                const updatedListOfComments = listOfComments.filter(
                    (listOfComments) => listOfComments.comment_id !== comment_id
                )
                setListofCommnents(updatedListOfComments)
            })
        }
        
    }
    const LikeaPost = (post_id) => {
        axios.post(`http://localhost:3001/Likes`,{post_id: post_id},{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then((res) =>{
            if (res.data === "Liked the post"){
                setLikes(likes +1)
            }
            else{
                setLikes(likes-1)
            }
        });
    }
    return (
        <div class="details-container">
        <AuthContext.Provider>
        <main class="details-main">
            <article class="article">
                <section class="article__post">
                    <div class="post__heading-box">
                        <h2 class="heading-2">{postObject.title}</h2>
                    </div>
                    <div class="post__header">
                        <div class="post__author acc">
                            <div class="acc__shape">
                                <img src={postObject.img_ava} alt="ava1" class="acc__ava"/>
                            </div>
                            <div class="post__info">
                                <div class="acc__name">
                                    <span>{postObject.nick_name}</span>
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
                                {postObject.content}
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
                            <span class="post__react-name" onClick = {() => {LikeaPost(id)}}>Like ({likes})</span>
                        </div>
                        <div class="post__comment">
                            <span class="post__comment-name">Replies</span>
                            <span class="post__comment-num">{countComment}</span>
                        </div>
                    </div>
                </section>
                <section class="article__comment">
                    <div class="comment__reply">
                        <div class="acc__shape">
                            <img src="https://st.quantrimang.com/photos/image/2020/02/22/avatar-den-co-don-9.png" alt="ava1" class="acc__ava"/>
                        </div>
                        <CommentForm submitLabel="Write" handleSubmit = {CreateComment} hasCancelButton/>
                    </div>
                    {rootComments.map((value)=>{
                        return(
                            <Comment 
                            comment ={value} 
                            replies = {getReplies(value.comment_id)}
                            currentUserId = {authState.id}
                            deleteComment = {DeleteComment}
                            activeComment = {activeComment}
                            setActiveComment = {setActiveCommnents}
                            createComment = {CreateComment}
                            updateComment = {UpdateComment}
                            /> 
                        )
                    })}
                </section>
            </article>
        </main>
        <aside class="p2-aside"> 
                <div class="p2-aside__header">
                    <label for="popular-tab" class="p2-aside__tab"><h3 class="p2-heading-3">Phổ biến</h3></label>
                    <label for="newest-tab" class="p2-aside__tab"><h3 class="p2-heading-3">Gần đây</h3></label>
                </div>
                <input type="radio" id="popular-tab" name="aside-tab" class="p2-popular-tab"/>
                <input type="radio" id="newest-tab" name="aside-tab" class="p2-newest-tab"/>
                <section class="p2-aside__section p2-aside__section--popular">
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
                <section class="p2-aside__section p2-aside__section--newest">
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
        </AuthContext.Provider>
    </div>
    )
}

export default PostByID
