//连接池  提高数据库连接效率

let mysql = require("mysql");

module.exports = class DataPool {
    constructor() {
        this.flag = true; //是否连接过
        this.pool = mysql.createPool({
            host: 'localhost',
            user: "root",
            password: "hqp19880123",
            database: "gpdb",
            port: "3306"
        })
    }

    getPool() {
        if (this.flag) {
            this.pool.on('connection', (conn) => {
                conn.query('set session auto_increment=1');
                this.flag = false;
            })
        }
        return this.pool
    }
}