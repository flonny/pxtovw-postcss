module.exports = {
  plugins: {
    "pxtovw-postcss" : {
      unitToConvert: "px", // 自定义转换单位
      viewportWidth: 600, // 视口宽度
      unitPrecision: 5, // 保留小数位
      minPixelValue:2
    }
  }
}
