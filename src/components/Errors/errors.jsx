export default function Errors() {
    return (
        <div>
            <h3>Errors can be caused due to multiple reasons:</h3>
            <ol>
                <li>API couldn't handle the load.</li>
                    <ul><li>Wait for sometime and try again.</li></ul>
                <br></br>
                <li>The input must be wrong. (Date To is lesser than Date From)</li>
                    <ul><li>Input correctly and according to the format.</li></ul>
                <br></br>
                <li>IATA code not read. (Server Side Error)</li>
                    <ul><li>The location you might be entering might not exist on the API.</li></ul>
            </ol>
        </div>
    )
}