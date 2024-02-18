'use client'

import { Grid, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { ProfileCard } from './components';
import { userDetails } from "./interface";

const usersData: userDetails[] = [];

const HomePage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const query = await fetch('https://jsonplaceholder.typicode.com/users');
      const res = await query.json();
      setUsers(res);
    }
    getUsers();
  }, [])

  return (
    <Stack m={20}>
      <Grid>
        {users.length && users.map((item: userDetails) => (
          <ProfileCard name={item.name} email={item.email} id={item.id} phone={item.phone} website={item.website} />
        ))}
      </Grid>
    </Stack>
  );
}
export default HomePage;