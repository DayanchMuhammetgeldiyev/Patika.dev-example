const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const {users, events, locations, participants} = require('./data.js');

const typeDefs = gql`

        type Event {
            id: ID!
            title: String!
            desc: String!
            date: String!
            from: String!
            to: String!
            location_id: ID!
            location: Location
            user: User!
            participants: [Participant!]!
        }
        input addEventInput {
            title: String!
            desc: String!
            date: String!
            from: String!
            to: String!
            location_id: ID!
            user_id: ID!
        }
        input updateEventInput {
            id: ID
            title: String
            desc: String
            date: String
            from: String
            to: String
            location_id: ID
            user_id: ID
        }

        #Location 
        type Location {
            id: ID!
            name: String!
            address: String!
            lat: Float!
            lng: Float!
        }
        input addLocationInput {
            name: String!
            address: String!
            lat: Float!
            lng: Float!
        }
        input updateLocationInput {
            id: ID
            name: String
            address: String
            lat: Float
            lng: Float
        }
      #Participant
        type Participant {
            id: ID!
            user_id: ID!
            event_id: ID!
        }
        input addParticipantInput {
            user_id: ID!
            event_id: ID!
        }
        input updateParticipantInput {
            id: ID
            user_id: ID
            event_id: ID
        }
     
    #User
        type User {
            id: ID!
            username: String!
            email: String!
            events: [Event!]!
        }
        input addUserInput {
            username: String!
            email: String!
        }
        input updateUserInput {
            username: String
            email: String
        }

        type Query {
            # Event

            events: [Event!]!
            event(id: ID!): Event!
            
            # Location
            locations: [Location!]!
            location(id: ID!): Location!
            
            # User
            users: [User!]!
            user(id: ID!): User!
            
            # Participant
            participants: [Participant!]!
            participant(id: ID!): Participant!
          }
            # Delete All Output
            type DeleteAllOutput {
                count: Int!
            }
`;

const resolvers = {
    Query: {
      // Events
        events: () => events,
        event: (parent, args) => events.find((event) => event.id === args.id),

        // Locations
        locations: () => locations,
        location: (parent, args) => locations.find((location) => location.id === args.id),

        // Users
        users: () => users,
        user: (parent, args) => users.find((user) => user.id === args.id),

        // Participants
        participants: () => participants,
        participant: (parent, args) => participants.find((participant) => participant.id === args.id),

        users: {
            events: (parent) => events.filter((event) => event.user_id === parent.id),
        },
        events: {
            user: (parent) => users.find((user) => user.id === parent.user_id),
            location: (parent) => locations.find((location) => location.id === parent.location_id),
            participants: (parent) => participants.filter((participant) => participant.event_id === parent.id),
        },
    },
  };



const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground ({         
            
              })
      ] });

server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}   
);