import { NavLink } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, Icon } from '@chakra-ui/react';
import { ChevronRightSolid } from '@northlight/icons';
import { capitalizeFirstLetter, buildUrlWithId } from '@/helpers';
import { Routes } from '@/constants';
import { Button } from '@northlight/ui';
import type { BestScoreItemType } from '@/types'

type BestScoresTableProps = {
  data: BestScoreItemType[];
}

const BestScoresTable = ({ data }: BestScoresTableProps) => (
  <Table variant="rounded">
    <Thead>
      <Tr>
        <Th fontWeight="bold">Id</Th>
        <Th fontWeight="bold">User's name</Th>
        <Th fontWeight="bold">Score</Th>
        <Th fontWeight="bold" />
      </Tr>
    </Thead>
    <Tbody>
      {data.map(({ id, userId, name, score }, index) => (
        <Tr key={id}>
          <Td>{userId}</Td>
          <Td>{capitalizeFirstLetter(name)}</Td>
          <Td>{score}</Td>
          <Td>
            <NavLink to={buildUrlWithId(Routes.USER_SCORES, userId)}>
              <Button variant="link" size="sm" rightIcon={<Icon as={ChevronRightSolid} />}>
                see more scores
              </Button>
            </NavLink>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default BestScoresTable;
