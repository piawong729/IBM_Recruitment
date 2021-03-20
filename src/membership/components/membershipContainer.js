import { getMembership } from '../dao/membershipDao';
import { useState, useEffect } from 'react';
import '../style/membershipStyle.css';
import { MembershipItem } from './membershipItem';

export const MembershipContainer = () => {
    //qs3 integrate membership with server

    @{
        var db = Database.Open("International Online Mall"); 
        var selectQueryString = "SELECT * FROM Membership "; 
        }
        <html> 
        <body> 
        <h1>International Online Mall Members</h1> 
        <table> 
        <tr>
        <th>CustomerId</th> 
      
        </tr>
        @foreach(var row in db.Query(selectQueryString))
        {
        <tr> 
        <td>@row.Id</td> 
        <td>@row.Name</td> 
        <td>@row.Description</td> 
        <td align="right">
        </tr> 
        }
        </table> 
        </body> 
        </html>
    //React useState hook is used for state management. Utilzes setter setMembership to update product state
    const [membership, setMembership] = useState([]);

    const [planCSS, setPlanCSS] = useState("plan-item-dismiss");

    //React useEffect hook with empty array as second argument will run below code only once 
    useEffect(() => {
        getMembership().then(res => {
            setMembership(res);
            setTimeout(function () {
                setPlanCSS("plan-item")
            }, 700);
        });
    }, [])

   

    const handleGradeClick = (grade) => {
        setPlanCSS("plan-item-dismiss")

        setTimeout(function () {
            getMembership(grade).then(res => {
                setMembership(res);
            })
        }, 500);


        setTimeout(function () {
            setPlanCSS("plan-item")
        }, 700);
        

    }
    return (
        <>
            <header className="header">
                <div className="text-center">
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick()}>ALL</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("SILvER")}>Sliver</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("GoLD")}>Gold</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("DIAmOND")}>Diamond</span>
                </div>
            </header>
            {
                membership && membership.length > 0
                    ?
                    <div className='align-grid'>
                        <div className='grid'>
                            {

                                membership.map(m => {
                                    return (
                                        <div opacity className={planCSS}>
                                            <MembershipItem
                                                id={m.id}
                                                name={m.name}
                                                description={m.description}
                                                price={m.price}
                                            />
                                        </div>
                                    );
                                })

                            }
                        </div>
                    </div>
                    :
                    <div className="mt-5 text-center">No membership plan for this grade</div>

            }



        </>
    )

}
