import React from 'react'
import { Link } from 'react-router-dom'

function AddUser() {
    return (
        <div>
            <section class="nav-sub">
        <a href="../post/manage.html" class="nav__link"><i class="fas fa-table icon"></i>Manage Posts</a>
        <Link to="/user/manage" class="nav__link nav__link--active"><i class="fas fa-users icon"></i>Manage Users</Link>
        <a href="../topic/manage.html" class="nav__link"><i class="fas fa-sitemap icon"></i>Manage Topics</a>
    </section>
    <section class="actions">
        <div class="actions__nav">
            <Link to="/user/add" class="nav__link--active">Add User</Link>
            <Link to="/user/manage">Manage Users</Link>
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
    </section>
        </div>
    )
}

export default AddUser
