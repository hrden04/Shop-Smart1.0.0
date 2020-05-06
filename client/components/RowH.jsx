import React from 'react';

function RowH() {
  return (
    <div className="row_h">
      <div className="button_wrapper">
        <div className="helpful_button_input" type="button">
          <span className="button_text a_button">Helpful</span>
        </div>
      </div>
      <div className="divider_span">
        |
      </div>
      <div className=" button_wrapper">
        <span className="button_span">
          <input className="comment_button_input" type="submit" value="Comment" />
        </span>
      </div>
      <div className="divider_span">
        |
      </div>
      <div className="button_wrapper">
        <span className="button_span">
          <input className="report_button_input" type="submit" value="Report Abuse" />
        </span>
      </div>
    </div>
  );
}

export default RowH;
