import { Anchor, Button, Card, Grid, Group, Text, Tooltip } from "@mantine/core";
import { IconAt, IconPhoneCall, IconStar, IconTrash, IconUserMinus, IconUserPlus, IconWorld } from "@tabler/icons-react";
import { userDetails } from "../interface";
import { useState } from "react";
import styles from '../home.module.css';

const profileCard: React.FC<userDetails> = ({ email, name, website, phone }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  if (!isDeleted)
    return (
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>

          <Anchor className={styles.avatarLink} href={website} target="_blank" underline="never">
            <Tooltip label={name}>
              <img
                className={styles.imgBorder}
                height={130}
                width={130}
                alt="avatar"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
              />
            </Tooltip>
          </Anchor>


          <Text className={styles.name} size="xl" m={10}>{name} {isFollowed && <IconStar size={18} />}</Text>

          <Group gap="xs" mt={4}>
            <IconAt className={styles.colorGrey} size={18} stroke={2} />
            <Anchor className={styles.colorGrey} href={`mailto:${email}`} underline="hover">
              <Text size="lg" c="dimmed">
                {email}
              </Text>
            </Anchor>
          </Group>

          <Group gap="xs" mt={4}>
            <IconPhoneCall className={styles.colorGrey} size={18} stroke={2} />
            <Anchor className={styles.colorGrey} href={`tel:${phone}`} underline="hover">
              <Text size="lg" c="dimmed">
                {phone}
              </Text>
            </Anchor>
          </Group>

          <Group gap="xs" mt={4}>
            <IconWorld className={styles.colorGrey} size={18} stroke={2} />
            <Anchor className={styles.colorGrey} href={website} target="_blank" underline="hover">
              <Text size="lg" c="dimmed">
                {website}
              </Text>
            </Anchor>
          </Group>

          <Group grow gap="xs">
            {isFollowed ?
              <Button variant="outline" size="md" color="grey" mt="md" radius="md" onClick={() => setIsFollowed(false)}>
                <IconUserMinus size={18} className={styles.mr} />Unfollow
              </Button>
              :
              <Button variant="filled" size="md" mt="md" radius="md" onClick={() => setIsFollowed(true)}>
                <IconUserPlus size={18} className={styles.mr} /> Follow
              </Button>}
            <Button variant="outline" size="md" mt="md" radius="md" onClick={() => setIsDeleted(true)}>
              <IconTrash size={18} className={styles.mr} /> Delete
            </Button>
          </Group>

        </Card>
      </Grid.Col>)
}

export default profileCard;