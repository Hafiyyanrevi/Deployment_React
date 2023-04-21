import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://topical-ringtail-35.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "6FaIOYx5zq92qtcriqO2vkJIXFPnXlP3DP2B0vnyfCfDWZE5PrqX1aULr0qfL4fR",
  },
});

export default client;
