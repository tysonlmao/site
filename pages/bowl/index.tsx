import Nav from "../../components/nav"

export default function Bowl() {
    return(
        <>
            <div className="page-content">
                <Nav/>
                <div className="h2-center">
                    <h1>2023 Lead</h1>
                    <p>Last updated <span className="text-fdadbe">Janurary 1, 1970</span></p>
                    <a href="/bowl/rules" className="text-fdadbe">View rules</a>
                    <div className="spacer-70"></div>
                    <div className="container">
                        <table className="table-lead glow-button">
                            <tbody>

                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Splits</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <th>Tyson</th>
                                <th>2</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Barrie</th>
                                <th>3</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>Hans</th>
                                <th>4</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th>Tarn</th>
                                <th>5</th>
                                <th>3</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
