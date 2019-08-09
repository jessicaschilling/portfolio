import React, { Component } from 'react';
require('bootstrap');


class App extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (

      <div>
      <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="index.html">Jessica Schilling</a>
        <div className="collapse navbar-collapse justify-content-md-end" id="navigationBar">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#dj">DJ</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>




    <section className="site-hero" style={{backgroundImage: "url(" + "img/portrait-header.jpg" + ")"}} id="home">
      <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
          <div className="col text-center">
            <h1 className="site-heading site-animate">Design strategist, UX practitioner, information architect, DJ.</h1>
            <h2 className="site-subheading mb-4 site-animate">Product strategy, end-to-end user experience, front-end development, and visual design. Plus, I play music for dancers and others. </h2>
          </div>
        </div>
      </div>
    </section>


    <section className="site-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 pr-lg-5 mb-4 mb-lg-0">
            <img src="img/portrait-about.png" alt="Jessica" className="img-fluid"/>
          </div>
          <div className="col-lg-5 pl-lg-5">
            <div className="section-heading">
              <h2>Hi. I'm <strong>Jessica Schilling</strong>.</h2>
            </div>
            <p className="lead">Based in Boston and Boulder, I'm a user experience strategist, product designer and information architect with a proven track record in both strategic and tactical execution for companies ranging from small startups to multinational corporations.</p>
            <p>
              <a href="http://www.jessicaschilling.com/jessica-schilling.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">View my r&eacute;sum&eacute;</a>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="site-section bg-light"  id="services">
      <div className="container">

        <div className="row mb-4">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>What I can <strong>do for you</strong></h2>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">map</span>
              </span>
              <h3 className="mb-4">User experience strategy</h3>
              <p>Customer-focused, data-driven solutions drawing from nearly 20 years in UX, product design, marketing, editorial and more.</p>
              <div className="tools"><span className="material-icons">work_outline</span> Product roadmaps, design systems, competitive analysis, omnichannel strategy</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">palette</span>
              </span>
              <h3 className="mb-4">Product design</h3>
              <p>End-to-end design expertise from concept validation and initial information architecture to high-fidelity, release-ready deliverables.</p>
              <div className="tools"><span className="material-icons">work_outline</span> Sketch, InVision, Photoshop, Illustrator, InDesign, Adobe Experience Design</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">code</span>
              </span>
              <h3 className="mb-4">Front-end development</h3>
              <p>Translating designs into elegant, responsive, cross-browser HTML, CSS and JavaScript &mdash; or simply designing directly in code.</p>
              <div className="tools"><span className="material-icons">work_outline</span> HTML, CSS, JavaScript, Node, React, Drupal, Git, Scrum Agile, Scaled Agile</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">visibility</span>
              </span>
              <h3 className="mb-4">Design thinking</h3>
              <p>Successfully integrating design-driven best practices through coaching, side-by-side creation, and everything in between.</p>
              <div className="tools"><span className="material-icons">work_outline</span> Design sprints, co-creation sessions, executive training, train-the-trainers workshops</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">face</span>
              </span>
              <h3 className="mb-4">UX research &amp; testing</h3>
              <p>The right research and testing methodologies at the right time, ensuring continuous improvement before, during, and after launch.</p>
              <div className="tools"><span className="material-icons">work_outline</span> Personas, competitive research, focus groups, surveys, interviews, qual/quant tests</div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 text-center mb-4">
            <div className="site-service-item site-animate" data-animate-effect="fadeIn">
              <span className="icon">
                <span className="material-icons">assignment</span>
              </span>
              <h3 className="mb-4">Content strategy</h3>
              <p>Thoughtfully crafted content on point with your brand and audience &mdash; or even a whole new personality and voice for your brand.</p>
              <div className="tools"><span className="material-icons">work_outline</span> Style guides, documentation, whitepapers, product and marketing copy, editorial</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="site-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center col-md-12">
              <h2>Selected <strong>portfolio</strong></h2>
            </div>
        </div>
        <div className="filters">
            <ul>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".code">Code</li>
                <li data-filter=".design">Design</li>
                <li data-filter=".testing">Testing</li>
                <li data-filter=".strategy">Strategy</li>
            </ul>
        </div>

        <div className="filters-content">
            <div className="row grid">
{/*
            <div className="single-portfolio col-sm-4 all strategy design code testing">
              <div className="relative">
                <div className="thumb">
                   <img className="image img-fluid" src="img/port-home-certainly.png" alt="Certainly Insurance" data-toggle="modal" data-target="#certainlyModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#certainlyModal">Certainly Insurance</h4>
                <div className="cat">Strategy, design, code, testing</div>
              </div>
            </div>
            <div className="modal fade" id="certainlyModal" tabIndex="-1" role="dialog" aria-labelledby="certainlyModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="certainlyModalLabel">Certainly Insurance</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-certainly.png" alt="Certainly Insurance"/></div>
                  <div className="modal-body">
                    <h5>Strategy, design, code and testing</h5>
                    <p>As design director for a new online-only insurance brand powered by a major player in the legacy insurance market, my role in the development and release of <a href="https://www.getcertainly" target="_blank" rel="noopener noreferrer">Certainly insurance</a> has run the gamut of user experience work &mdash; everything from creating a design system from scratch to directly implementing it in code; from conducting competitive analysis to incorporating those learnings into architecture and flows; and much more. As the Certainly product continues to grow, so does the design scope, making it essential to establish clean working methods suitable for simultaneous work by multiple team members and transparent workflows for documentation &mdash; beginning with initial concept validation and focus group work all the way through to responsibly maintaining post-release backlogs for new features and tweaks.</p>
                  </div>
                </div>
              </div>
            </div>
*/}
            <div className="single-portfolio col-sm-4 all strategy design">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-taxforms.png" alt="Fidelity.com tax forms" data-toggle="modal" data-target="#taxformsModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#taxformsModal">Fidelity.com tax forms</h4>
                <div className="cat">Strategy, design</div>
              </div>
            </div>
            <div className="modal fade" id="taxformsModal" tabIndex="-1" role="dialog" aria-labelledby="taxformsModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="taxformsModalLabel">Fidelity.com tax forms</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-taxforms.png" alt="Fidelity.com tax forms"/></div>
                  <div className="modal-body">
                    <h5>Strategy and design</h5>
                    <p>As part of an omnichannel experience designed to increase customer satisfaction while lowering phone volumes, the redesigned tax forms section of Fidelity.com  addressed one of the business' top three phone drivers: <em>When will my tax forms be available, and where can I find them?</em>  Although there wasn’t a vast amount of room for creative exploration as part of the exercise &mdash; the new experience needed to dovetail tightly with a legacy UI that was itself slated for future changes, requiring a highly extensible and modular approach &mdash; it presented a unique opportunity to address some of the root causes in the overall information architecture of how customers received all their online documents. In the end, a solution based on revised IA, a number of subtle visual design cues, and an approach with room to grow in the developing Fidelity design language saved the business nearly $2.5 million in deferred calls during the first “tax season” after launch.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all strategy design">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-bestloved.png" alt="Best Loved Hotels guidebook" data-toggle="modal" data-target="#bestlovedModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#bestlovedModal">Best Loved Hotels</h4>
                <div className="cat">Strategy, design</div>
              </div>
            </div>
            <div className="modal fade" id="bestlovedModal" tabIndex="-1" role="dialog" aria-labelledby="bestlovedModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="bestlovedModalLabel">Best Loved Hotels</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-bestloved.png" alt="Best Loved Hotels guidebook"/></div>
                  <div className="modal-body">
                    <h5>Strategy and design</h5>
                    <p>As product owner and managing editor for the Best Loved Hotels brand, I was responsible for bringing an annual print hotel guidebook and its supplemental editions into the next generation of an online presence dictated by the needs of the rapidly evolving travel trade. To meet the demands of an increasingly online luxury travel industry, I created and implemented an omnichannel design system spanning annual print, quarterly newsletters, sales materials and in-room marketing, as well as architecting and working with developers on a new, live-updated website linked with XML-driven automated updates to the content of the print edition. In the new system’s first year after launch, we were able to streamline the production schedule enough to significantly expand the selling season, ensure continuity across media, and bring update-driven errors to our publications down by an order of magnitude.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all strategy design code testing">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-cuboulder.png" alt="College of Engineering rebrand" data-toggle="modal" data-target="#cuboulderModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#cuboulderModal">College site rebrand</h4>
                <div className="cat">Strategy, design, code, testing</div>
              </div>
            </div>
            <div className="modal fade" id="cuboulderModal" tabIndex="-1" role="dialog" aria-labelledby="cuboulderModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="cuboulderModalLabel">College of Engineering rebrand</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-cuboulder.png" alt="College of Engineering rebrand"/></div>
                  <div className="modal-body">
                    <h5>Strategy, design, code and testing</h5>
                    <p>As part of a larger effort to bring the web presence for the entire three-campus University of Colorado system under a unified design language and tech stack, my team at the College of Engineering and Applied Science joined the vanguard as a proof-of-concept implementation of the Drupal content management system. From a strategic standpoint, clean architecture was absolutely critical &mdash; both from a software and information architecture perspective &mdash; as many aspects of the college’s site were slated for reuse across the CU system. Collaborating closely with other visual designers and developers, as well as marketing staff, I was able to ensure that the project was released on time for key academic-year deadlines, as well as providing guidance on future Drupal implementations based on my group’s learnings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all strategy design code">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-criterion.png" alt="Trade journal rebrand/relaunch" data-toggle="modal" data-target="#criterionModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#criterionModal">Trade journal relaunch</h4>
                <div className="cat">Strategy, design, code</div>
              </div>
            </div>
            <div className="modal fade" id="criterionModal" tabIndex="-1" role="dialog" aria-labelledby="criterionModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="criterionModalLabel">Trade journal rebrand/relaunch</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-criterion.png" alt="Trade journal rebrand/relaunch"/></div>
                  <div className="modal-body">
                    <h5>Strategy, design and code</h5>
                    <p>When Criterion Publishing’s European Cleaning Journal purchased an analogous industry publication targeted for the Asian market, it presented a unique opportunity to rebrand and relaunch both publications’ print and online products with a unified, streamlined voice. As product owner, designer and editor, I created and implemented a new design system for both print editions &mdash; accounting for Chinese-language considerations for the Asian edition and multiple translations for the European edition &mdash; as well as architected, coded and released a CMS-driven online version of each publication that enabled non-technical members of staff to easily upload and edit content. As a result, the company was able to substantially increase selling season for each edition of the magazines, as well as drive additional advertisers to the new websites.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all strategy design code">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-totalhomescore.png" alt="Total Home Score" data-toggle="modal" data-target="#totalhomescoreModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#totalhomescoreModal">Total Home Score</h4>
                <div className="cat">Strategy, design, code</div>
              </div>
            </div>
            <div className="modal fade" id="totalhomescoreModal" tabIndex="-1" role="dialog" aria-labelledby="totalhomescoreModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="totalhomescoreModalLabel">Total Home Score</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-totalhomescore.png" alt="Total Home Score"/></div>
                  <div className="modal-body">
                    <h5>Strategy, design and code</h5>
                    <p>As a data-driven product, the Shine API Total Home Score &mdash; a big-data-driven engine for insights on neighborhood livability across the United States &mdash; required a certain amount of imagination in order to visualize true product potential. To solve this problem, my team at Solaria Labs created a <a href="https://www.totalhomescore.com" target="_blank" rel="noopener noreferrer">Total Home Score proof-of-concept website</a> enabling potential Shine API users to see the score engine’s power in their own neighborhoods. With visual design borrowing cues from popular real estate search sites, the website effectively demonstrated to prospects Total Home Score’s advantages in predicting factors like quiet, road safety, and proximity to entertainment and amenities. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all design testing">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-godaddy.png" alt="Go Daddy product page" data-toggle="modal" data-target="#godaddyModal"/>
                 </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#godaddyModal">GoDaddy.com purchase path</h4>
                <div className="cat">Design, testing</div>
              </div>
            </div>
            <div className="modal fade" id="godaddyModal" tabIndex="-1" role="dialog" aria-labelledby="godaddyModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="godaddyModalLabel">GoDaddy.com purchase path &amp; email</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-godaddy.png" alt="Go Daddy product page"/></div>
                  <div className="modal-body">
                    <h5>Design and testing</h5>
                    <p>As part of the team responsible for GoDaddy.com’s brand transformation from a rough-and-tumble domain registrar to a billion-dollar online services corporation, I helped shepherd the site through two full redesign efforts, including a dramatic reworking of the overall purchase path to take advantage of personalized cross-sell and upsell opportunities. Favorite projects included creating a core icon language for the site, ensuring continuity between web, social, email and print communications, and taking advantage of the qualitative and quantitative testing opportunities available to a brand with millions of users across the globe.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all design code testing">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-divorceplanner.png" alt="Financial planning tool" data-toggle="modal" data-target="#divorceplannerModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#divorceplannerModal">Divorce financial planner</h4>
                <div className="cat">Design, code, testing</div>
              </div>
            </div>
            <div className="modal fade" id="divorceplannerModal" tabIndex="-1" role="dialog" aria-labelledby="divorceplannerModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="divorceplannerModalLabel">Financial planning tool</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-divorceplanner.png" alt="Financial planning tool"/></div>
                  <div className="modal-body">
                    <h5>Design, code and testing</h5>
                    <p>Driven by the pain points experienced by one financial services advisor as she navigated the difficult financial terrain of a mid-life divorce, I was tasked with research, rapid prototyping, and consumer testing for a questionnaire-based tool for helping others in similar situations. Over the course of a three-month, iterative design and testing exploration, I created a simple, intuitive planner that made the most of a highly branched survey structure to ask only the questions relevant to each respondent &mdash; and, in return, give them a summary document they could use with a lawyer or other advisor to build a personalized strategy for making divorce less painful.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-portfolio col-sm-4 all design code testing">
              <div className="relative">
                <div className="thumb">
                  <div className="overlay "></div>
                   <img className="image img-fluid" src="img/port-home-goalbasedlife.png" alt="Goal-based life insurance product" data-toggle="modal" data-target="#goalbasedlifeModal"/>
                </div>
              </div>
              <div className="p-inner">
                  <h4 data-toggle="modal" data-target="#goalbasedlifeModal">Goal-based life insurance</h4>
                <div className="cat">Design, code, testing</div>
              </div>
            </div>
            <div className="modal fade" id="goalbasedlifeModal" tabIndex="-1" role="dialog" aria-labelledby="goalbasedlifeModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="goalbasedlifeModalLabel">Goal-based life insurance product</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-image"><img className="image img-fluid" src="img/port-detail-goalbasedlife.png" alt="Goal-based life insurance product"/></div>
                  <div className="modal-body">
                    <h5>Design, code and testing</h5>
                    <p>This proof-of-concept web app for a potential life insurance product was created to assess consumer understanding of &mdash; and desire for &mdash; life insurance policies generated around customers’ life goals rather than simple monetary payouts. As part of a rapid prototyping team, I created a questionnaire-based flow to assess respondents’ ambitions around raising children, owning one or more homes, and determining when to retire, which were then analyzed and returned to the user as a personalized life insurance plan complete with chart-based illustrations of when such a plan could do them the most good. Specific work on the project included information architecture, visual design, CSS/HTML/React.js coding, content strategy, consumer interviews, and quantitative testing.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="site-section bg-light ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="section-heading text-center">
              <h2>Previous <strong>experience</strong></h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2019-present</span>
              <h4>User experience lead</h4>
              <p>Protocol Labs</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2017-2019</span>
              <h4>Senior product designer</h4>
              <p>Solaria Labs at Liberty Mutual</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2014-2016</span>
              <h4>UX &amp; communications</h4>
              <p>Harvard University Information Technology</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2007-2010</span>
              <h4>Web designer &amp; UX specialist</h4>
              <p>Go Daddy</p>
            </div>

          </div>

          <div className="col-md-6">

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2016-2017</span>
              <h4>Information architect &amp; design lead</h4>
              <p>Fidelity Investments</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2011-2014</span>
              <h4>UX, design &amp; communications</h4>
              <p>University of Colorado Boulder</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2003-2005</span>
              <h4>Managing editor &amp; product owner</h4>
              <p>World Media Publishing Ltd</p>
            </div>

            <div className="experience-item mb-4">
              <span className="date"><span className="icon-calendar"></span> 2005-2006</span>
              <h4>Brand manager &amp; UX strategist</h4>
              <p>Inspired Signage</p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="site-section" id="dj">
      <div className="container">
        <div className="row mb-4 align-items-center">
          <div className="col-lg-7 pr-lg-5 mb-4 mb-lg-0">
            <img src="img/portrait-dj.jpg" alt="Person wearing tango shoes holding a boom box" className="img-fluid"/>
          </div>
          <div className="col-lg-5 pl-lg-5">
            <div className="section-heading">
              <h2>I also <strong>play music for people.</strong></h2>
            </div>
            <p className="lead">Since 2010, I've had the privilege to DJ both traditional and alternative Argentine tango music at a wide variety of festivals, marathons, encuentros and milongas <a href="https://www.google.com/maps/@39.5705631,-107.7392191,4z/data=!3m1!4b1!4m2!6m1!1s1HV_roDvanRxxzTWYDLujO07aURE" target="_blank" rel="noopener noreferrer">across North America</a>.</p>
            <p className="lead">I'm also an experienced radio DJ and announcer with expertise across a number of formats, including classical, jazz, world, classic rock, independent pop/electronic and freeform.</p>
            <p>
              <a href="mailto:mail@jessicaschilling.com?subject=DJ booking enquiry" className="btn btn-primary px-4 py-2 smoothscroll">Booking</a>
              <a href="http://www.jessicaschilling.com/jessicaschilling-djbio.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-4 py-2">Bio</a>
              <a href="http://www.jessicaschilling.com/jessicaschilling-djphotos.zip" className="btn btn-secondary px-4 py-2">Pics</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="section-heading text-center">
              <h2>Selected <strong>DJ history</strong></h2>
            </div>
          </div>
        </div>

        <div className="container-fluid content-row">
          <div className="row">
            <div className="col-sm-12 col-lg-4 mb-4">
              <div className="card h-100 dj-history">
                <img src="img/dj-festivals.png" alt="Tango dancers" className="img-fluid"/>
                <div className="dj-history-text">
                  <h3>Festivals &amp; marathons</h3>
                  <ul>
                    <li className="site-check">LA Tango Marathon 2017-18</li>
                    <li className="site-check">ValenTango 2015-19</li>
                    <li className="site-check">Tucson Tango Festival 2019</li>
                    <li className="site-check">San Diego Tango Festival 2016 &amp; 18</li>
                    <li className="site-check">BOSthón 2016-18</li>
                    <li className="site-check">Albuquerque Tango Festival 2015-18</li>
                    <li className="site-check">Denver Tango Festival 2013-16</li>
                    <li className="site-check">Burning Tango 2013-14 &amp; 17-19</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 mb-4">
              <div className="card h-100 dj-history">
                <img src="img/dj-encuentros.png" alt="Tango dancing couple" className="img-fluid"/>
                <div className="dj-history-text">
                  <h3>Encuentros &amp; workshops</h3>
                  <ul>
                    <li className="site-check">Two Moon Tango Encuentro 2017-18</li>
                    <li className="site-check">Salida Casa Tango 2014 &amp; 17</li>
                    <li className="site-check">Haw River Tango Encuentro 2017</li>
                    <li className="site-check">Stowe Tango Music Festival 2016-18</li>
                    <li className="site-check">Port Townsend Encuentro 2015</li>
                    <li className="site-check">Tango in Thomaston 2014-16</li>
                    <li className="site-check">Tango Social Club Montréal 2017</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-4 mb-4">
              <div className="card h-100 dj-history">
                <img src="img/dj-broadcast.png" alt="Radio control board" className="img-fluid"/>
                <div className="dj-history-text">
                  <h3>Radio &amp; broadcast</h3>
                  <ul>
                    <li className="site-check"><a href="https://www.mixcloud.com/irisberkeley" target="_blank" rel="noopener noreferrer">Interface Message Processor</a>, Mixcloud, monthly</li>
                    <li className="site-check"><a href="http://www.afterfm.com/index.cfm/fuseaction/shows.permalink/showID/17/showDate/2019-07-07/showName/Sleepless%20Nights/kgnuShowID/170499" target="_blank" rel="noopener noreferrer">Sleepless Nights</a>, KGNU-FM, July 2019</li>
                    <li className="site-check"><a href="http://www.afterfm.com/index.cfm/fuseaction/shows.permalink/showID/17/showDate/2018-10-23/showName/Sleepless%20Nights/kgnuShowID/151541" target="_blank" rel="noopener noreferrer">Sleepless Nights</a>, KGNU-FM, October 2018</li>
                    <li className="site-check"><a href="http://www.afterfm.com/index.cfm/fuseaction/shows.permalink/showID/17/showDate/2017-10-22/showName/Sleepless%20Nights/kgnuShowID/126499" target="_blank" rel="noopener noreferrer">Sleepless Nights</a>, KGNU-FM, October 2017</li>
                    <li className="site-check"><a href="http://www.afterfm.com/index.cfm/fuseaction/shows.permalink/showID/31/showDate/2017-07-19/showName/Musica%20Mundi/kgnuShowID/120754" target="_blank" rel="noopener noreferrer">Musica Mundi</a>, KGNU-FM, July 2017</li>
                    <li className="site-check"><a href="http://www.afterfm.com/index.cfm/fuseaction/shows.permalink/showID/27/showDate/2016-07-05/showName/Corriente/kgnuShowID/99411" target="_blank" rel="noopener noreferrer">&#161;Corriente!</a>, KGNU-FM, July 2016</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="site-section pb-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>DJ <strong>testimonials</strong></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">

              <div className="blockquote d-flex mb-4">
                <blockquote className="blockquote-quote">
                  <p>&ldquo;Thank you so much for your lovely spirit, for your creativity and love for music, for your mastery in perfectly marrying traditional and alternative into one amazing experience!&rdquo;</p>
                  <div className="blockquote-quote-author">&mdash; Endless Summer Tango Marathon 2017</div>
                </blockquote>
              </div>
          </div>

          <div className="col-md-6">
            <div className="blockquote d-flex mb-4">
                <blockquote className="blockquote-quote">
                  <p>&ldquo;Jessica’s music was so carefully chosen! It’s amazing how she can control the mood and create just the right ambience.&rdquo;</p>
                  <div className="blockquote-quote-author">&mdash; Sexteto Milonguero Boston workshop, 2018</div>
                </blockquote>
              </div>
          </div>

          <div className="col-md-6">
            <div className="blockquote d-flex mb-4">
                <blockquote className="blockquote-quote">
                  <p>&ldquo;Loved her music! Jessica is one of those DJs I would follow from place to place if I could!&rdquo;</p>
                  <div className="blockquote-quote-author">&mdash; Burning Tango 2018</div>
                </blockquote>
              </div>
          </div>

          <div className="col-md-6">
              <div className="blockquote d-flex mb-4">
                <blockquote className="blockquote-quote">
                  <p>&ldquo;Awesome, awesome, awesome ... Jessica's Saturday night milonga was exactly right.&rdquo;</p>
                  <div className="blockquote-quote-author">&mdash; ValenTango 2018</div>
                </blockquote>
              </div>
          </div>

        </div>
      </div>
    </section>

    <section className="site-section bg-light" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="section-heading text-center">
              <h2>Want more info? <strong>Let's chat.</strong></h2>
            </div>
          </div>

          <div className="col-sm">
            <h3 className="mb-4">Contact details</h3>
            <ul className="site-contact-details">
              <li>
                <span className="text-uppercase">Email</span>
                <a href="mailto:mail@jessicaschilling.com">mail@jessicaschilling.com</a>
              </li>
              <li>
                <span className="text-uppercase">Phone</span>
                +1 617 871 9804
              </li>
              <li>
                <span className="text-uppercase">Skype</span>
                <a href="skype:jessica-schilling?userinfo">jessica-schilling</a>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <h3 className="mb-4">Social media</h3>
            <ul className="site-contact-details">
              <li>
                <span className="text-uppercase">LinkedIn</span>
                <a href="https://www.linkedin.com/in/jessicaschilling" target="_blank" rel="noopener noreferrer">@jessicaschilling</a>
              </li>
              <li>
                <span className="text-uppercase">GitHub</span>
                <a href="https://www.github.com/jessicaschilling" target="_blank" rel="noopener noreferrer">@jessicaschilling</a>
              </li>
              <li>
                <span className="text-uppercase">Facebook</span>
                <a href="https://www.facebook.com/jessicaschilling" target="_blank" rel="noopener noreferrer">@jessicaschilling</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="container">
            <p className="text-center">
            &copy;{this.getYear()} Jessica Schilling. All rights reserved.
            </p>
      </div>
    </footer>
    </div>
    );
  }
}

export default App;
