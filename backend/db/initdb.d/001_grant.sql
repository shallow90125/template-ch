-- NOTE: Prismaはもう1つShadow Databaseを作り、Migrate時にそちらにも変更を加えるため、権限が必要になる
-- see: https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database#shadow-database-user-permissions

GRANT CREATE, UPDATE, SELECT, INSERT, ALTER, DROP, REFERENCES, INDEX ON *.* to 'user'@'%';
FLUSH PRIVILEGES;
