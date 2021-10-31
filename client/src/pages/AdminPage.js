import React from 'react'
import { Link, BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Users from '../component/Users'
import Home from '../component/Home'

function AdminPage() {
    return (
        <body class="container">
        <header class="header">
            <div class="logo-text">
                <h1 class="heading-1">ベトナム旅行</h1>
            </div>
            <a href="#" class="account"><i class="far fa-user icon"></i>Admin<i class="fas fa-angle-down icon"></i></a>
        </header>
        <section class="nav-sub">
            <a href="./posts.html#post-manage" class="nav__link"><i class="fas fa-table icon"></i>Manage Posts</a>
            <a href="https://www.google.com/"class="nav__link"><i class="fas fa-users icon"></i>Manage Users</a>
            <a href="./topics.html" class="nav__link"><i class="fas fa-sitemap icon"></i>Manage Topics</a>
        </section>
        <section class="actions">
            Actions
        </section>
        <footer class="footer">
            Thank you!!
        </footer>
    </body>
    )
}

export default AdminPage
