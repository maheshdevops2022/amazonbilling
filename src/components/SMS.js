import React from "react";

const SMS = () => {
  return (
    <>
      <div className="container">
        <div className="head-container">
          <h4 className="heading">Send Whatsapp Sms</h4>
          <div>
            <p>Total Today Campaign:</p>
            <div>
              <div>
                <p>Send New Message</p>
              </div>
              <label>Campaign name</label>
              <input type="text" placeholder="Please Enter The Campaign Name" />
              <label>Country</label>
              <select option="India">India</select>
              <label>Type</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMS;
