import React,{useState} from 'react'
import axios from 'axios';

function WriteReview() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
 
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("title",title)
        formData.append("content",content)
        axios.post("http://localhost:3001/upload",formData,{headers: {
            accessToken : localStorage.getItem("accessToken")
        }}).then(res =>{
          alert(res)
        });
      };
    return (
        <div class="WR-container">
        <main class="WR-main">
            <form class="WR-form">
                <div class="WR-form__group">
                    <div class="WR-form__image-group">
                        <input type="file" id="image" name="image" class="WR-form__image-input" required onChange = {saveFile}/>
                        <label for="image"><i class="fas fa-plus-circle"></i><p class="WR-paragraph">Add image</p></label>
                    </div>    
                </div>
                <div class="WR-form__group">
                    <label for="title" class="WR-form__label">Title</label>
                    <input type="text" id="title" class="WR-form__input" required onChange = {(e) => {
                            setTitle(e.target.value);
                        }}/>
                </div>
                <div class="WR-form__group">
                    <label for="content" class="WR-form__label">Content</label>
                    <textarea name="content" id="content" cols="30" rows="10" class="WR-form__textarea-input" required onChange = {(e) => {
                            setContent(e.target.value);
                        }}></textarea>
                </div>
                <button onClick={uploadFile}>SUBMIT</button>
            </form>
        </main>
        <aside class="WR-aside">

        </aside>
    </div>
    )
}

export default WriteReview
