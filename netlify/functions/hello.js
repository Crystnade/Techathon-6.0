exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "Hello from Netlify Functions 👋", time: new Date().toISOString() }),
  };
};
