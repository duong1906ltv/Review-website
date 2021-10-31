import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
function Users() {
    const [listOfUsers,setListOfUsers] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3001/GetAllUser").then((response)=>{
        setListOfUsers(response.data);
      }) 
    })
    const deleteUser = (id) =>{
        const data = {user_id:id }
        axios.delete(`http://localhost:3001/DeleteUser/${id}`).then((response)=>{
            console.log(data)
            if (response.data.error) {
                alert(response.data.error)
              }
            else {
                alert(response.data)
            }
        })
    }
    return (
        <div class = "container-adminpage">
        <section class="nav-sub">
            <a href="./posts.html#post-manage" class="nav__link"><i class="fas fa-table icon"></i>Manage Users</a>
            <Link to="/Users" class="nav__link nav__link"><i class="fas fa-users icon"></i>Manage Users</Link>
            <a href="./topics.html#topic-manage" class="nav__link"><i class="fas fa-sitemap icon"></i>Manage Topics</a>
        </section>
        <section class="actions">
            <div id="user-add" class="tab">
                <div class="actions__nav">
                    <a href="#user-add" class="nav__link--active">Add User</a>
                    <a href="#user-manage">Manage Users</a>
                </div>
                <div class="actions__content">
                    <h2 class="heading-2">Add User</h2>

                    <form class="form">
                        <div class="form__group">
                            <label for="username" class="form__label">Username</label>
                            <input id="username" name="username" type="text" class="form__input" required/>
                        </div>
                        <div class="form__group">
                            <label for="email" class="form__label">Email</label>
                            <input id="email" name="email" type="email" class="form__input" required/>
                        </div>
                        <div class="form__group">
                            <label for="password" class="form__label">Password</label>
                            <input id="password" name="password" type="password" class="form__input"  required/>
                        </div>
                        <div class="form__group">
                            <label for="password" class="form__label">Password Confirmation</label>
                            <input id="password" name="password" type="password" class="form__input" required/>
                        </div>
                        <div class="form__group">
                            <label for="role" class="form__label">Role</label>
                            <select id="role" name="role" class="form__input" required>
                                <option value="" disabled selected>Role</option>
                                <option value="admin">Admin</option>
                                <option value="author">Author</option>
                            </select>
                        </div>
                        <div class="form__group">
                            <input type="submit" value="Save User" class="form__submit-input"/>
                        </div>
                    </form>
                </div>
            </div>
            <div id="user-manage" class="tab">
                <div class="actions__nav">
                    <a href="./users.html#user-manage" class="link link-edit">Edit</a>
                    <a href="#user-add">Add User</a>
                    <a href="#user-manage" class="nav__link--active">Manage Users</a>
                </div>
                <div class="actions__content">
                    <h2 class="heading-2">Manage Users</h2>
                    <table class="table table-user">
                        <tr> 
                            <th>No</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        {listOfUsers.map((value,key)=>{
                            return(
                            <tr>
                                <td>{value.user_id}</td>
                                <td>{value.user_name}</td>
                                <td>{value.role_name}</td>
                                <td>
                                <Link to="/" class="link link-edit">Edit</Link>
                            
                                <Link to="/" class="link link-delete"  onClick = {() => {deleteUser(value.user_id)}}>
    
                                    Delete
                                </Link>
                                </td>
                            </tr>
                            )
                        })}         
                    </table>
                </div>
            </div>
        </section>
                
        </div>
    )
}

export default Users
