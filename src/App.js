import "./App.css";
import { useQuery, gql } from "@apollo/client";
// Creating a GQL Query by wrapping it as a `template string` in the gql function
const GET_HELLO_MSG = gql`
  query GetHelloMessage {
    hello
  }
`;
function App() {
  // Passing the GQL query "GET_HELLO_MSG" to the useQuery hook.
  const { loading, error, data } = useQuery(GET_HELLO_MSG);
  // Above, observe: loading, error, and data properties being destructured from the useQuery hook
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <h1>{data.hello}</h1>;
}
export default App;
