import Graph from "./Graph";

function AdInsights() {
    return(
        <div className="d-flex justify-content-around">
            <div className="card win rounded">
                <table className="table table-sm">
                    
                    <thead className="fw-bolder">
                        <tr>
                            <th colSpan={4}>AdInsights</th>
                            <th>?</th>
                        </tr>
                        <tr>
                            <th scope="col" >Campaigns</th>
                            <th>Clicks</th>
                            <th>Cost</th>
                            <th>Conversions</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="fw-light">
                        <tr>
                            <th scope="row" className="fw-normal">Cosmetics</th>
                            <td>712</td>
                            <td>USD 4,272</td>
                            <td>8</td>
                            <td>USD 16,568</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">Serums</th>
                            <td>3,961</td>
                            <td>USD 27,331</td>
                            <td>115</td>
                            <td>USD 362,526</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">FaceWash</th>
                            <td>9,462</td>
                            <td>USD 76,831</td>
                            <td>123</td>
                            <td>USD 266,800</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">Shampoos</th>
                            <td>439</td>
                            <td>USD 2,151</td>
                            <td>5</td>
                            <td>USD 11,029</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">Conditioners</th>
                            <td>1,680</td>
                            <td>USD 3,864</td>
                            <td>49</td>
                            <td>USD 175,245</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">FaceWash 2</th>
                            <td>4,978</td>
                            <td>USD 29,370</td>
                            <td>189</td>
                            <td>USD 623,106</td>
                        </tr>
                        <tr>
                            <th className="fw-normal">Total</th>
                            <td>26,510</td>
                            <td>USD 1,43,819</td>
                            <td>489</td>
                            <td>USD 15,73,563</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="graph mt-5 win">
                <div className="card k">
                    <div className="AD d-flex justify-content-between">
                        <h6 className="mt-3">Ad Insights</h6>
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clicks</button>
                    </div><hr/>
                    <div>
                    <Graph/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default AdInsights;