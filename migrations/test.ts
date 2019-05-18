import { AccessPermissionsSchema } from '@nestjs-bff/backend/lib/domain/access-permissions/model/access-permissions.schema';
import { AuthenticationSchema } from '@nestjs-bff/backend/lib/domain/authentication/model/authentication.schema';
import { OrganizationSchema } from '@nestjs-bff/backend/lib/domain/organization/model/organization.schema';
import { UserSchema } from '@nestjs-bff/backend/lib/domain/user/model/user.schema';
import { Connection } from 'mongoose';
import { StaticData } from '../dist/staticData';

/**
 * Make any changes you need to make to the database here
 */
export async function up(connection: Connection) {
  await connection.model('IUserModel', UserSchema).collection.insertMany(data.users);
  await connection.model('IAuthenticationModel', AuthenticationSchema).collection.insertMany(data.authentications);
  await connection.model('IOrganizationModel', OrganizationSchema).collection.insertMany(data.organizations);
  await connection
    .model('IAccessPermissionsModel', AccessPermissionsSchema)
    .collection.insertMany(data.accesspermissions);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down(connection: Connection) {
}