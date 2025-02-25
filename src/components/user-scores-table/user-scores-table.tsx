import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import type { ScoreType } from '@/types';

type UserScoresTableProps = {
  data: ScoreType[];
};

const UserScoresTable = ({ data }: UserScoresTableProps) => (
  <Table variant="rounded">
    <Thead>
      <Tr>
        <Th fontWeight="bold">Score</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map(({ userId, score }, index) => (
        <Tr key={index}>
          <Td>{score}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default UserScoresTable;
