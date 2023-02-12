import React from "react"


const RecentNews = () => {
  

  return (
    <div className="aboutMainDiv">
      <div className="container containerNews">
        <h1 className="recentNewsTitle">Recent News</h1>
        {/* <div className="row">
          {displayTrio.map((newsData, idx) => (
            <div className="col" key={idx}>
              <img className="imgs" src={newsData.img_url} alt="current news" />
              <div className="caption-div">
                <div className="date-div">
                  <div className="day-div">
                    {dateHelperDay(new Date(newsData.date))}
                  </div>
                  <div className="month-div">
                    {" "}
                    {dateHelperMonth(new Date(newsData.date))}{" "}
                  </div>
                  <div className="year-div">
                    {dateHelperYear(new Date(newsData.date))}{" "}
                  </div>
                </div>
                <span className="caption">{newsData.caption}</span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <hr className="hrNews" />
    </div>
  )
}

export default RecentNews
