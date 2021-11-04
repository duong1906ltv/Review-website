import React, { useState } from 'react'

function CommentForm({handleSubmit, submitLabel,hasCancelButton = false, initialText='',handleCancel}) {
    const [text,setText] = useState(initialText)
    const isTextareaDisabled = text.length ===0;
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("")
    }
    return ( 
        <form class="reply-form" onSubmit = {onSubmit}>
            <textarea  
                class="comment__input"
                value = {text}   
                onChange = {(e) => {setText(e.target.value)}}>
            </textarea>
            <div class="comment__option">
                {hasCancelButton &&(
                    <div class="comment__option--yes">
                    <button onClick = {handleCancel}>Cancel</button>
                    </div>
                )}
                <div class="comment__option--yes">
                    <button disabled={isTextareaDisabled}>{submitLabel}</button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm
