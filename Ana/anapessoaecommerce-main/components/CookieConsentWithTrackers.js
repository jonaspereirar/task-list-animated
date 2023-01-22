import { useState } from 'react';

const template = {
    main: {
      header: 'Politica de cookies',
      content: 'Gerencie suas escolhas ativando ou desativando as opções de consentimento nas finalidades listadas abaixo. Ajustaremos as configurações com base em suas escolhas.'
    },
    categories: [
      {
        id: 'maraketing',
        header: 'Marketing',
        content: 'Estes cookies nos ajudam a acompanhar suas preferências para enviar somente os anúncios de seu interesse e avaliar a eficácia dos nossos anúncios através do monitoramento das taxas de abertura e conversões. ',
        checked: false
      },
      {
        id: 'targeting',
        header: 'Anúncios',
        content: 'Permitirá exibir  anúncios  para você  com base em tópicos relevantes que lhe interessam.',
        checked: false
      },
      {
        id: 'advertisement',
        header: 'Google analytics',
        content: 'Estes cookies nos ajudam a determinar e entender como nossos usuários interagem e utilizam nossa plataforma.',
        checked: false
      },
      {
        id: 'bareminimum',
        header: 'Essenciais',
        content: 'Estes cookies são estritamente necessários para acessar e utilizar nossa plataforma. Eles fornecem as funções necessárias para garantir o desempenho, a segurança e a funcionalidade de nossa plataforma. Estes cookies não podem ser desativados.',
        checked: false
      }
    ]
  }

function CategoryElement({category, checked, onTrackerChanged}) {
    return (
        <>
        <div className="heading row-cookie">
            <h3>{category.header}</h3>
            {category.id == 'bareminimum' ? 
            <Toggle checked={checked = true} onTrackerChanged={onTrackerChanged} id={category.id} /> : 
            <Toggle checked={checked} onTrackerChanged={onTrackerChanged} id={category.id} />}
        </div>
        <div className="content">
            {category.content}
        </div>
        </>
    )
}
  
export default function CookieModal({cookieSettings, onCookieSet}) {
    const policy = template.main;
    const categories = template.categories;

    const [trackers, setTrackers] = useState(cookieSettings);

    function onTrackerChanged(trackerId) {
        const currentValue = trackers[trackerId];
        
        setTrackers({...trackers, ...{[trackerId]: !currentValue}});

        
    }

    return (
        <div id="js-cookie-box" className="cookie-box cookie-box--hide">
        <div className="heading row-cookie">
            <h2>{policy.header}</h2>
        </div>
        <div className="content">
            {policy.content}
        </div>
        <br />
        <hr />
        <div className="categories">
            {categories.map((category) => 
                <CategoryElement key={category.id} category={category} checked={trackers[category.id]} onTrackerChanged={onTrackerChanged}/>         
            )}
        </div>
        <div className="footer">
            <span id="js-cookie-button" className="cookie-button" onClick={() => onCookieSet(trackers)}>Accept</span>
            <span id="js-cookie-button" className="cookie-button cancel-button" onClick={() => onCookieSet()}>Cancel</span>
        </div>
        </div>
    )
}
  
// -------------------------------------------------------------------------------
// This is the toggle switch which we are creating custom
function Toggle({checked, onTrackerChanged, id}) {
    return (
        <>
        <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => onTrackerChanged(id)}/>
            <span className="slider round"></span>
        </label>
        </>
    )
}