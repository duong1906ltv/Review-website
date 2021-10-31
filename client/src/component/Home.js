import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div class = "container-adminpage">
                <header class="header">
                    <div class="logo-text">
                        <h1 class="heading-1">ベトナム旅行</h1>
                    </div>
                    <a href="#" class="account"><i class="far fa-user icon"></i>Admin<i class="fas fa-angle-down icon"></i></a>
                </header>
            </div>
                
        );
    }
}

export default Home;