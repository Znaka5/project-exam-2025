export default function Popular() {
    return (<>
    <div className="popular-boards">
        <h3>Most Popular</h3>
        <div className="board">
          <p><strong>Boards</strong></p>
          <p>Average upvotes: <span className="upvotes">120</span></p>
          <a className="details-button" href="/boards/popular/boards">Details</a>
        </div>
        <div className="board">
          <p><strong>Comments</strong></p>
          <p>Average likes: <span className="upvotes">85</span></p>
          <a className="details-button" href="/boards/popular/comments">Details</a>
        </div>
      </div>
    </>)
}