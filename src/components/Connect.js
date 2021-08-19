import React from 'react';
import { Link } from 'react-router-dom';

export default function ConnectPage(props) {
    return (
        <div className="connect">
            <main className="main-connect">
                <section className="contacts">
                    <form>
                        <h2>Contact Information</h2>
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <p>{props.dawg.phone}</p>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <p>{props.dawg.email}</p>
                        </div>
                        <div>
                            <label htmlFor="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <p>{props.dawg.facebook}</p>
                        </div>
                        <div>
                            <label htmlFor="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <p>{props.dawg.instagram}</p>
                        </div>
                        <div>
                            <label htmlFor="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <p>{props.dawg.snapchat}</p>
                        </div>
                        <div>
                            <label htmlFor="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <p>{props.dawg.wechat}</p>
                        </div>
                        <div>
                            <label htmlFor="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <p>{props.dawg.discord}</p>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}