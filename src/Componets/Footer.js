import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* footer */}
                <footer>
                    <div className="container">
                        <p>© Your Website 2018. All Rights Reserved.</p>
                        <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#tam">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#tam">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#tam">FAQ</a>
                        </li>
                        </ul>
                    </div>
                </footer>
                {/* end menu */}

            </div>
        );
    }
}

export default Footer;