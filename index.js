var iconCodeMap = {
  'tornado': ['0', '00'],
  'tropical-storm': ['1', '01', '2', '02'],
  'thunderstorm': ['3', '03', '4', '04'],
  'rain-snow': ['5', '05', '7', '07'],
  'rain-hail': ['6', '06', '10', '35'],
  'freezing-drizzle': ['8', '08'],
  'scattered-showers': ['9', '09', '11', '39'],
  'rain': ['12'],
  'flurries': ['13'],
  'snow': ['14', '16'],
  'blowing-snow': ['15', '25'],
  'hail': ['17', '18'],
  'fog': ['19', '20', '21', '22'],
  'wind': ['23', '24'],
  'cloudy': ['26'],
  'mostly-cloudy-night': ['27'],
  'mostly-cloudy': ['28'],
  'partly-cloudy-night': ['29'],
  'partly-cloudy': ['30'],
  'clear-night': ['31'],
  'sunny': ['32', '36'],
  'mostly-clear-night': ['33'],
  'mostly-sunny': ['34'],
  'isolated-thunderstorms': ['37'],
  'scattered-thunderstorms': ['38'],
  'heavy-rain': ['40'],
  'scattered-snow': ['41'],
  'heavy-snow': ['42', '43'],
  'na': ['-', '44', 'na'],
  'scattered-showers-night': ['45'],
  'scattered-snow-night': ['46'],
  'scattered-thunderstorms-night': ['47']
};

module.exports = {
  getConditionByIconCode: function (iconCode) {
    var wxIcon = iconCode+'';
    switch(wxIcon) {
      case '0':
        return {bucket: 'stormy', description: 'Tornado', timeframe: 'na'};
      case '1':
        return {bucket: 'stormy', description: 'Tropical Storm', timeframe: 'na'};
      case '2':
        return {bucket: 'stormy', description: 'Hurricane', timeframe: 'na'};
      case '3':
        return {bucket: 'stormy', description: 'Strong Thunderstorms', timeframe: 'na'};
      case '4':
        return {bucket: 'stormy', description: 'Thunderstorms', timeframe: 'na'};
      case '5':
        return {bucket: 'wintry', description: 'Rain and Snow', timeframe: 'na'};
      case '6':
        return {bucket: 'rain', description: 'Rain and Sleet', timeframe: 'na'};
      case '7':
        return {bucket: 'wintry', description: 'Wintry Mix', timeframe: 'na'};
      case '8':
        return {bucket: 'wintry', description: 'Freezing Drizzle', timeframe: 'na'};
      case '9':
        return {bucket: 'rain', description: 'Drizzle', timeframe: 'na'};
      case '10':
        return {bucket: 'wintry', description: 'Freezing Rain', timeframe: 'na'};
      case '11':
        return {bucket: 'rain', description: 'Showers', timeframe: 'na'};
      case '12':
        return {bucket: 'rain', description: 'Rain', timeframe: 'na'};
      case '13':
        return {bucket: 'wintry', description: 'Flurries', timeframe: 'na'};
      case '14':
        return {bucket: 'wintry', description: 'Snow Showers', timeframe: 'na'};
      case '15':
        return {bucket: 'wintry', description: 'Blowing Snow', timeframe: 'na'};
      case '16':
        return {bucket: 'wintry', description: 'Snow', timeframe: 'na'};
      case '17':
        return {bucket: 'rain', description: 'Hail', timeframe: 'na'};
      case '18':
        return {bucket: 'rain', description: 'Sleet', timeframe: 'na'};
      case '19':
        return {bucket: 'lowvis', description: 'Dust', timeframe: 'na'};
      case '20':
        return {bucket: 'lowvis', description: 'Fog', timeframe: 'na'};
      case '21':
        return {bucket: 'lowvis', description: 'Haze', timeframe: 'na'};
      case '22':
        return {bucket: 'lowvis', description: 'Smoke', timeframe: 'na'};
      case '23':
        return {bucket: 'windy', description: 'Breezy', timeframe: 'na'};
      case '24':
        return {bucket: 'windy', description: 'Windy', timeframe: 'na'};
      case '25':
        return {bucket: 'wintry', description: 'Frigid', timeframe: 'na'};
      case '26':
        return {bucket: 'cloudy', description: 'Cloudy', timeframe: 'na'};
      case '27':
        return {bucket: 'cloudy', description: 'Mostly Cloudy', timeframe: 'night'};
      case '28':
        return {bucket: 'cloudy', description: 'Mostly Cloudy', timeframe: 'day'};
      case '29':
        return {bucket: 'cloudy', description: 'Partly Cloudy', timeframe: 'night'};
      case '30':
        return {bucket: 'cloudy', description: 'Partly Cloudy', timeframe: 'day'};
      case '31':
        return {bucket: 'clear', description: 'Clear', timeframe: 'night'};
      case '32':
        return {bucket: 'clear', description: 'Sunny', timeframe: 'day'};
      case '33':
        return {bucket: 'clear', description: 'Mostly Clear', timeframe: 'night'};
      case '34':
        return {bucket: 'clear', description: 'Mostly Sunny', timeframe: 'day'};
      case '35':
        return {bucket: 'rain', description: 'Mixed Rain/Hail', timeframe: 'na'};
      case '36':
        return {bucket: 'clear', description: 'Hot', timeframe: 'day'};
      case '37':
        return {bucket: 'rain', description: 'Isolated Thunderstorms', timeframe: 'day'};
      case '38':
        return {bucket: 'rain', description: 'Scattered Thunderstorms', timeframe: 'day'};
      case '39':
        return {bucket: 'rain', description: 'Scattered Showers', timeframe: 'day'};
      case '40':
        return {bucket: 'rain', description: 'Heavy Rain', timeframe: 'na'};
      case '41':
        return {bucket: 'wintry', description: 'Scattered Snow Showers', timeframe: 'na'};
      case '42':
        return {bucket: 'wintry', description: 'Heavy Snow', timeframe: 'na'};
      case '43':
        return {bucket: 'wintry', description: 'Blizzard', timeframe: 'na'};
      case '44':
        return {bucket: 'na', description: 'Not Available', timeframe: 'na'};
      case '45':
        return {bucket: 'rain', description: 'Scattered Showers', timeframe: 'night'};
      case '46':
        return {bucket: 'wintry', description: 'Scattered Snow Showers', timeframe: 'night'};
      case '47':
        return {bucket: 'stormy', description: 'Scattered Thunderstorms', timeframe: 'night'};
      default:
        return {bucket: 'na', description: 'Not Available', timeframe: 'na'};
    }
  },

  getIconNameByIconCode: function(iconCode) {
      var code = parseInt(iconCode)
      if (code === NaN || code < 0 || code > 47) {
        return 'na';
      }

      for (var key in iconCodeMap) {
        if (iconCodeMap[key].indexOf(code.toString()) !== -1) {
          return key;
        }
      }
      return 'na';
  }
}