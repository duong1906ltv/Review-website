import React from 'react'
import { Link } from 'react-router-dom'

function MiddlePage() {
    return (
        <div>
            <main class="p3-main">
                <section class="p3-section-menu">
                    <div class="p3-menu__area-box">
                        <h2 class="p3-menu__area p3-heading-2">Explore Da Nang</h2>
                    </div>
                    <div class="p3-menu__option-box">
                        <div class="p3-menu__option">
                            <Link to="/Posts" class="p3-menu__link">Review Posts</Link>
                            <i class="far fa-comments p3-menu__icon"></i>
                        </div>
                        <label for="checkbox_toggle" class="p3-menu__checkbox-butotn">
                            <div class="p3-menu__option p3-menu__option--dropdown">
                                <input type="checkbox" id="checkbox_toggle" class="p3-menu__checkbox"/>
                                <a href="#" class="p3-menu__link">Services</a>
                                <i class="fas fa-ellipsis-h p3-menu__icon"></i>
                                <div class="p3-menu__option--sub">
                                    <a href="#" class="p3-menu__link">Food</a>
                                    <a href="#" class="p3-menu__link">Stay</a>
                                    <a href="#" class="p3-menu__link">Do</a>
                                    <a href="#" class="p3-menu__link">See more</a>
                                </div>
                            </div>
                        </label>
                    </div>
                </section>
                <section class="p3-section-area">
                    <div class="p3-area__image-box">
                        <img src="./img/caption.jpg" alt="photo1" class="p3-area__image"/>
                    </div>
                    <div class="p3-area__content-box">
                        <p class="p3-heading">Amid majestic mountains and azure blue waters, a new Vietnam emerges</p>
                        <p class="p3-paragraph">
                            No other city represents Vietnam's boom better than Da Nang. 
                            It's become a gleaming, modern tourist magnet, complete with condos, theme parks, and brand-new resorts. 
                            But the city's earlier charm is still present, including laid-back, friendly locals and incredible street eats. 
                            After you’ve stuffed yourself with a bowl of Mi Quang and Banh Mi Ba Lan, walk it off by exploring the limestone caves and Buddhist grottos of the Marble Mountains. 
                            Make an escape to the surreal mountain resort of Ba Na Hills, where the majestic Golden Bridge welcomes you with open palms.
                        </p>
                    </div>
                </section>
                <section class="p3-section-essentials">
                    <div class="p3-essentials__heading">
                        <h3 class="p3-heading-3">Essential Da Nang</h3>
                    </div>
                    <div class="p3-essential">
                        <div class="p3-essential__intro">
                            <div class="p3-intro__heading"><h4 class="p3-heading-4">Do</h4></div>
                            <p class="p3-intro__content paragraph">Places to see, ways to wander, and signature experiences that define Da Nang.</p>
                            <a href="#" class="p3-intro__link">See all</a>
                        </div>
                        <div class="p3-essential__items">
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/do1.jpg" alt="do1" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">The marble mountains</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">7,774</span>
                                    </div>
                                    <div class="p3-item__address">Geologic Formations, Mountains</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/do2.jpg" alt="do2" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Golden bridge</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">661</span>
                                    </div>
                                    <div class="p3-item__address">Bridges, Points of Interest & Landmarks</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/do3.jpg" alt="do3" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Son Tra mountain</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">792</span>
                                    </div>
                                    <div class="p3-item__address">Mountains</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p3-essential">
                        <div class="p3-essential__intro">
                            <div class="p3-intro__heading"><h4 class="p3-heading-4">Stay </h4></div>
                            <p class="p3-intro__content paragraph">A mix of the charming, iconic, and modern.</p>
                            <a href="#" class="p3-intro__link">See all</a>
                        </div>
                        <div class="p3-essential__items">
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/stay1.jpg" alt="stay1" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Minh boutique</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">230</span>
                                    </div>
                                    <div class="p3-item__price">from $52/night</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/stay2.jpg" alt="stay2" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">A la carte da nang beach</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">1,528</span>
                                    </div>
                                    <div class="p3-item__price">from $61/night</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/stay3.jpg" alt="stay3" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">TIA wellness resort inclusive</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">2,353</span>
                                    </div>
                                    <div class="p3-item__price">from $379/night</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p3-essential">
                        <div class="p3-essential__intro">
                            <div class="p3-intro__heading"><h4 class="p3-heading-4">Eat</h4></div>
                            <p class="p3-intro__content paragraph">Quintessential Da Nang bistros, bars, and beyond.</p>
                            <a href="#" class="p3-intro__link">See all</a>
                        </div>
                        <div class="p3-essential__items">
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/eat1.jpg" alt="eat1" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Banh xeo ba duong</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">658</span>
                                    </div>
                                    <div class="p3-item__address">& - Asian, Vietnamese</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/eat2.jpg" alt="eat2" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Bun cha ca</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">93</span>
                                    </div>
                                    <div class="p3-item__address">$ - Asian, Vietnamese, Soups</div>
                                </div>
                            </div>
                            <div class="p3-essential__item">
                                <a href="#" class="p3-item__link"></a>
                                <div class="p3-item__image-box">
                                    <img src="./img/eat3.jpg" alt="eat3" class="p3-item__image"/>
                                </div>
                                <div class="p3-item__info">
                                    <div class="p3-item__name"><h5 class="p3-heading-5">Com Ga A.Hai</h5></div>
                                    <div class="p3-item__point">
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__dot"></span>
                                        <span class="p3-item__point-num">172</span>
                                    </div>
                                    <div class="p3-item__address">$ - Vietnamese, Asian</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MiddlePage
