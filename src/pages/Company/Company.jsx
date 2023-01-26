import { Trans, withTranslation } from 'react-i18next'
import i18n from 'i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Land from "../../assets/company.png"
import Landger from "../../assets/companyger.png"
import Vision from "../../assets/vision.jpeg"
import Mission from "../../assets/mission.jpeg"
import Murray from "../../assets/murray.jpg"
import Teammember from './Teammember'

function Company() {

    return (
        <div className="company">
            <div className="headpic">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? Landger : Land} />
            </div>
            <div className="container">
                <h1><Trans i18nKey="Comp.Vm"></Trans></h1>
                <div className="line" id="vmLine"></div>
                <div className="vm">
                    <div className="vContainer">
                        <div className="visionDesktop">
                            <img src={Vision} alt="Vision"></img>
                        </div>
                        <div>
                            <div className="text">
                                <h2>Vision</h2>
                                <Trans i18nKey="Comp.Vtext1"></Trans>
                                <br></br><br></br>
                                <Trans i18nKey="Comp.Vtext2"></Trans>
                                <br></br><br></br>
                                <Trans i18nKey="Comp.Vtext3"></Trans>
                            </div>
                        </div>
                        <div className="visionMobile">
                            <img src={Vision} alt="Vision"></img>
                        </div>
                    </div>
                    <div className="mContainer">
                        <div>
                            <div className="text">
                                <h2>Mission</h2>
                                <Trans i18nKey="Comp.Mtext1"></Trans>
                                <br></br><br></br>
                                <Trans i18nKey="Comp.Mtext2"></Trans>
                                <br></br><br></br>
                                <Trans i18nKey="Comp.Mtext3"></Trans>
                            </div>
                        </div>
                        <div id="mPic">
                            <img src={Mission} alt="Mission"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourTeam">
                <div className='container'>
                    <h1><Trans i18nKey="Comp.Out"></Trans></h1>
                    <div className="line" />
                    <div className="team">
                        <Teammember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Ph"></Trans>} 
                            text={<Trans i18nKey="Comp.Pt"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                        <Teammember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Nh"></Trans>} 
                            text={<Trans i18nKey="Comp.Nt"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                        <Teammember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Oh"></Trans>} 
                            text={<Trans i18nKey="Comp.Ot"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                        <Teammember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Hh"></Trans>} 
                            text={<Trans i18nKey="Comp.Ht"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                        <Teammember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Nih"></Trans>} 
                            text={<Trans i18nKey="Comp.Nit"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Company)