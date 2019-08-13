import React from "react";
import 'reactstrap';
// import "./style.css";

function Social () {
    return (
<div  className="container p-5 center-block text-center">

<div  className="row icons p-4">

  <div  className="col-4 card">
    <div  className="card-block p-5">
      <a href="https://www.linkedin.com/in/christopher-stroupe-7004977b/" target="_blank"  className="fab fa-linkedin-in fa-3x img-responsive center-block">
      </a>

    </div>
  </div>

  <div  className="col-4 card">
    <div  className="card-block p-5">
      <a href="https://www.facebook.com/chris.stroupe.1?ref=bookmarks" target="_blank"  className="fab fa-facebook fa-3x img-responsive center-block">
      </a>

    </div>
  </div>

  <div  className="col-4 card">
    <div  className="card-block p-5">
      <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-05-07&ci=AWS00230446"
        target="_blank"  className="fab fa-aws fa-3x img-responsive center-block">
      </a>
    </div>
  </div>

</div>
</div>
    )
};

export default Social