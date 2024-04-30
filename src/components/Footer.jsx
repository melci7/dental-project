import logo from "../assets/instagram.svg"
export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-services">
                        <p className="footer-title">Hizmetlerimiz</p>
                        <div className="footer-services-ul">
                            <ul className="footer-list">
                                <li>Diş Dolgusu</li>
                                <li>Kanal Tedavisi</li>
                                <li>Diş Beyazlatma</li>
                                <li>Diş Protezi</li>
                            </ul>
                            <ul className="footer-list">
                                <li>Porselen Diş Kaplama</li>
                                <li>Zirkonyum Diş Kaplama</li>
                                <li>Şeffaf Plak</li>
                                <li>Diş Çekimi</li>
                            </ul>
                        </div>
                        <a target="_blank" href="https://www.google.com/search?client=ms-android-xiaomi-rvo3&sa=X&sca_esv=d0537759349b5ac4&tbm=lcl&sxsrf=ACQVn0-DcAioj1Xv_y43ccZBHBIvy2tkug:1713982216693&q=%C3%96ZEL+D%C4%B0%C5%9E+KL%C4%B0N%C4%B0G%C4%B0,+D%C4%B0%C5%9E+HEK%C4%B0M%C4%B0,+G%C3%9CL%C3%9CSTAN+%C3%87AKAN,+%C3%96ZEL+D%C4%B0%C5%9E+POL%C4%B0KL%C4%B0N%C4%B0G%C4%B0+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA1MjA3M7U0MzE1sDCwMDI3MdrAyPiKMf7wtChXHwWXIxuOzlPw9jmywe_IBvcjG3SgIh6u3kc2-IL47ofn-ByeExzi6KdwuN3R29FPRwFZa4A_UC9Cv0JkflFpbk5i0SJWWtsAAD25WNffAAAA&rldimm=10520765964508082742&hl=tr-TR&ved=2ahUKEwiIh7WpuduFAxXEQ_EDHbNtDEsQ9fQKegQIWxAF&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews&lrd=0x4012715b4611af2d:0x920144e73f863236,3,,,," className="footer-review-us list-item">Bizi Değerlendirin</a>
                    </div>
                    <div className="footer-reach-us">
                        <p className="footer-title">Bize Ulaşın</p>
                        <ul className="footer-list">
                            <a target="_blank" href="https://www.google.com/maps/place/%C3%96ZEL+D%C4%B0%C5%9E+KL%C4%B0N%C4%B0G%C4%B0,+D%C4%B0%C5%9E+HEK%C4%B0M%C4%B0,+G%C3%9CL%C3%9CSTAN+%C3%87AKAN,+%C3%96ZEL+D%C4%B0%C5%9E+POL%C4%B0KL%C4%B0N%C4%B0G%C4%B0/@38.4980463,43.3932124,17z/data=!3m1!4b1!4m6!3m5!1s0x4012715b4611af2d:0x920144e73f863236!8m2!3d38.4980463!4d43.3932124!16s%2Fg%2F11vcz7dw0j?entry=ttu" className="footer-li footer-li-p">
                                <a className="footer-span">Adres:</a>Gençlik, Bahçıvan Mahallesi, Maraş Caddesi, Barlar Sokağı Dilaveroğlu İş Merkezi Kat:3 No:9, 65100 İpekyolu/Van
                            </a>
                            <li className="footer-li footer-li-second">
                                <a className="footer-call" href="tel:+905453293325">
                                    <span className="footer-span">Telefon:</span><a className="footer-call" title="Bizi Arayın">+90 (545) 329 3325</a>

                                </a>
                                <a href="https://www.instagram.com/dt.gulustancakan/" className="footer-logo" target="_blank">
                                    <img src={logo} className="footer-logo-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}