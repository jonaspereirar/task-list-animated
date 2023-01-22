import React, { useState, useEffect } from "react";
import Link from "next/link";

import { CookiesProvider, useCookies } from 'react-cookie';
import CookieModal from '../components/CookieConsentWithTrackers';

const defaultCookieSettings = {maraketing: true, targeting: true, advertisement: true, bareminimum: true};

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
    {cookiesRun && cookies['consent-cookie-configured'] !== 'yes' && (
      <CookiesProvider>
        <div className="cookie-container cookies-top cookies-light bg-light">
          <div className="cookies-content">
            <p className="msg-cookies">
              Este site usa cookies para garantir que você obtenha a melhor experiência.
            </p>
            <div className="link-cookies">
              <Link href="/">
                <a onClick={() =>setCookieModal(prev => !prev)}>Verificar Política de Cookies
                  {!showCookieModal && <CookieModal cookieSettings={defaultCookieSettings} onCookieSet={onCookieSet}/>}</a>
              </Link>
            </div>
            <button className="btn btn-cookies" onClick={() => {setCookiesRun(prev => !prev) }} >

              OK
            </button>
          </div>
        </div>
        </CookiesProvider>
        )} 
    </>
  );
}
