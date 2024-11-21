import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    let footerText = "Default Footer"; // 기본 Footer 텍스트

    // Route에 따라 Footer 텍스트 변경
    if (location.pathname === "/") {
        footerText = "Footer for Main Page";
    } else if (location.pathname === "/page1") {
        footerText = "Footer for Page 1";
    }

    return (
        <footer style={{ backgroundColor: '#f1f1f1', padding: '10px', marginTop: '20px' }}>
            <p>{footerText}</p>
        </footer>
    );
}

export default Footer;
