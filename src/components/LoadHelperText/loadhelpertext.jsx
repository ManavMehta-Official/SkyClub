import './loadhelpertext.css';

export default function LoadHelperText() {
    return (
        <section className="loader-container">
            <div className='loader-wrapper'>
                <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>Search Results will appear here</h1>
                <h1 style={{ fontSize: "1.5rem" }}>Search Helper</h1>
                <ol>
                    <li>
                        <h1><field>Departure</field></h1>
                        <ul>
                            <li>Enter the destination you will depart from.</li>
                            <li>Example: <code>DELHI</code></li>
                        </ul>
                    </li>

                    <li>
                        <h1><field>Arrival</field></h1>
                        <ul>
                            <li>Enter the destination you want to arrive at.</li>
                            <li>Example: <code>BENGALURU</code></li>
                        </ul>
                    </li>
                    
                        <li>
                            <h1><field>Search From Date</field></h1>
                            <ul>
                                <li>This is the starting date of the time range.</li>
                                <li>Enter the starting date for searching flights.</li>
                                <li><b>Example:</b> <code>15/10/2023</code></li>
                                <li><b>Output:</b> This will start searching for flights that will depart from <field>15/10/2023</field> till the date you entered in the <field>Search To Date</field></li>
                            </ul>
                        </li>

                        <li>
                            <h1><field>Search To Date</field></h1>
                            <ul>
                                <li>The date till you want to search for flights.</li>
                                <li>Enter the ending date for searching flights.</li>
                                <li><b>Example:</b> <code>20/10/2023</code></li>
                                <li><b>Output:</b> This will start searching for flights that will depart from the date you entered in <field>Search From Date</field> till <field>20/10/2023</field></li>
                            </ul>
                        </li>
                </ol>
            </div>
            
        </section>
    )
}