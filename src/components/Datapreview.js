import React, { useState } from 'react'

function Datapreview({ data }) {

    return (
        <>
            {
                data?.length > 1 ? (
                    <div className='container'>
                        <table className='tabletag'>
                            <thead>
                                <tr className='row'>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>UserName</th>
                                    <th>fon No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.map((val) => {
                                        return (
                                            <tr key={val.id}>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.username}</td>
                                                <td>{val.phone}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <center>
                        <h1>loading please wait ... ... ...</h1>
                    </center>
                )
            }

        </>
    )
}

export default Datapreview