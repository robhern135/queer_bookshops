import React from "react"

import Cross from "../../icons/xmark-solid.svg"

const Info = ({ infoOpen, setInfoOpen }) => {
  const handleContainerClasses = (infoOpen) => {
    let classes = infoOpen
      ? "info-container-outer open"
      : "info-container-outer"
    return classes
  }
  const handleClasses = (infoOpen) => {
    let classes = infoOpen ? "info-container open" : "info-container"
    return classes
  }

  return (
    <div className={handleContainerClasses(infoOpen)}>
      <div className={handleClasses(infoOpen)}>
        <div className="info-inner">
          <div className="top">
            <button
              className="closeInfo"
              id="closeInfo"
              onClick={() => {
                setInfoOpen(false)
              }}
            >
              <img
                src={Cross}
                className="close-icon"
                width="25"
                height="25"
                alt="close"
              />
            </button>
          </div>
          <div className="bottom">
            <h1>Reading is Fundamental</h1>
            <p>
              This web application was created with love by{" "}
              <a href="https://findrob.co.uk" rel="noreferrer" target="_blank">
                Rob Hern
              </a>{" "}
              (he/him), a Queer Web Developer living and working in London,
              using a list originally compiled by{" "}
              <a
                href="https://twitter.com/alimkheraj"
                target="_blank"
                rel="noreferrer"
              >
                Alim Kheraj
              </a>{" "}
              (he/him).
            </p>
            <p>
              For more info check out Alim's{" "}
              <a
                href="https://twitter.com/alimkheraj/status/1669627152193527810"
                target="_blank"
                rel="noreferrer"
              >
                original tweet
              </a>{" "}
              and his{" "}
              <a
                href="https://www.dazeddigital.com/life-culture/article/60090/1/lgbt-lgbtq-queer-bookshops-uk-britain-guide-2023-pride"
                target="_blank"
                rel="noreferrer"
              >
                article for Dazed
              </a>
              .
            </p>
            <p>
              If you would like to collaborate on a project, I am particularly
              interested in hearing from people in the LGBTQIA+ community or
              people of other underrepresented groups. I work freelance and also
              set aside some time a month to take on pro-bono work for
              charitable causes I believe in.
            </p>
            <p>
              All information is pulled from the individual businesses' Google
              My Business accounts and correct at the time of publication (July
              2023). If you would like to bring any incorrect information or
              errors to my attention, or would like to suggest another queer
              Bookshop not included in this list, I thank you, and request that
              you use{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfF7H6-Yem_rxbGjtoT3e9s0JZt_x3WxB0d8HyQqDvtSpEBmQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
              >
                this Google Form
              </a>
              . Also, if you work for one of these businesses and would like to
              correct any info (or even change your photo!) please don't
              hesitate to reach out.
            </p>
            <p>
              Please consider supporting your local independent, small, and
              Queer businesses by buying from them directly!
            </p>
            <button
              className="info-close"
              id="closeInfo"
              onClick={() => {
                setInfoOpen(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
