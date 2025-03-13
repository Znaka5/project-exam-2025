import Search from "./Search";

export default function Boards() {
    return (<>
        <div className="post-box">
            <Search />

            <section>
                <h2>Posts</h2>
                <div>
                    <div className="board">
                        <h2>is it that bad i like milfs?</h2>
                        <p>@bucket98</p>
                        <p1>upvotes: 20</p1>
                        <a className="details-button" href="/boards/:id/details">Details</a>
                    </div>
                    <div className="board">
                        <h2>What is an Arg?</h2>
                        <p>@Znaka5</p>
                        <p1>upvotes: 10</p1>
                        <a className="details-button" href="/boards/:id/details">Details</a>
                    </div>
                </div>
            </section>

            <p>tired of "boarding" go back to home page <a href="/" className="home-link">Home</a></p>
            </div>
    </>)
}