const Constants = require('expo-constants');

function getEnvKey() {
  // Web: REACT_APP_* or GOOGLE_MAPS_API_KEY
  if (typeof process !== 'undefined' && process.env) {
    return process.env.REACT_APP_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || null;
  }

  // Expo: try Constants
  try {
    const extra = (Constants.expoConfig && Constants.expoConfig.extra) || (Constants.manifest && Constants.manifest.extra) || {};
    return extra.GOOGLE_MAPS_API_KEY || null;
  } catch (e) {
    return null;
  }
}

const API_KEY = getEnvKey();

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('googleMaps fetch error', err, url);
    throw err;
  }
}

export async function geocodeAddress(address) {
  if (!API_KEY) throw new Error('Google Maps API key not set');
  const q = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${q}&key=${API_KEY}`;
  return fetchJson(url);
}

export async function reverseGeocode(lat, lng) {
  if (!API_KEY) throw new Error('Google Maps API key not set');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
  return fetchJson(url);
}

export async function placeAutocomplete(input, options = {}) {
  if (!API_KEY) throw new Error('Google Maps API key not set');
  const q = encodeURIComponent(input);
  const components = options.components ? `&components=${encodeURIComponent(options.components)}` : '';
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${q}${components}&key=${API_KEY}`;
  return fetchJson(url);
}

export function getStaticMapUrl({ center, zoom = 14, size = '600x300', markers = [] } = {}) {
  if (!API_KEY) throw new Error('Google Maps API key not set');
  const markerStr = markers.map(m => `&markers=${encodeURIComponent(m)}`).join('');
  const centerStr = typeof center === 'string' ? center : `${center.lat},${center.lng}`;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(centerStr)}&zoom=${zoom}&size=${size}${markerStr}&key=${API_KEY}`;
}

export default {
  geocodeAddress,
  reverseGeocode,
  placeAutocomplete,
  getStaticMapUrl,
};
