import { Model, DataTypes } from "sequelize";

class User extends Model {
	static init(sequelize: any) {
		super.init(
			{ nome: DataTypes.STRING, email: DataTypes.STRING },
			{ sequelize }
		);
	}
}

export default User;
