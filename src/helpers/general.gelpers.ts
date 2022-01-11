type THeaders = {
  [key: string]: string;
};

export const postRequest = async (
  url: string,
  headers: THeaders,
  data?: object,
  method: string = 'POST',
) => {
  try {
    let response = null;
    if (method === 'POST') {
      response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      });
      const res = await response.json();
      return res;
    } else if (method === 'GET') {
      response = await fetch(url, {
        method,
        headers,
      });
      const res = await response.text();
      console.log(JSON.parse(res));
      return JSON.parse(res);
    }
  } catch (e) {
    return;
  }
};
