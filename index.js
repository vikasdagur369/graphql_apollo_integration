import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  // typedef define the structure of data(blueprint),show what can be requested or changed in the system.
  typeDefs: `#graphql
      type Query {
        hello : String
      } 
  `,

  // resolvers are the functions that provide actual data for queriesor change requested on typedefs.
  resolvers: {
    Query: {
      hello: () => "hello world!",
    },
  },
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`server is ready🚀 at ${url}`);
