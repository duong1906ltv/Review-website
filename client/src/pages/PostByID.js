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
    const {authState} = useContext(AuthContext);
    axios.get(`http://localhost:3001/Post/ByID/${id}`).then((response)=>{
        setPostObject(response.data);
        })
        axios.get(`http://localhost:3001/GetComment/${id}`).then((response)=>{
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
    const CreateComment = (text,parent_id) =>{
        var today = new Date(),
        currentTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+' '+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const data = {bodyComment:text, createAt : currentTime, parent_id: parent_id}
        console.log(data)
        axios.post(`http://localhost:3001/CreateComment/${id}`,data,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then((res) =>{
          setListofCommnents([res, ...listOfComments])
          setActiveCommnents(null)
        });  
    }
    const UpdateComment = (text,comment_id) =>{
        const data = {bodyComment:text, comment_id: comment_id}
        axios.post("http://localhost:3001/UpdateComment",data).then(()=>{
            const updatedListOfComments = listOfComments.map((comment)=>{
                if (comment.comment_id === comment_id){
                    return {...comment, bodyComment: text}
                }
                return comment;
            })
            setListofCommnents(updatedListOfComments)
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
                                <img src="./img/ava1.jpg" alt="ava1" class="acc__ava"/>
                            </div>
                            <div class="post__info">
                                <div class="acc__name">
                                    <span>{postObject.username}</span>
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
        </AuthContext.Provider>
    </div>
    )
}

export default PostByID
