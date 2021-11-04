import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'


function Comment({comment,replies,currentUserId,createComment,updateComment,deleteComment,activeComment,setActiveComment,parent_id = null}) {
    const fiveMinutes = 300000
    const timePassed = new Date() - new Date(comment.createAt) > fiveMinutes
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.user_id && !timePassed
    const canDelete = currentUserId === comment.user_id && !timePassed
    const createAt = new Date(comment.createAt).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment.comment_id
    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment.comment_id
    const replyId = parent_id ? parent_id : comment.comment_id
    return(
        <div class="comment__item">
            <div class="acc">
                <div class="acc__shape">
                    <img src="https://st.quantrimang.com/photos/image/2020/02/22/avatar-den-co-don-9.png" alt="ava1" class="acc__ava"/>
                </div>
                <div class="comment__info">
                    <div class="acc__name">
                        <span>{comment.user_name}</span>
                    </div>
                    <div class="comment__time">
                        <span>{createAt}</span>
                    </div>
                </div>
            </div>
            <div class="comment__box">
                {!isEditing && <p class="paragraph">{comment.body}</p>}
                {isEditing &&(
                    <CommentForm 
                    submitLabel ="Update" 
                    hasCancelButton 
                    initialText = {comment.body}
                    handleSubmit = {(text) => updateComment(text,comment.comment_id)} 
                    handleCancel = {()=>setActiveComment(null)}
                    />
                )}
                <div class="reply-box">
                    {canReply && 
                        <label for="reply__toggle2" 
                        class="reply__link"
                        onClick = {()=>{
                            setActiveComment({id:comment.comment_id, type:"replying"})
                        }}
                        >Reply
                        </label>}
                    {canEdit && 
                        <label for="reply__toggle2" 
                        class="reply__link"
                        onClick = {()=>{
                            setActiveComment({id:comment.comment_id, type:"editing"})
                        }}
                        >Edit</label>}
                    {canDelete && <label for="reply__toggle2" class="reply__link" onClick = {() => deleteComment(comment.comment_id)}>Delete</label>}
 
                </div>    
            </div>
            {isReplying && (
                <CommentForm submitLabel = "Reply" handleCancel = {()=>setActiveComment(null)} hasCancelButton handleSubmit= {(text)=>createComment(text,replyId)}/>
            )}
            {replies.length>0 && (
                <div class="reply__comment">
                    {replies.map(reply =>(
                        <Comment 
                        comment = {reply} 
                        replies ={[]} 
                        currentUserId = {currentUserId}
                        deleteComment = {deleteComment}
                        parent_id = {comment.comment_id}
                        createComment = {createComment}
                        activeComment = {activeComment}
                        setActiveComment = {setActiveComment}
                        updateComment = {updateComment}
                        />
                    ))}
                </div>
            )}
        </div>   
    )
}

export default Comment
