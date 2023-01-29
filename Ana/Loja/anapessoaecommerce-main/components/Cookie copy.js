import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";
//import { setCookie, parseCookies } from 'nookies';

export default function CookieRun({initialRememberValue = true}) {
  const [rememberMe, setRememberMe] = useState(() => 
  JSON.parse(initialRememberValue))

  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  const handleAcceptCookies = useCallback(() => {
    JSON.parse(initialRememberValue)

    setRememberMe(true)
  })


  return (
    <>
    {/* {!rememberMe == false && ( */}
        <div className="cookie-container cookies-top cookies-light bg-light">
          <div className="cookies-content">
            <p className="msg-cookies">
              "Este site usa cookies para garantir que você obtenha a melhor experiência."
            </p>
            <div className="link-cookies">
              <Link href="/">
                <a>Verificar Política Cookies</a>
              </Link>
            </div>
            <div class="cookies-pref">
        <label><input 
        type="checkbox" 
        value={rememberMe} 
        checked={rememberMe} 
        onChange={e => setRememberMe(e.target.checked)}
            />Análise de Uso</label>
        {/* <label><input type="checkbox" checked onChange={marketing} />Marketing</label> */}
      </div>
            <button className="btn btn-cookies" onClick={handleAcceptCookies} >OK
            </button>
          </div>
        </div>
     {/* )}  */}
    </>
  );
}
CookieRun.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.rememberMe
  };
};
// export async function getServerSideProps(context) {
//   const cookies = parseCookies(context)

//   console.log('[cookies]', cookies, cookies.USER_THEME)

//   return {
//     props: {
//       msg: '[SERVER] Test com getServerSideProps',
//       USER_THEME: cookies.USER_THEME,
//     }
//   }
// }