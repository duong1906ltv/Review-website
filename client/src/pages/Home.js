import React from 'react'

function Home() {
    return (
        <div>
            <section class="section-about">
            <div class="about__photo">
                <img src="https://docs.google.com/uc?id=13-oblH7Hcc0VLfOMxS6_UGxa1A7uG3fE" alt="intro-photo" class="photo"/>
            </div>
            <div class="about__search">
                <input type="search" placeholder="検索" class="search-bar"/>
                <div class="about-text">
                    <p class="paragraph">ベトナムはゆっくり有名な場所になっています</p>
                </div>  
            </div>
        </section>
        <section class="section-intro">
            <h2 class="heading-secondary">
                エクスプローベトナム
            </h2>
            <div class="region">
                <div class="region__text">
                    <h3 class="heading-tertiary">
                        北部
                    </h3>
                    <p class="paragraph">
                        これはデスクリプションです
                    </p>
                </div>
                <div class="region__photos">
                    <img src="https://docs.google.com/uc?id=1wTrypinBQ8KkregkGP5z67q4X9ZZEa8v" alt="photo1" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=1YWm0pgt5NmK0jdTtrxtfOQP4VmbMma6M" alt="photo2" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=1kDzTBrZSbKyJZ-9CNEwbYBBKxhj_IF1m" alt="photo3" class="composition__photo"/>
                </div>
            </div>
            <div class="region">
                <div class="region__text">
                    <h3 class="heading-tertiary">
                        中部 
                    </h3>
                    <p class="paragraph">
                        これはデスクリプションです
                    </p>
                </div>
                <div class="region__photos">
                    <img src="https://docs.google.com/uc?id=1rbp0W6S1ZI5rHKeVitybBrrAYVg8IybU" alt="photo4" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=1Wamm_AFWICck3xgWCNrDFhUtg-WphlXQ" alt="photo5" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=1wTrypinBQ8KkregkGP5z67q4X9ZZEa8v" alt="photo6" class="composition__photo"/>
                </div>
            </div>
            <div class="region">
                <div class="region__text">
                    <h3 class="heading-tertiary">
                        南部
                    </h3>
                    <p class="paragraph">
                        これはデスクリプションです
                    </p>
                </div>
                <div class="region__photos">
                    <img src="https://docs.google.com/uc?id=1ra1RUpkjAOyvz9leD1RyZFun59Xo9PeK" alt="photo7" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=13ChrGKVbJmAHKPpfde_yhGEE3AcgCknZ" alt="photo8" class="composition__photo"/>
                    <img src="https://docs.google.com/uc?id=1VbjQV_yZ2BrfBWiowtnMK35SHqvX9Ef6" alt="photo9" class="composition__photo"/>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Home
