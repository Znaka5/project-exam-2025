import Search from "../Board/Search";

export default function Popular_Comments() {
    return (<>
        <div className="post-box">
            <Search />
            
            <section>
                <h2>Comments</h2>
                <div>
                    <div className="board">
                        <h2>is it that bad i like milfs?</h2>
                        <p>@bucket98</p>
                        <p>likes: 20</p>
                        <a className="details-button" href="/boards/:id/details">Details</a>
                    </div>
                    <div className="board">
                        <h2>What is an Arg?</h2>
                        <p>@Znaka5</p>
                        <p>likes: 10</p>
                        <a className="details-button" href="/boards/:id/details">Details</a>
                    </div>
                </div>
            </section>

            <p>tired of popular comments try looking at popular <a href="/boards/popular/boards" className="home-link">boards</a></p>
        </div>
    </>)
}