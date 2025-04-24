import { GenreList } from "../componenst/GenreList/GenreList"
import { Movies } from "../componenst/Movies/Movies"
import { Search } from "../componenst/Search/Search"

export const HomePage = () => {

    return (
        <main>
            <h1>Movie Explorer</h1>
            <p>Search favorite movies or explore new</p>

            <Search />


            <section>
                <h2>Popular now</h2>
                <Movies/>
            </section>

            <GenreList />
        </main>
    )
}