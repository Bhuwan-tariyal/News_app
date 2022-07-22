import React from 'react'


const NewsItem =(props)=> {
        let { title, description, imgUrl, newsUrl, publishedAt, author,sourcename} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:"1"}}>{sourcename}</span>
                    <img src={imgUrl?imgUrl:"https://s.abcnews.com/images/Politics/WireAP_51dc395b80204c0394cfe2f37f5cf70c_16x9_992.jpg"} className="card-img-top"  style={{height: '16rem'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark btn-sm">read more...</a>
                    </div>
                </div>

            </div>

        )
    
}

export default NewsItem
