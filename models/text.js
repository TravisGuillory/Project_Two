// Dependencies
// =============================================================





module.exports = function(sequelize, DataTypes) {
    var Text = sequelize.define("text", {
        user_id: DataTypes.STRING,
        text: DataTypes.STRING,
        post_rating: DataTypes.DECIMAL(5,4)
      });
    
      return Text;
    }