import React from 'react'
import { Link } from 'react-router-dom'

function ManageUser() {
    return (
        <div>
            <section class="nav-sub">
        <a href="../post/manage.html" class="nav__link"><i class="fas fa-table icon"></i>Manage Posts</a>
        <a href="../user/manage.html" class="nav__link nav__link--active"><i class="fas fa-users icon"></i>Manage Users</a>
        <a href="../topic/manage.html" class="nav__link"><i class="fas fa-sitemap icon"></i>Manage Topics</a>
    </section>
    <section class="actions">
        <div class="actions__nav">
            <Link to="/user/add">Add User</Link>
            <Link to="/user/manage" class="nav__link--active">Manage Users</Link>
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
                <tr>
                    <td>1</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Nhien Tran</td>
                    <td>Author</td>
                    <td>
                        <a href="../user/add.html" class="link link-edit">Edit</a>
                        <a href="#" class="link link-delete">Delete</a>
                    </td>
                </tr>
            </table>
        </div>
    </section>
        </div>
    )
}

export default ManageUser
