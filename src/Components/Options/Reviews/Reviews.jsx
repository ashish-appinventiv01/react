import React from 'react'
import './Reviews.css'

const Reviews = () => {
  return (
    <div className="reviews-container">
    <p>There are no reviews yet.</p>
    <form>
        <h2>Be the first to review "Product Name 10"</h2>
        <p>Your email will not be published. Required fields are marked</p>
        <label>Your Rating *     ☆☆☆☆☆</label>
        
        <label>Your Review *</label>
        <textarea rows="4" placeholder="Write your review"></textarea>
        
        <div className="input-group">
            <div>
                <label>Name *</label>
                <input type="text" placeholder="Your Name" />
            </div>
            <div>
                <label>Email *</label>
                <input type="email" placeholder="Your Email" />
            </div>
        </div>
        
        <div className="checkbox-group">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>
  )
}

export default Reviews