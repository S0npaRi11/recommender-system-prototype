import { Table } from 'react-bootstrap'
import Recommendation from './recommendation'

const RecommendationList = ({ Recs }) => {

    return (
        <>
            <div className="recommendationList">
                <h2> Recommendation </h2>
                <Table>
                <tbody>
                        <tr>
                            <th> # </th>
                            <th> Product Name </th>
                            <th> Product ID </th>
                        </tr>
                   
                        {/* Here recommendations will be displayed */}
                        { Recs.length !== 0 ? 
                            Recs.map(r => (
                                <Recommendation key={Recs.indexOf(r)} Rec={r} index = { Recs.indexOf(r) }/>
                            ))
                         : 
                            <tr>
                                <td> No recmmendations yet </td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default RecommendationList
