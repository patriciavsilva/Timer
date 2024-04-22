import { HistoryContainer, HistoryList, Status } from "./styles";

export default function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Há 2 meses</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>10 minutos</td>
              <td>10/09/2021</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>10 minutos</td>
              <td>10/09/2021</td>
              <td>
                <Status statusColor="red">Interrompida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>10 minutos</td>
              <td>10/09/2021</td>
              <td>
                <Status statusColor="yellow">Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>10 minutos</td>
              <td>10/09/2021</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
