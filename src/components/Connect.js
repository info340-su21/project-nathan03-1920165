import React from 'react';

export default function ConnectPage() {
    return (
        <div>
            <main className="main-connect">
                <section className="contacts">
                    <form>
                        <h2>Contact Information</h2>
                        <div>
                            <label for="phone">Phone Number:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="email">Email Address:</label>
                            <output></output>
                        </div>
                        <div>
                            <label for="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <output></output>
                        </div>
                        <div>
                            <label for="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <output></output>
                        </div>
                    </form>
                </section>

                <div>
                    <button onclick="window.location.href='index.html';">Go Back</button>
                </div>
            </main>
        </div>
    )
}