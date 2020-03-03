const db = require('./conn')

class ClassInfo {
    constructor(id, name, rank){
        this.id = id;
        this.name = name;
        this.rank = rank;
    }   

    static async getAllTopicData(){
        try {
            const response = await db.any(`SELECT 
                                            topic.id, name, topic.class_status_id, 
                                            class_status.status_title, class_status.rank
                                            FROM topic INNER JOIN class_status 
                                            ON topic.class_status_id = class_status.id
                                            ORDER BY topic.id;`);
            return response;
        } catch (err){
            console.error(err);
            
        }
    }
    static async getClassStatuses(){
        try {
            const response = await db.any(`SELECT status_title, id FROM class_status;`)
            return response;
        } catch (err){
            console.error(err);
            
        }
    } 
    static async postTopicData(topic, status_id){
        try {
            const response = await db.result(`UPDATE topic SET class_status_id = ${status_id} WHERE name = ${topic};`)
        }catch (err){
            console.error(err);
        }
    } // finish this
}

module.exports = ClassInfo;