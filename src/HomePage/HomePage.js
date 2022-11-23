export default function HomePage() {
  return (
    <>
      <div className="login">
        <a href="https://google.com">Login</a>
      </div>
      <div className="main">
        <div className="welcome">
          <h1>We are the <strong>Herndon</strong></h1>
          <div className="name">
            <h3>Computer Science Association</h3>
            <div className="shortcut">Just call us the "HCSA"</div>
          </div>
          <h3 className="info">A place for students to explore the countless fields of computer science.</h3>
        </div>
      </div>
      <div className="secondary">
        <div className="buttons">
          <div className="view">View what we're working on</div>
          <div className="or">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <div className="join">Join us</div>
        </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      </div>
    </>
  );
}