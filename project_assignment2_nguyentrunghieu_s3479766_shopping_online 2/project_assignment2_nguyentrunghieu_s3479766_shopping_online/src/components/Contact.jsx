import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <div className="container">
          <h1>About My Project</h1>
          <p>The project is an assignments of RMIT University (Information Technology). </p>
          <br />
          <p><b>Name</b>: Nguyen Trung Hieu</p>
          <p><b>Student ID</b>: S3479766</p>
          <b>---------------------------</b>
          <p><b>Name</b>: Nguyen Xuan Hoang Phuc</p>
          <p><b>Student ID</b>: S3595035</p>
          <b>---------------------------</b>
          <p><b>Name</b>: Tu Nguyen</p>
          <p><b>Student ID</b>: S3608114</p>
          <p><b>Tasks:</b></p>
          <ul>
            <li>Developing: Estate portal</li>
            <li>Software: CSS, Bootstrap, visual studio code...</li>
            <li>Server: http://rmit.chickenkiller.com:8080,,,, after deploying, i will this this</li>
          </ul>
        </div>
      </div>
    );
  };
}
export default Contact;



