export const getWeatherClassname = (id: number) => {
  if (id === 800) return 'weatherClearSky';
  const parsedID = Math.floor(id / 100);
  return (
    {
      2: 'weatherThunderstorm',
      3: 'weatherDrizzle',
      5: 'weatherRain',
      6: 'weatherSnow',
      7: 'weatherFog',
      8: 'weatherCloud',
    }[parsedID] || 'weatherDefault'
  );
};
