'use client'
import { List, ListItem, Card } from "@material-tailwind/react"

import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    const [users, setUsers] = useState('')
    useEffect(() => {
        const fetchAllUser = async () => {
            const response = await fetch("/api/users");
            const usersInfo = await response.json();
            setUsers(usersInfo.data);
        };
        fetchAllUser();
    }, []);
  return (
    <div>
        {users && users.map((user) => (
            <Card key={user.id} className="mb-4">
                <List>
                    <ListItem>{user.name}</ListItem>
                </List>
            </Card>
        ))}
    </div>
  )
}

export default AllUsers