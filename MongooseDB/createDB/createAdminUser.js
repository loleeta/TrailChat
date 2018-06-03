db = db.getSiblingDB('admin')
db.createUser(
{
	user: "dbAdmin", 
	pwd: "test",
	roles: [ "readWrite", "dbAdminAnyDatabase", "clusterAdmin"]
}
)