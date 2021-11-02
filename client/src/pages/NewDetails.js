import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Comment from '../component/Comment'
import { AuthContext } from '../helpers/AuthContext';
import CommentForm from '../component/CommentForm';

function NewDetails() {
    const [listOfComments, setListofCommnents] = useState([])
    const [activeComment, setActiveCommnents] = useState(null)
    const {authState,setAuthState} = useContext(AuthContext);
    useEffect(() =>{
        axios.get("http://localhost:3001/GetComment").then((response)=>{
        setListofCommnents(response.data);
        })
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
        axios.post("http://localhost:3001/CreateComment",data,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then(res =>{
          setListofCommnents([res, ...listOfComments])
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
                        <CommentForm submitLabel="Write" handleSubmit = {CreateComment}/>
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
                            addComment = {CreateComment}
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

export default NewDetails
