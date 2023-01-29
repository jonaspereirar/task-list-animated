import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Deseja mais novidades?</h2>
              <p>Cadastre-se gratuitamente e receba as últimas novidades.</p>
              <form className="form-section">
                <input placeholder="Seu Email..." name="email" type="email" />
                <input value="Sim. Eu quero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
