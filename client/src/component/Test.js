import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Test extends Component {
    render() {
        return (
            <div class = "container-adminpage">
                <section class="nav-sub">
                    <a href="./posts.html#post-manage" class="nav__link"><i class="fas fa-table icon"></i>Manage Posts</a>
                    <Link to="/Users" class="nav__link"><i class="fas fa-users icon"></i>Manage Users</Link>
                    <a href="./topics.html" class="nav__link"><i class="fas fa-sitemap icon"></i>Manage Topics</a>
                </section>
                <section class="actions">
                    Actions
                </section>
            </div>
        );
    }
}

export default Test;