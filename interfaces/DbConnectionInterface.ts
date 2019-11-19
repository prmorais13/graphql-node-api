import { Sequelize } from "sequelize";
import { ModelsInterface } from "./ModelsInterface";

export interface ConnectionInterface extends ModelsInterface {
	sequelize: Sequelize;
}
