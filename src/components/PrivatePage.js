import Header from "./Header";
import Menu from "./Menu";

const HOURS_2 = 1000 * 60 * 60 * 2; // time until token expires

function renderError() {
  localStorage.clear("trackItUser");
  return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

  const auth = JSON.parse(localStorage.getItem("trackItUser"));

  if (!auth) {
    return renderError();
  }

  const now = +new Date();
  const timeLogged = auth.timeStamp;

  if (now - timeLogged <= HOURS_2) {
    return (
      <>
        <Header />
        {children}
        <Menu />
      </>
    );
  } else {
    renderError();
  }
}