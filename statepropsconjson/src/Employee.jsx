import React from 'react'
const Employee=(props)=>
{
    const data=props.empDetails1;
    console.log(data);
    return(
        <div>
            <table border="2px" cellPadding={"10px"} cellSpacing={"10px"} >
                <tr>
                <td>EmpId</td>
                <td>Emp name </td>
                <td>Emp sal</td>
                <td>Emp des</td>
                <td>Emp gender</td>
                <td>Emp edu</td>
                <td>emp img</td>
                <td>Emp companies</td>
                <td>skills</td>
                <td>city</td>
                </tr>
                {data.map((x)=>
                {
                    return(
                        <tr>
                            <td>{x.emp_id}</td>
                            <td>{x.emp_name}</td>
                            <td>{x.emp_sal}</td>
                            <td>{x.emp_des}</td>
                            <td>{x.emp_gender}</td>
                            <td>{x.emp_edu}</td>
                            <td><img src={x.emp_image} alt="" width="50px"/></td>
                            <td>
                                <ul>
                                    <li>{x.companies.current_comp}</li>
                                    <li>{x.companies.previous_com}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {
                                        x.emp_skills.map((x)=>
                                        {
                                           return(<li>{x}</li>) 
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Employee