import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CookiesProvider, useCookies } from 'react-cookie';
import CookieModal from '../components/CookieConsentWithTrackers';
// import Container from '../components/container'

const defaultCookieSettings = {maraketing: false, targeting: false, advertisement: false, bareminimum: true};

export default function Cookie() {

  const [cookies, setCookie] = useCookies(['test-cookie']);
  const [showCookieModal, setCookieModal] = useState(true);
  const [cookiesRun, setCookiesRun] = useState(false)

  useEffect(() => {
    if (cookies['consent-cookie-configured'] === 'yes') {
      // The cookie settings have already been configured. So don't show the modal
      setCookieModal(false);
    }

    setCookiesRun(true)
    // console.log('cookies: ', cookies);
    // setCookie('test-cookie', 'cookie-value', { path: '/' });
  }, []);
 
    function onCookieSet(cookiesToSet=defaultCookieSettings) {
      // In case of cancel button clicked, this gets called with the default cookies
  
      for (let prop of Object.entries(cookiesToSet)) {
        let value = prop[1] ? 'yes' : 'no';
        setCookie(`consent-cookie-${prop[0]}`, value);
      }
      
  
      // mark that cookies have been set
      setCookie('consent-cookie-configured', 'yes');
  
      // hide the modal this one time
      setCookieModal(false);

    }

  return (
    <>
      <CookiesProvider>

        

            {showCookieModal && <CookieModal cookieSettings={defaultCookieSettings} onCookieSet={onCookieSet}/>}
    
      

        </CookiesProvider>
    </>
  );
}
