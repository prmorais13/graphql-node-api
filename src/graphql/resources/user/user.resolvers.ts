import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { GraphQLResolveInfo } from "graphql";
import { Transaction } from "sequelize";
import { UserAttributes } from "../../../models/UserModel";

export const userResolvers = {
	Query: {
		users: (
			_parent: any,
			{ first = 10, offset = 0 },
			{ db }: { db: DbConnection },
			info: GraphQLResolveInfo
		) => {
			return db.User.findAll({ limit: first, offset: offset });
		},

		user: async (
			_parent: any,
			{ id }: any,
			{ db }: { db: DbConnection },
			info: GraphQLResolveInfo
		) => {
			const user = await db.User.findByPk(id);
			if (!user) throw new Error(`Usuário com ID ${id} não encontrado!`);
			return user;
		}
	},

	Mutation: {
		createUser: (
			_parent: any,
			{ input }: { input: any },
			{ db }: { db: DbConnection },
			info: GraphQLResolveInfo
		) => {
			return db.sequelize.transaction(async (t: Transaction) => {
				return await db.User.create(input, { transaction: t });
			});
		},

		updateUser: (
			_parent: any,
			{ id, input }: any,
			{ db }: { db: DbConnection },
			info: GraphQLResolveInfo
		) => {
			return db.sequelize.transaction(async (t: Transaction) => {
				const user = await db.User.findOne(id);
				if (!user) throw new Error(`Usuário com ID ${id} não encontrado!`);
				return db.User.update(input, { transaction: t, where: id });
			});
		}
	}
};
