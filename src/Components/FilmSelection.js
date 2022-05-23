import FilmList from "./FilmList"

export default function FilmSelection({UpdateHeader}){
    return (
        <main>
            <h2>Selecione o filme</h2>
            <FilmList UpdateHeader={UpdateHeader} />
        </main>
    )
}