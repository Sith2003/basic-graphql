import User from "../models/User.js";

const resolvers = {
    Query: {
        async user(_, {ID}) {
            return await User.findById(ID);
        },
        async getUsers(_, {amount}) {
            return await User.find().sort({ createdAt: -1 }).limit(amount);
        }
    },
    Mutation: {
        async createUser(_, {userInput: {name, lastname, description}}) {
            const createUser = new User({
                name: name,
                lastname: lastname,
                description: description,
                createdAt: new Date().toISOString()
            });
            const res = await createUser.save();

            return {
                id: res.id,
                ...res._doc
            }
        },
        async deletedUser(_, {ID}) {
            const wasDeleted = (await User.deleteOne({ _id: ID})).deletedCount();
            return wasDeleted
        },
        async editedUser(_, {ID, userInput: {name, lastname, description}}) {
            const wasEdited = (await User.updateOne({ _id: ID}, {name: name, lastname: lastname, description: description})).editedCount();
            return wasEdited
        }
    }
};

export default resolvers;