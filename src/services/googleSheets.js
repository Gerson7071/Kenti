const fetchCSV = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
};

const parseCSVToJSON = (text) => {
  const lines = text.split('\n');
  const headers = lines[0].split(',');
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(',');
    
    headers.forEach((header, index) => {
      obj[header.trim()] = currentLine[index].trim();
    });
    
    result.push(obj);
  }
  return result;
};

const fetchAndCacheCSV = async () => {
  const url = process.env.CSV_URL;
  const ttl = 30 * 60 * 1000; // 30 minutes
  const cachedData = localStorage.getItem('csvData');
  const cachedTime = localStorage.getItem('csvDataTime');

  if (cachedData && cachedTime && (Date.now() - cachedTime < ttl)) {
    return JSON.parse(cachedData);
  }

  const csvText = await fetchCSV(url);
  const jsonData = parseCSVToJSON(csvText);
  localStorage.setItem('csvData', JSON.stringify(jsonData));
  localStorage.setItem('csvDataTime', Date.now());

  return jsonData;
};

export default fetchAndCacheCSV;