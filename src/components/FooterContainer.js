import React from 'react';
import {FacebookOutlined, InstagramOutlined} from '@ant-design/icons';

const FooterContainer = props => (
    <div>
        <footer>
            <div className="grid-container">
                <div className="grid-item">
                    <p style={{fontWeight: 'bold'}}>
                        Shop Now
                    </p>
                    <a href="#" style={{color: "#868686"}}>Menswear</a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}> Women wear </a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}> Kids wear </a>
                </div>
                <div className="grid-item">
                    <p style={{fontWeight: 'bold'}}>
                        Company
                    </p>
                    <a href="#" style={{color: "#868686"}}> Blog </a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}> Contact Us </a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}> Careers </a>
                </div>
                <div className="grid-item">
                    <p style={{fontWeight: 'bold'}}>
                        Partners
                    </p>
                    <a href="#" style={{color: "#868686"}}> DW Apparel </a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}> DW Holdings </a>
                </div>
                <div className="grid-item">
                    <p style={{fontWeight: 'bold'}}>
                        Link with Us
                    </p>
                    <a href="#" style={{color: "#868686"}}>
                        <FacebookOutlined/>
                    </a>
                    <br/>
                    <a href="#" style={{color: "#868686"}}>
                        <InstagramOutlined/>
                    </a>
                </div>
            </div>
        </footer>
    </div>
);

export default FooterContainer;