import { GenreList } from "../componenst/GenreList/GenreList"
import { Movies } from "../componenst/Movies/Movies"

export const HomePage = () => {

    return (
        <main>
            <h1>Movie Explorer</h1>
            <p>Search favorite movies or explore new</p>

            <section>
                <h2>Popular now</h2>
                <Movies/>
            </section>

            <GenreList />
        </main>
    )
}