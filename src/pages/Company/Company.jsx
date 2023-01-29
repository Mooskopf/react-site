import { Trans, withTranslation } from 'react-i18next'
import i18n from 'i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Land from "../../assets/company.png"
import Landger from "../../assets/companyger.png"
import Vision from "../../assets/vision.jpeg"
import Mission from "../../assets/mission.jpeg"
import Murray from "../../assets/murray.jpg"
import TeamMember from './TeamMember.jsx'

function Company() {

    return (
        <div className="company">
            <header className="banner">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? Landger : Land} />
            </header>
            <main>
                <article aria-label="vision-and-mission" className="page-section">
                    <div className="container">
                        <header>
                            <h1><Trans i18nKey="Comp.Vm"></Trans></h1>
                        </header>
                        <div className="line"></div>
                        <div className="vision-mission">
                            <section className="vision-container" aria-label="vision">
                                <div className="vision-desktop">
                                    <img src={Vision} alt="Vision"></img>
                                </div>
                                <div>
                                    <div className="text">
                                        <header>
                                            <h2>Vision</h2>
                                        </header>
                                        <p><Trans i18nKey="Comp.Vtext1"></Trans></p>
                                        <p><Trans i18nKey="Comp.Vtext2"></Trans></p>
                                        <p><Trans i18nKey="Comp.Vtext3"></Trans></p>
                                    </div>
                                </div>
                                <div className="vision-mobile">
                                    <img src={Vision} alt="Vision"></img>
                                </div>
                            </section>
                            <section className="mission-container" aria-label="mission">
                                <div>
                                    <div className="text">
                                        <header>
                                            <h2>Mission</h2>
                                        </header>
                                        <p><Trans i18nKey="Comp.Mtext1"></Trans></p>
                                        <p><Trans i18nKey="Comp.Mtext2"></Trans></p>
                                        <p><Trans i18nKey="Comp.Mtext3"></Trans></p>
                                    </div>
                                </div>
                                <div id="mission-image">
                                    <img src={Mission} alt="Mission"></img>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>
                <article className="grey-section" aria-label="our-team">
                    <div className='container'>
                        <header>
                            <h1><Trans i18nKey="Comp.Out"></Trans></h1>
                        </header>
                        <div className="line" />
                        <div className="team">
                            <TeamMember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Ph"></Trans>}
                                text={<Trans i18nKey="Comp.Pt"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                            <TeamMember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Nh"></Trans>}
                                text={<Trans i18nKey="Comp.Nt"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                            <TeamMember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Oh"></Trans>}
                                text={<Trans i18nKey="Comp.Ot"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                            <TeamMember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Hh"></Trans>}
                                text={<Trans i18nKey="Comp.Ht"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                            <TeamMember name={"Max Mustermann"} title={<Trans i18nKey="Comp.Nih"></Trans>}
                                text={<Trans i18nKey="Comp.Nit"></Trans>} pic={Murray} linkedin={"https://www.linkedin.com/"} />
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default withTranslation()(Company)