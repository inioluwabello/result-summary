import Layout from "../components/layout";
import Heading from "../components/heading";

const Index = () => {
  return (
    <>
      <Heading title={"Result Summary"} />
      <Layout>
        <div className="centered-content HankenGrotesk-Regular">
          <div className="content-wrapper">
            <div className="main">
              <div className="left white">
                <div className="left-header text-center text-md ">
                  Your Result
                </div>
                <div className="score">
                  <h1 className="text-xl fontFaceHankenGroteskExtraBold">76</h1>
                  <span className="score-total text-sm pale-blue fontFaceHankenGroteskRegular">of 100</span>
                </div>

                <div className="left-footer mt-4 fontFaceHankenGroteskMedium">
                  <h3 className="lead-text text-center text-lg">Great</h3>
                  <div className="text-center text-sm">
                    You scored higher than 65% of the people who have taken
                    these tests.
                  </div>
                </div>
              </div>

              <div className="right fontFaceHankenGroteskRegular">
                <h4 className="lead-text text-md bold">Summary</h4>

                <div className="list mt-3">
                  <div className="list-item light-red light-red-bg text-sm text-sm space-between">
                    <div className="icon">
                      <img
                        src="/assets/images/icon-reaction.svg"
                        alt="reaction"
                      />
                      <span>Reaction</span>
                    </div>
                    <div className="score-value">
                      <strong>80</strong> /{" "}
                      <span>100</span>
                    </div>
                  </div>

                  <div className="list-item mt-3 orangey-yellow-bg orangey-yellow text-sm space-between">
                    <div className="icon">
                      <img src="/assets/images/icon-memory.svg" alt="memory" />
                      <span>Memory</span>
                    </div>
                    <div className="score-value">
                      <strong>92</strong> /{" "}
                      <span>100</span>
                    </div>
                  </div>

                  <div className="list-item mt-3 green-teal-bg green-teal text-sm space-between">
                    <div className="icon">
                      <img src="/assets/images/icon-verbal.svg" alt="verbal" />
                      <span>Verbal</span>
                    </div>
                    <div className="score-value">
                      <strong>61</strong> /{" "}
                      <span>100</span>
                    </div>
                  </div>

                  <div className="list-item mt-3 cobalt-blue-bg cobalt-blue text-sm space-between">
                    <div className="icon">
                      <img src="/assets/images/icon-visual.svg" alt="visual" />
                      <span>Visual</span>
                    </div>
                    <div className="score-value">
                      <strong>72</strong> /{" "}
                      <span>100</span>
                    </div>
                  </div>
                </div>

                <button className="continue mt-3 dark-grey-blue-bg white text-sm fontFaceHankenGroteskRegular bold">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
