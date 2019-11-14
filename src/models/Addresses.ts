import { DataTypes, Model } from "sequelize";

class Addresses extends Model {
  static init(sequelize: any) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER
      },
      { sequelize }
    );
  }
}

export default Addresses;
