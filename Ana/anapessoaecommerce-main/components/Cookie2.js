import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Cookie({ message, textButton }) {
  const [cookies, setCookies] = useState(false)

  function getFormPref() {

  }

  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll("[data-function]"))
      .filter((el) => el.checked)
      .map((el) => el.getAttribute("data-function"));

      const localPref = window.localStorage.setItem('cookies-pref', JSON.stringify(inputs));
      if(localPref) {
        setCookies(true)
      }

    const save = document.querySelector(".btn-cookies");
    save.addEventListener("click", handleSave);
    console.log(inputs)
    //console.log(funtions)
  }, []);
 
  function activateFunctions(pref) {
    //localStorage.setItem('cookies-pref', pref);
    console.log(pref)

    
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref)
  }

  return (
    <>
      {!cookies && (
        <div className="cookie-container cookies-top cookies-light bg-light">
          <div className="cookies-content">
            <p className="msg-cookies">
              {message
                ? message
                : "Este site usa cookies para garantir que você obtenha a melhor experiência."}
            </p>
            <div className="link-cookies">
              <Link href="/">
                <a>Verificar Política Cookies</a>
              </Link>
            </div>
            <button className="btn btn-cookies" onClick={() =>setCookies(prev => !prev)} >
              {textButton ? textButton : "OK"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
