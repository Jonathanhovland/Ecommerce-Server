"use strict";
module.exports = (sequelize, DataTypes) => {
  
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img_url: DataTypes.TEXT
  }, {})

  //eslint-disable-next-line
  Product.associate = function(models) {
    // associations can be defined here
  }
  return Product
}