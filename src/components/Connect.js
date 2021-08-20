import React from 'react';

export default function ConnectPage(props) {
    return (
        <div className="connect">
            <main className="main-connect">
                <section className="contacts">
                    <h2>{props.dawg.preferred_name}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label><i className="fas fa-phone" aria-label="Phone"></i> Phone Number: </label>
                            <p>{props.dawg.phone}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="far fa-envelope" aria-label="Email"></i> Email Address: </label>
                            <p>{props.dawg.email}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                            <p>{props.dawg.facebook}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                            <p>{props.dawg.instagram}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                            <p>{props.dawg.snapchat}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                            <p>{props.dawg.wechat}</p>
                        </li>
                        <li className="list-group-item">
                            <label><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                            <p>{props.dawg.discord}</p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}