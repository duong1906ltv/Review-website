import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Comment({comment,replies}) {
    const [listOfComments, setListofCommnents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/GetComment").then((response)=>{
          setListofCommnents(response.data);
        })
        console.log(listOfComments) 
      })
    const getReplies = commentId =>{
        return listOfComments
            .filter(listOfComments => listOfComments.parent_id === commentId)
            .sort(
                (a,b)=>
                    new Date(a.createAt).getTime() - new Date(b.createAt).getTime()
            )
    }
    return(
        <div class="comment__item">
            <div class="acc">
                <div class="acc__shape">
                    <img src="./img/ava4.jpg" alt="ava1" class="acc__ava"/>
                </div>
                <div class="comment__info">
                    <div class="acc__name">
                        <span>{comment.user_name}</span>
                    </div>
                    <div class="comment__time">
                        <span>{comment.createAt}</span>
                    </div>
                </div>
            </div>
            <div class="comment__box">
                <p class="paragraph">{comment.body}</p>
                <label for="reply__toggle2" class="reply__link">Reply</label>
            </div>
            <input type="checkbox" class="reply__checkbox" id="reply__toggle2"/>
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
            {replies.length>0 && (
                <div class="reply__comment">
                    {replies.map(reply =>(
                        <Comment comment = {reply} replies ={getReplies(reply.comment_id)}/>
                    ))}
                </div>
            )}
        </div>   
    )
}

export default Comment
