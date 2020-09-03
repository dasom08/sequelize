const { Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory');

module.exports = (sequelize,DataTypes) =>{
    class Site extends Model {}

    Site.init({
      // Model attributes are defined here
      // 모델 attributes 는 여기서 정의한다 
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
      sequelize, 
      // We need to pass the connection instance
      // 데이터베이스 connection
      modelName: 'Site' // We need to choose the model name
    });
    
    // the defined model is the class itself
    // 클래스는 정의한 모델이다.    
    console.log(Site === sequelize.models.Site); // true
}

